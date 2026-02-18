import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setDirection(index > activeIndex ? "forward" : "backward");
      setActiveIndex(index);
    },
    [activeIndex],
  );

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setDirection("forward");
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

  // Enhanced slider animation variants
  const slideVariants = {
    enter: (direction: "forward" | "backward") => ({
      x: direction === "forward" ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      rotateY: direction === "forward" ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        opacity: { duration: 0.3 },
      },
    },
    exit: (direction: "forward" | "backward") => ({
      x: direction === "forward" ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      rotateY: direction === "forward" ? -15 : 15,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        opacity: { duration: 0.3 },
      },
    }),
  };

  // Dot indicator animation
  const dotVariants = {
    inactive: {
      scale: 1,
      backgroundColor: "#D2D1D1",
    },
    active: {
      scale: 1.2,
      backgroundColor: "#0478AF",
      transition: {
        type: "spring" as const,
        stiffness: 500,
        damping: 25,
      },
    },
    hover: {
      scale: 1.3,
      backgroundColor: "#A0A0A0",
    },
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
        <span className="text-[#00567E]">{t("booking.titlePart3")}</span>
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
          <div className="w-full h-[400px] rounded-[32px] overflow-hidden relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={activeIndex}
                src={BOOKING_IMAGES[activeIndex]}
                alt="booking"
                className="w-full h-full object-cover absolute inset-0"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{ perspective: 1000 }}
              />
            </AnimatePresence>
          </div>

          <div className="md:hidden flex justify-center gap-2 mt-4">
            {BOOKING_IMAGES.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goTo(index)}
                className={`rounded-full ${
                  index === activeIndex ? "w-6 h-2" : "w-2 h-2"
                }`}
                variants={dotVariants}
                initial="inactive"
                animate={index === activeIndex ? "active" : "inactive"}
                whileHover={index !== activeIndex ? "hover" : undefined}
                transition={{ duration: 0.3 }}
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
