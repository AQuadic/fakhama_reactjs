import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Flag from "../icons/Flag";
import Star from "../icons/Star";
import Meal from "../icons/Meal";
import PlaneSmall from "../icons/PlaneSmall";
import Wallet from "../icons/Wallet";

// --- Types ---
interface Trip {
  title: string;
  price: string;
  duration: string;
  image: string;
  features: { label: string; icon: "star" | "meal" | "plane" }[];
  hasInstallment: boolean;
}

interface Destination {
  name: string;
  image: string;
  tripCount: string;
  trips: Trip[];
}

// --- Feature Icon Renderer ---
const FeatureIcon: React.FC<{ type: "star" | "meal" | "plane" }> = ({
  type,
}) => {
  switch (type) {
    case "star":
      return <Star className="w-4 h-4" />;
    case "meal":
      return <Meal className="w-4 h-4" />;
    case "plane":
      return <PlaneSmall className="w-4 h-4" />;
  }
};

// --- Static Data ---
const destinations: Destination[] = [
  // ... (data remains)
  {
    name: "مكة المكرمة",
    image: "/images/makka.jpg",
    tripCount: "+900 رحلة",
    trips: [
      {
        title: "عمرة رمضان - مكة المكرمة",
        price: "3,150 د.إ",
        duration: "3 أيام",
        image: "/images/trips/trip_card_1.png",
        features: [
          { label: "فندق فاخر", icon: "star" },
          { label: "وجبة افطار و سحور", icon: "meal" },
          { label: "طيران دولي", icon: "plane" },
        ],
        hasInstallment: true,
      },
      {
        title: "عمرة رجب - مكة المكرمة",
        price: "2,800 د.إ",
        duration: "5 أيام",
        image: "/images/trips/trip_card_2.png",
        features: [
          { label: "فندق فاخر", icon: "star" },
          { label: "وجبة افطار و سحور", icon: "meal" },
          { label: "طيران دولي", icon: "plane" },
        ],
        hasInstallment: true,
      },
      {
        title: "عمرة شعبان - مكة المكرمة",
        price: "3,500 د.إ",
        duration: "4 أيام",
        image: "/images/trips/trip_card_3.png",
        features: [
          { label: "فندق فاخر", icon: "star" },
          { label: "وجبة افطار و سحور", icon: "meal" },
          { label: "طيران دولي", icon: "plane" },
        ],
        hasInstallment: true,
      },
    ],
  },
  {
    name: "مكة المكرمة",
    image: "/images/makka.jpg",
    tripCount: "+900 رحلة",
    trips: [
      {
        title: "عمرة رمضان - مكة المكرمة",
        price: "3,150 د.إ",
        duration: "3 أيام",
        image: "/images/trips/trip_card_1.png",
        features: [
          { label: "فندق فاخر", icon: "star" },
          { label: "وجبة افطار و سحور", icon: "meal" },
          { label: "طيران دولي", icon: "plane" },
        ],
        hasInstallment: true,
      },
      {
        title: "عمرة رجب - مكة المكرمة",
        price: "2,800 د.إ",
        duration: "5 أيام",
        image: "/images/trips/trip_card_2.png",
        features: [
          { label: "فندق فاخر", icon: "star" },
          { label: "وجبة افطار و سحور", icon: "meal" },
          { label: "طيران دولي", icon: "plane" },
        ],
        hasInstallment: true,
      },
      {
        title: "عمرة شعبان - مكة المكرمة",
        price: "3,500 د.إ",
        duration: "4 أيام",
        image: "/images/trips/trip_card_3.png",
        features: [
          { label: "فندق فاخر", icon: "star" },
          { label: "وجبة افطار و سحور", icon: "meal" },
          { label: "طيران دولي", icon: "plane" },
        ],
        hasInstallment: true,
      },
    ],
  },
  {
    name: "اسطنبول",
    image: "/images/istanbul.jpg",
    tripCount: "+500 رحلة",
    trips: [
      {
        title: "جولة اسطنبول الكلاسيكية",
        price: "4,200 د.إ",
        duration: "7 أيام",
        image: "/images/trips/trip_card_2.png",
        features: [
          { label: "فندق فاخر", icon: "star" },
          { label: "وجبة افطار و سحور", icon: "meal" },
          { label: "طيران دولي", icon: "plane" },
        ],
        hasInstallment: true,
      },
      {
        title: "اسطنبول العائلية",
        price: "5,100 د.إ",
        duration: "10 أيام",
        image: "/images/trips/trip_card_1.png",
        features: [
          { label: "فندق فاخر", icon: "star" },
          { label: "وجبة افطار و سحور", icon: "meal" },
          { label: "طيران دولي", icon: "plane" },
        ],
        hasInstallment: true,
      },
      {
        title: "اسطنبول و بورصة",
        price: "6,000 د.إ",
        duration: "12 أيام",
        image: "/images/trips/trip_card_3.png",
        features: [
          { label: "فندق فاخر", icon: "star" },
          { label: "وجبة افطار و سحور", icon: "meal" },
          { label: "طيران دولي", icon: "plane" },
        ],
        hasInstallment: false,
      },
    ],
  },
  {
    name: "دبي",
    image: "/images/dubai.jpg",
    tripCount: "+700 رحلة",
    trips: [
      {
        title: "جولة دبي السياحية",
        price: "2,500 د.إ",
        duration: "4 أيام",
        image: "/images/trips/trip_card_3.png",
        features: [
          { label: "فندق فاخر", icon: "star" },
          { label: "وجبة افطار و سحور", icon: "meal" },
        ],
        hasInstallment: true,
      },
      {
        title: "دبي الفاخرة",
        price: "8,000 د.إ",
        duration: "5 أيام",
        image: "/images/trips/trip_card_1.png",
        features: [
          { label: "فندق فاخر", icon: "star" },
          { label: "طيران دولي", icon: "plane" },
        ],
        hasInstallment: true,
      },
      {
        title: "دبي العائلية",
        price: "5,500 د.إ",
        duration: "6 أيام",
        image: "/images/trips/trip_card_2.png",
        features: [
          { label: "فندق فاخر", icon: "star" },
          { label: "وجبة افطار و سحور", icon: "meal" },
          { label: "طيران دولي", icon: "plane" },
        ],
        hasInstallment: false,
      },
    ],
  },
];

