import Axios, {
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  type AxiosError,
} from "axios";
import toast from "react-hot-toast";
import i18n from "../i18n";

const API_BASE_URL = "https://cp-travel.tajj.xyz/api";

// A set of endpoint substrings for which we should NOT show API-toasts
export const toastExcludedEndpoints: Set<string> = new Set();

function authRequestInterceptor(
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig {
  config.headers = config.headers || {};
  config.headers["Accept"] = "application/json";
  config.headers["Accept-Language"] = i18n.language;
  // If the request body is FormData, let Axios set the correct multipart Content-Type
  // (including the boundary). Do not override it here.
  if (config.data instanceof FormData) {
    if ("Content-Type" in config.headers) delete config.headers["Content-Type"];
  } else {
    config.headers["Content-Type"] = "application/json";
  }

  return config;
}

export const axios = Axios.create({
  baseURL: API_BASE_URL,
  paramsSerializer: {
    serialize: (params) => {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => searchParams.append(`${key}[]`, item));
        } else if (value !== undefined && value !== null) {
          searchParams.append(key, String(value));
        }
      });
      return searchParams.toString();
    },
  },
});

axios.interceptors.request.use(authRequestInterceptor);

// Helper to extract error message from API response
const getErrorMessageFromResponse = (error: AxiosError): string => {
  const data = error.response?.data as
    | {
        message?: string;
        errors?: Record<string, string[]>;
      }
    | undefined;

  if (data?.message) {
    return data.message;
  }

  if (data?.errors) {
    const firstError = Object.values(data.errors)[0];
    if (firstError && firstError.length > 0) {
      return firstError[0];
    }
  }

  if (error.message) {
    return error.message;
  }

  return "An unexpected error occurred";
};

// Helper to extract success message from API response
const getSuccessMessageFromResponse = (
  response: AxiosResponse,
): string | null => {
  const data = response.data as { message?: string } | undefined;
  return data?.message || null;
};

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    // Show success toast if API returns a message (for mutating requests)
    const method = response.config.method?.toLowerCase();
    const url = response.config?.url ?? "";
    const isExcluded = Array.from(toastExcludedEndpoints).some((ep) =>
      url.includes(ep),
    );
    if (method && ["post", "put", "patch", "delete"].includes(method)) {
      if (!isExcluded) {
        let message = getSuccessMessageFromResponse(response);
        if (message) {
          // Check for specific backend translation keys
          if (
            message === "passwords.sent" ||
            message === "pasword.sent_target" ||
            message === "passwords.sent_target" ||
            message === "password.sent_target"
          ) {
            message = i18n.t("auth:passwords.sent");
          } else if (message.includes("passwords.")) {
            // Try to translate generic password messages if they exist
            const key = `auth:${message}`;
            if (i18n.exists(key)) {
              message = i18n.t(key);
            }
          }
          toast.success(message);
        }
      }
    }
    return response;
  },
  (error: AxiosError) => {
    // Log the error for debugging
    console.error("API Error:", error.response?.status, error.response?.data);

    // Show error toast (unless the endpoint is excluded)
    const errUrl = error.config?.url ?? "";
    const isErrExcluded = Array.from(toastExcludedEndpoints).some((ep) =>
      errUrl.includes(ep),
    );
    const errorMessage = getErrorMessageFromResponse(error);
    if (!isErrExcluded) {
      toast.error(errorMessage);
    }

    // Handle 404 Not Found: redirect to /404
    if (error.response?.status === 404) {
      if (typeof window !== "undefined") {
        window.location.replace("/404");
        return new Promise(() => {}); // Prevent further error handling
      }
    }

    return Promise.reject(error);
  },
);
