import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";
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

// --- Arrow Components ---
interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow = ({ className, onClick }: ArrowProps) => {
  // react-slick adds "slick-disabled" to className when at end
  const isDisabled = className?.includes("slick-disabled");
  if (isDisabled) return null;

  return (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all cursor-pointer"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M15 18L9 12L15 6"
          stroke="#121212"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

const PrevArrow = ({ className, onClick }: ArrowProps) => {
  const isDisabled = className?.includes("slick-disabled");
  if (isDisabled) return null;

  return (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all cursor-pointer"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 18L15 12L9 6"
          stroke="#121212"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

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

// --- Trip Card Component ---
interface TripCardProps {
  trip: Trip;
}

const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  return (
    <motion.div
      dir="rtl"
      className="px-2! md:px-4!"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative overflow-hidden rounded-4xl cursor-pointer group">
        {/* Background Image */}
        <div
          className="w-full h-100 md:h-[585px] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
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
          <div className="absolute top-4 md:top-6 right-3 md:right-4 z-10">
            <div className="flex flex-row-reverse items-center gap-1 bg-[#FEFEFE] rounded-[28px] px-2 py-1.5 md:py-2">
              <span className="text-dark text-[10px] md:text-xs font-semibold leading-none">
                تقسيط مريح
              </span>
              <Wallet className="w-3.5 h-3.5 md:w-4 md:h-4" />
            </div>
          </div>
        )}

        {/* Bottom Content */}
        <div className="text-right! w-full absolute bottom-0 left-0 right-0 p-3 md:p-4 z-10">
          <div className="bg-black/15 backdrop-blur-xs rounded-2xl p-3 md:p-4 flex flex-col items-end gap-2.5 md:gap-3">
            <div className="flex flex-col items-end gap-2 md:gap-3 w-full">
              <div className="flex flex-col items-end gap-1.5 md:gap-3">
                <h3 className="text-[#FEFEFE] text-sm md:text-lg font-semibold leading-none text-right">
                  {trip.title}
                </h3>
                <p className="text-[#FEFEFE] text-xs md:text-base font-medium leading-none text-right">
                  أسعار تبدأ من : {trip.price}
                </p>
                <p className="text-[#FEFEFE] text-xs md:text-base font-medium leading-none text-right">
                  مدة الرحلة: {trip.duration}
                </p>
              </div>
              {/* Feature Badges */}
              <div className="flex flex-wrap justify-end gap-1.5 md:gap-2 w-full">
                {trip.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1 bg-[#E9E9E9] rounded-[20px] px-2 py-1"
                  >
                    <span className="text-dark text-[8px] md:text-[10px] font-medium leading-none">
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
    </motion.div>
  );
};

// --- Static Data ---
const destinations: Destination[] = [
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
  const [activeDestination, setActiveDestination] = useState(0);

  const destinationSliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const tripSliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  const activeTrips = destinations[activeDestination]?.trips ?? [];

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-[120px] py-8! md:py-16!">
      {/* Section Header */}
      <p className="text-gray text-[10px] md:text-lg font-medium">
        الوجهات السياحية
      </p>
      <h2 className="text-dark text-lg md:text-[40px] font-semibold leading-[150%]">
        <span className="text-[#00567E]">إختر وجهتك</span> القادمة وانطلق في{" "}
        <span className="text-[#00567E]">رحلة لا تُنسى</span>
      </h2>

      {/* Destination Tabs (Slider) */}
      <div className="slider-container mt-6! md:mt-12! relative">
        <Slider {...destinationSliderSettings}>
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="px-2! md:px-3!"
              onClick={() => setActiveDestination(index)}
            >
              <div
                className={`relative overflow-hidden rounded-[20px] md:rounded-[50px] w-[104px] md:w-full cursor-pointer transition-all duration-300 ${
                  activeDestination === index
                    ? "border-[3px] md:border-[5px] border-white shadow-[0_0_12px_rgba(0,0,0,0.25)]"
                    : "border-[3px] md:border-[5px] border-transparent hover:shadow-md"
                }`}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-[104px] md:w-full h-[119px] md:h-[377px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Trip Count Badge */}
                <div className="w-20 md:w-[115px] h-6 md:h-8 bg-[#FEFEFE] rounded-[34px] absolute top-2 md:top-4 right-2 md:right-6 flex items-center justify-center gap-1">
                  <p className="text-dark text-[10px] md:text-base font-semibold leading-[100%]">
                    {dest.tripCount}
                  </p>
                  <div className="w-3 h-3 md:w-4 md:h-4">
                    <Flag />
                  </div>
                </div>

                {/* Destination Name */}
                <div className="w-[104px] md:w-full h-[22px] md:h-14 bg-[#FFFFFF80] backdrop-blur-sm absolute bottom-0 flex items-center justify-center text-[#FEFEFE] text-sm md:text-[32px] font-semibold">
                  {dest.name}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Trip Cards Section */}
      <div className="mt-8! md:mt-12! relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDestination}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <Slider {...tripSliderSettings}>
              {activeTrips.map((trip, idx) => (
                <TripCard key={`${activeDestination}-${idx}`} trip={trip} />
              ))}
            </Slider>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-8! md:mt-12!">
        <button className="bg-[#0478AF] text-white font-semibold text-sm md:text-lg px-10 md:px-14 py-2.5 md:py-3 rounded-[50px] cursor-pointer hover:bg-[#0590D0] transition-colors">
          عرض المزيد
        </button>
      </div>
    </section>
  );
};

export default Destinations;