// --- Main Destinations Component ---
const Destinations: React.FC = () => {
  const { i18n } = useTranslation();
  const [activeDestination, setActiveDestination] = useState(0);

  const activeTrips = destinations[activeDestination]?.trips ?? [];
  const isRTL = i18n.dir() === "rtl";

  return (
    <section className="container overflow-hidden md:overflow-visible">
      {/* Section Header */}
      <div className="px-4! md:px-0!">
        <p className="text-gray text-[10px]! md:text-lg! font-medium">
          الوجهات السياحية
        </p>
        <h2 className="text-dark text-lg! md:text-[40px]! font-semibold leading-[150%]">
          <span className="text-[#00567E]">إختر وجهتك</span> القادمة وانطلق في{" "}
          <span className="text-[#00567E]">رحلة لا تُنسى</span>
        </h2>
      </div>
      {/* Destination Tabs Slider */}
      <div className="mt-6! md:mt-12! px-4! md:px-0! relative destinations-slider">
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={12}
          navigation={{
            nextEl: ".destinations-next",
            prevEl: ".destinations-prev",
          }}
          dir={isRTL ? "rtl" : "ltr"}
          key={isRTL ? "rtl" : "ltr"}
          breakpoints={{
            768: {
              spaceBetween: 24,
            },
          }}
          className="!pb-2"
        >
          {destinations.map((dest, index) => (
            <SwiperSlide key={index}>
              <div
                className="cursor-pointer"
                onClick={() => setActiveDestination(index)}
              >
                <div
                  className={`relative overflow-hidden rounded-[20px] md:rounded-[50px] transition-all duration-300 w-full h-[119px] md:h-[377px] ${
                    activeDestination === index
                      ? "border-[3px] md:border-[5px] border-white shadow-[0_0_12px_rgba(0,0,0,0.25)]"
                      : "border-[3px] md:border-[5px] border-transparent "
                  }`}
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                  {/* Trip Count Badge */}
                  <div className="w-auto px-2! h-6 md:h-8 bg-[#FEFEFE] rounded-[34px] absolute top-2 md:top-4 right-2 md:right-6 flex items-center justify-center gap-1!">
                    <p className="text-dark text-[8px] md:text-base font-semibold leading-[100%]">
                      {dest.tripCount}
                    </p>
                    <div className="w-3 h-3 md:w-4 md:h-4">
                      <Flag />
                    </div>
                  </div>

                  {/* Destination Name */}
                  <div className="w-full h-[22px] md:h-14 bg-[#FFFFFF80] backdrop-blur-sm absolute bottom-0 flex items-center justify-center text-[#FEFEFE] text-sm md:text-[32px] font-semibold">
                    {dest.name}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows - Desktop Only */}
        <button
          className="destinations-prev hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full items-center justify-center shadow-lg hover:bg-gray-100 transition-colors -translate-x-5"
          aria-label="Previous destination"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="destinations-next hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full items-center justify-center shadow-lg hover:bg-gray-100 transition-colors translate-x-5"
          aria-label="Next destination"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      {/* Trip Cards Section */}
      <div className="mt-8! md:mt-12! relative trips-slider">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDestination}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <Swiper
              modules={[Navigation]}
              slidesPerView={1.33}
              spaceBetween={16}
              navigation={{
                nextEl: ".trips-next",
                prevEl: ".trips-prev",
              }}
              dir={isRTL ? "rtl" : "ltr"}
              key={`${activeDestination}-${isRTL ? "rtl" : "ltr"}`}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              className="px-4! md:px-0!"
            >
              {activeTrips.map((trip, idx) => (
                <SwiperSlide key={`${activeDestination}-${idx}`}>
                  <div className="w-full">
                    <div className="relative overflow-hidden rounded-[32px] md:rounded-4xl cursor-pointer group">
                      {/* Background Image */}
                      <div
                        className="w-full h-[430px] md:h-[585px] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${trip.image})` }}
                      />

                      {/* Gradient Overlay */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(0deg, rgba(0, 0, 0, 1) 28%, rgba(248, 243, 243, 0.5) 100%)",
                        }}
                      />

                      {/* Installment Badge — top-left */}
                      {trip.hasInstallment && (
                        <div className="absolute top-4 md:top-6 left-3 md:left-4 z-10">
                          <div className="flex flex-row-reverse items-center gap-1! bg-[#FEFEFE] rounded-[28px] px-2! py-1.5! md:py-2!">
                            <span className="text-dark text-[8px] md:text-xs font-semibold leading-none">
                              تقسيط مريح
                            </span>
                            <Wallet className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          </div>
                        </div>
                      )}

                      {/* Bottom Content */}
                      <div className="w-full absolute bottom-0 left-0 right-0 p-3! md:p-4! z-10">
                        <div className="bg-black/15 backdrop-blur-xs rounded-2xl p-3! md:p-4! flex flex-col gap-2.5! md:gap-3!">
                          <div className="flex flex-col gap-2! md:gap-3! w-full">
                            <div className="flex flex-col gap-1.5! md:gap-3!">
                              <h3 className="text-[#FEFEFE] text-base md:text-lg font-semibold leading-none">
                                {trip.title}
                              </h3>
                              <p className="text-[#FEFEFE] text-sm md:text-base font-medium leading-none">
                                أسعار تبدأ من : {trip.price}
                              </p>
                              <p className="text-[#FEFEFE] text-sm md:text-base font-medium leading-none">
                                مدة الرحلة: {trip.duration}
                              </p>
                            </div>
                            {/* Feature Badges */}
                            <div className="flex flex-wrap gap-1.5! md:gap-2! w-full">
                              {trip.features.map((feature, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center gap-1! bg-[#E9E9E9] rounded-[20px] px-2! py-1!"
                                >
                                  <span className="text-dark text-[10px] md:text-[10px] font-medium leading-none">
                                    {feature.label}
                                  </span>
                                  <FeatureIcon type={feature.icon} />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows - Desktop Only */}
        <button
          className="trips-prev hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full items-center justify-center shadow-lg hover:bg-gray-100 transition-colors -translate-x-5"
          aria-label="Previous trip"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="trips-next hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full items-center justify-center shadow-lg hover:bg-gray-100 transition-colors translate-x-5"
          aria-label="Next trip"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      {/* Show More Button */}
      <div className="flex justify-center mt-8! md:mt-12! px-4! md:px-0!">
        <button className="bg-[#0478AF] text-white font-semibold text-sm md:text-lg px-10! md:px-14! py-2.5! md:py-3! rounded-[50px] cursor-pointer hover:bg-[#0590D0] transition-colors w-full md:w-auto">
          عرض المزيد
        </button>
      </div>
    </section>
  );
};

export default Destinations;
