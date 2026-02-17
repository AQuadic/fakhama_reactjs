import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Bags from "../icons/Bags";
import Plane from "../icons/Plane";
import Whatsapp from "../icons/Whatsapp";

const BOOKING_IMAGES = [
  "/images/slider1.png",
  "/images/slider2.png",
  "/images/slider3.png",
];

const Booking = () => {
  const { t } = useTranslation();

  const icons = [Plane, Bags, Whatsapp];

  const steps = t("booking.steps", { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setActiveIndex(index);
    },
    [activeIndex]
  );

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BOOKING_IMAGES.length);
    }, 4000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="container lg:py-17! py-8!">
      <motion.p
        className="text-[#505050] md:text-lg text-[10px] font-medium"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {t("booking.smallTitle")}
      </motion.p>

      <motion.h2
        className="text-[#121212] md:text-[40px] text-lg font-semibold leading-[1.4]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <span className="text-[#00567E]">{t("booking.titlePart1")}</span>{" "}
        {t("booking.titlePart2")}{" "}
        <span className="text-[#00567E]">
          {t("booking.titlePart3")}
        </span>
      </motion.h2>

      <div className="lg:-mt-40 mt-6 flex lg:flex-row flex-col items-center justify-between gap-10">
        <motion.div
          className="flex flex-col gap-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((item, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={index}
                className="flex items-center gap-6"
                variants={fadeInUp}
              >
                <Icon />
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
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="relative w-full max-w-[500px]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="w-full h-[400px] rounded-[32px] overflow-hidden">
            <img
              src={BOOKING_IMAGES[activeIndex]}
              alt="booking"
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>

          <div className="md: hidden flex justify-center gap-2 mt-4">
            {BOOKING_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`rounded-full transition-all duration-300 ${index === activeIndex
                  ? "w-6 h-2 bg-[#0478AF]"
                  : "w-2 h-2 bg-[#D2D1D1] hover:bg-[#A0A0A0]"
                  }`}
                aria-label={`image ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;
