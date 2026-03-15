import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { getPageById, type Page } from "../lib/api/pages";

const PageDetail = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const {
    data: page,
    isLoading,
    isError,
  } = useQuery<Page>({
    queryKey: ["page", id],
    queryFn: () => getPageById(Number(id)),
    enabled: !!id,
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin w-8 h-8 border-4 border-[#0478AF] border-t-transparent rounded-full" />
      </div>
    );

  if (isError || !page)
    return (
      <p className="text-center mt-10">
        {t("error_loading_page") || "Error loading page"}
      </p>
    );

  return (
    <div className="container md:py-14 py-8 mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center md:text-start">
        {page.title[i18n.language as "en" | "ar"]}
      </h1>

      <div
        className="prose max-w-full"
        dangerouslySetInnerHTML={{
          __html: page.description[i18n.language as "en" | "ar"],
        }}
      />
    </div>
  );
};

export default PageDetail;
