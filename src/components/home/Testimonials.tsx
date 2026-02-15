import { useState, useCallback, useEffect, useRef } from "react";
import testimonialPerson1 from "../../assets/testimonial-person-1-76ad08.png";
import testimonialPerson2 from "../../assets/testimonial-person-2.png";

interface Testimonial {
  id: number;
  name: string;
  trip: string;
  rating: number;
  review: string;
  images: [string, string];
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "محمد عبدالله",
    trip: "رحلة اسطنبول",
    rating: 5,
    review:
      "كانت الرحلة أكثر من رائعة! التنظيم كان ممتاز والخدمة ممتازة، وكل التفاصيل الصغيرة اتحسبت بعناية كبيرة. من اختيار الفنادق والمطاعم إلى التنقلات اليومية والأنشطة الترفيهية، كل شيء كان على أعلى مستوى. شعرت أننا في أيدٍ أمينة طوال الرحلة، والفريق دائماً متواجد للإجابة على أي استفسار. بالفعل تجربة لا تُنسى وسأكرر السفر معهم بالتأكيد، وأنصح أي شخص يبحث عن رحلة مريحة وممتعة أن يختارهم دون تردد.",
    images: [testimonialPerson1, testimonialPerson2],
  },
  {
    id: 2,
    name: "أحمد خالد",
    trip: "رحلة دبي",
    rating: 5,
    review:
      "تجربة استثنائية من البداية للنهاية! كل شيء كان مرتب ومنظم بشكل رائع. الفنادق كانت ممتازة والبرنامج السياحي كان متنوع وممتع. فريق العمل كان متعاون جداً واهتموا بكل التفاصيل. أنصح الجميع بالسفر معهم.",
    images: [testimonialPerson1, testimonialPerson2],
  },
  {
    id: 3,
    name: "سارة محمد",
    trip: "رحلة موسكو",
    rating: 5,
    review:
      "رحلة لا تُنسى! كل شيء كان مثالي من الحجز وحتى العودة. التنظيم كان ممتاز والمرشد السياحي كان رائع. شكراً لكم على هذه التجربة المميزة ونتطلع للسفر معكم مرة أخرى.",
    images: [testimonialPerson1, testimonialPerson2],
  },
];

