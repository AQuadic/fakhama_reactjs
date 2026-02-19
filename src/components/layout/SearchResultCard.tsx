import { useTranslation } from "react-i18next";
import type { Trip } from "../../lib/api/trips";

interface SearchResultCardProps {
  trip: Trip;
  onClick?: () => void;
}

export default function SearchResultCard({
  trip,
  onClick,
}: SearchResultCardProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language as "ar" | "en";

  const name = trip.name[lang] || trip.name.ar || trip.name.en;
  const place = trip.place?.name?.[lang] || trip.place?.name?.ar || "";
  const imageUrl = trip.image?.url;

  const minPrice = trip.prices?.length
    ? Math.min(...trip.prices.map((p) => parseFloat(p.price)))
    : null;

  const nextDate = trip.flight_schedules
    ?.filter((s) => s.is_active)
    .sort(
      (a, b) =>
        new Date(a.from_date).getTime() - new Date(b.from_date).getTime(),
    )[0];

  return (
    <button
      onClick={onClick}
      className="w-full text-start flex items-center gap-4 p-3 rounded-2xl hover:bg-[#F7FAFC] transition-colors duration-200 group"
    >
      {/* Thumbnail */}
      <div className="relative shrink-0 w-22 h-18 rounded-xl overflow-hidden bg-[#E8F4FB]">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                fill="#0478AF"
                opacity="0.3"
              />
              <circle cx="12" cy="9" r="2.5" fill="#0478AF" />
            </svg>
          </div>
        )}
        {/* Days badge */}
        {trip.number_of_days > 0 && (
          <span className="absolute bottom-1 start-1 text-[10px] font-semibold bg-[#0478AF] text-white rounded-md px-1.5 py-0.5 leading-tight">
            {trip.number_of_days} {lang === "ar" ? "أيام" : "days"}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-dark text-sm leading-snug truncate">
          {name}
        </p>
        {place && (
          <div className="flex items-center gap-1 mt-1">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                fill="#0478AF"
              />
              <circle cx="12" cy="9" r="2.5" fill="white" />
            </svg>
            <span className="text-[11px] text-[#0478AF] font-medium truncate">
              {place}
            </span>
          </div>
        )}
        {nextDate && (
          <p className="text-[11px] text-[#8C8C8C] mt-1">
            {new Date(nextDate.from_date).toLocaleDateString(
              lang === "ar" ? "ar-EG" : "en-US",
              {
                day: "numeric",
                month: "short",
                year: "numeric",
              },
            )}
          </p>
        )}
      </div>

      {/* Price */}
      {minPrice !== null && (
        <div className="shrink-0 text-end">
          <p className="text-[11px] text-[#8C8C8C] leading-none mb-0.5">
            {lang === "ar" ? "يبدأ من" : "from"}
          </p>
          <p className="font-bold text-[#0478AF] text-sm leading-none">
            {minPrice.toLocaleString()}
          </p>
          <p className="text-[10px] text-[#8C8C8C] leading-none mt-0.5">
            {lang === "ar" ? "درهم" : "AED"}
          </p>
        </div>
      )}

      {/* Chevron arrow — flipped in LTR via class */}
      <svg
        className={`shrink-0 text-[#D2D1D1] group-hover:text-[#0478AF] transition-colors duration-200 ${lang === "ar" ? "rotate-180" : ""}`}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 18L15 12L9 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
