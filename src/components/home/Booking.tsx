import { useState, useEffect, useRef, useCallback } from "react";
import Bags from "../icons/Bags";
import Plane from "../icons/Plane";
import Whatsapp from "../icons/Whatsapp";

const BOOKING_IMAGES = [
  "/images/booking.png",
  "/images/booking.png",
  "/images/booking.png",
];

const Booking = () => {
  const BookingData = [
    {
      icon: Plane,
      title: "اختر رحلتك المثالية",
      description: "استكشف برامجنا المتنوعة وحدد رحلتك القادمة بكل سهولة.",
    },
    {
      icon: Bags,
      title: "حدد كل ما يناسب رحلتك",
      description: "حدد كل تفاصيل رحلتك الآن واستمتع برحلة بلا عناء.",
    },
    {
      icon: Whatsapp,
      title: "تواصل مباشرة مع فريقنا",
      description: "احجز من خلال WhatsApp واحصل على دعم فوري من خبرائنا.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setActiveIndex(index);
    },
    [activeIndex],
  );

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BOOKING_IMAGES.length);
    }, 4000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  return (
    <section className="container lg:py-17! py-8!">
      <p className="text-[#505050] md:text-lg text-[10px] font-medium">
        كيفية الحجز
      </p>

      <h2 className="text-[#121212] md:text-[40px] text-lg font-semibold leading-[1.4]">
        <span className="text-[#00567E]">رحلة</span> خالية من التعقيد حجز{" "}
        <span className="text-[#00567E]">سلس وسريع</span>
      </h2>

      <div className="lg:-mt-40 mt-6 flex lg:flex-row flex-col items-center justify-between gap-10">
        <div className="flex flex-col gap-8">
          {BookingData.map((item, index) => {
            return (
              <div key={index} className="flex items-center gap-6">
                <item.icon />
                <div>
                  <h3 className="text-[#121212] md:text-[32px] text-base font-semibold">
                    <span className="text-[#00567E]">
                      {item.title.split(" ")[0]}
                    </span>{" "}
                    {item.title.split(" ").slice(1).join(" ")}
                  </h3>
                  <p className="text-[#505050] md:text-xl text-xs font-medium mt-4">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative w-full max-w-[500px]">
          <div className="w-full h-[400px] rounded-[32px] overflow-hidden">
            <img
              src={BOOKING_IMAGES[activeIndex]}
              alt="booking"
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {BOOKING_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-6 h-2 bg-[#0478AF]"
                    : "w-2 h-2 bg-[#D2D1D1] hover:bg-[#A0A0A0]"
                }`}
                aria-label={`صورة ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
