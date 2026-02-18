import { useTranslation } from "react-i18next";

interface BreadcrumbsProps {
  tripName: string;
  placeName: string;
}

const Breadcrumbs = ({ tripName, placeName }: BreadcrumbsProps) => {
  const { t } = useTranslation();

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center gap-1 space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a
            href="/"
            className="text-dark inline-flex items-center text-sm font-medium hover:text-fg-brand"
          >
            {t("header.destinations")}
          </a>
        </li>
        {placeName && (
          <li>
            <div className="flex items-center space-x-1.5">
              <svg
                className="w-6 h-6 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#121212"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
              <span className="text-dark inline-flex items-center text-sm font-medium">
                {placeName}
              </span>
            </div>
          </li>
        )}
        <li aria-current="page">
          <div className="flex items-center space-x-1.5">
            <svg
              className="w-6 h-6 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="#121212"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
            <span className="text-gray inline-flex items-center text-sm font-medium">
              {tripName}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