import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating || index === activeIndex) return;
      setIsAnimating(true);
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating, activeIndex],
  );

  // Auto-play
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  // Reset auto-play on manual interaction
  const handleDotClick = useCallback(
    (index: number) => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      goTo(index);
      autoPlayRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      }, 6000);
    },
    [goTo],
  );

  const testimonial = TESTIMONIALS[activeIndex];

  return (
    <div>
      {/* ===== DESKTOP ===== */}
      <div className="hidden lg:block">
        <div className="container">
          <div className="flex flex-col items-end gap-[58px]">
            {/* Section Header */}
            <div className="flex flex-col items-end gap-3 w-full">
              <span className="text-lg text-right! w-full font-medium text-[#505050]">
                {t("testimonials.title")}
              </span>
              <h2 className="text-[40px] text-right! w-full font-semibold leading-[1.5] text-[#00567E]">
                {t("testimonials.subtitle")}
              </h2>
            </div>

            {/* Content Row */}
            <div className="flex items-center gap-8 w-full">
              {/* Testimonial Content (appears on RIGHT in RTL) */}
              <div className="flex flex-col justify-center items-center gap-6 flex-1 max-w-[481px]">
                {/* Review Card */}
                <div className="flex flex-col items-start gap-4 w-full">
                  {/* Name + Trip */}
                  <div className="flex items-center gap-3 justify-start">
                    <div className="flex flex-col items-start gap-1.5">
                      <h3 className="text-2xl font-semibold text-black">
                        {testimonial.name}
                      </h3>
                      <span className="text-base font-medium text-[#505050]">
                        {testimonial.trip}
                      </span>
                    </div>
                  </div>

                  {/* Stars + Review */}
                  <div className="flex flex-col items-start gap-3 w-full">
                    <div
                      dir="ltr"
                      className="flex items-center gap-2 justify-end"
                    >
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <svg
                            key={i}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2L14.09 8.26L20.18 8.63L15.54 12.57L17.09 18.97L12 15.77L6.91 18.97L8.46 12.57L3.82 8.63L9.91 8.26L12 2Z"
                              fill="#F2A830"
                            />
                          </svg>
                        ),
                      )}
                    </div>
                    <p className="text-xl font-medium leading-[1.5] text-[#121212] text-right">
                      {testimonial.review}
                    </p>
                  </div>
                </div>

                {/* Pagination Dots */}
                <div dir="ltr" className="flex items-center gap-1">
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`rounded-full transition-all duration-300 ${
                        index === activeIndex
                          ? "w-6 h-2 bg-[#0478AF]"
                          : "w-2 h-2 bg-[#D2D1D1] hover:bg-[#A0A0A0]"
                      }`}
                      aria-label={`الشهادة ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Images Column (appears on LEFT in RTL) */}
              <div className="flex items-center gap-8 shrink-0">
                {/* Small Image + CTA (appears on RIGHT of images group in RTL) */}
                <div className="flex flex-col gap-4 w-[276px]">
                  <div className="w-full h-[306px] rounded-[32px] overflow-hidden">
                    <img
                      src={testimonial.images[1]}
                      alt=""
                      className="w-full h-full object-cover transition-opacity duration-400"
                      key={`sm-${testimonial.id}`}
                    />
                  </div>
                  <button className="w-full py-2 text-lg font-semibold text-[#00567E] border border-[#0478AF] rounded-full hover:bg-[#0478AF] hover:text-white transition-colors duration-200">
                    {t("testimonials.cta")}
                  </button>
                </div>

                {/* Large Image (appears on LEFT of images group in RTL) */}
                <div className="w-[379px] h-[378px] rounded-[32px] overflow-hidden">
                  <img
                    src={testimonial.images[0]}
                    alt=""
                    className="w-full h-full object-cover transition-opacity duration-400"
                    key={`lg-${testimonial.id}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MOBILE ===== */}
      <div className="lg:hidden">
        <div className="flex flex-col gap-6 px-4 container">
          {/* Top: Header + Images Row */}
          <div className="flex flex-col gap-6">
            {/* Section Header */}
            <div className="flex flex-col items-start gap-2">
              <span className="text-[10px] font-medium text-[#505050]">
                {t("testimonials.title")}
              </span>
              <h2 className="text-lg font-semibold leading-[1.5] text-[#00567E]">
                {t("testimonials.subtitle")}
              </h2>
            </div>

            {/* Images Row */}
            <div className="flex items-center justify-between gap-3">
              {/* Small Image + CTA (appears LEFT in RTL) */}
              <div className="flex flex-col gap-3 flex-1 min-w-0">
                <div className="w-full h-[161px] rounded-[20px] overflow-hidden">
                  <img
                    src={testimonial.images[1]}
                    alt=""
                    className="w-full h-full object-cover"
                    key={`mob-sm-${testimonial.id}`}
                  />
                </div>
                <button className="w-full py-2 text-xs font-bold text-[#00567E] border border-[#0478AF] rounded-full hover:bg-[#0478AF] hover:text-white transition-colors duration-200">
                  {t("testimonials.cta")}
                </button>
              </div>

              {/* Large Image (appears RIGHT in RTL) */}
              <div className="w-[190px] h-[221px] rounded-[20px] overflow-hidden shrink-0">
                <img
                  src={testimonial.images[0]}
                  alt=""
                  className="w-full h-full object-cover"
                  key={`mob-lg-${testimonial.id}`}
                />
              </div>
            </div>
          </div>

          {/* Bottom: Testimonial Content */}
          <div className="flex flex-col items-center gap-3">
            {/* Review Content */}
            <div className="flex flex-col items-start gap-2 w-full">
              {/* Name + Trip */}
              <div className="flex items-center gap-3 justify-start">
                <div className="flex flex-col items-start gap-2">
                  <h3 className="text-base font-semibold text-[#121212]">
                    {testimonial.name}
                  </h3>
                  <span className="text-[8px] font-medium text-[#505050]">
                    {testimonial.trip}
                  </span>
                </div>
              </div>

              {/* Stars + Review */}
              <div className="flex flex-col items-start gap-2 w-full">
                <div
                  dir="ltr"
                  className="flex items-center gap-1.5 justify-end"
                >
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L14.09 8.26L20.18 8.63L15.54 12.57L17.09 18.97L12 15.77L6.91 18.97L8.46 12.57L3.82 8.63L9.91 8.26L12 2Z"
                        fill="#F2A830"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-xs font-medium leading-[1.5] text-[#505050] text-right">
                  {testimonial.review}
                </p>
              </div>
            </div>

            {/* Pagination Dots - not shown in mobile Figma but keep for usability */}
          </div>
        </div>
      </div>
    </div>
  );
}
