import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Flag from "../icons/Flag";

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const NextArrow = (props: ArrowProps) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
            style={{ left: "-24px" }}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
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

const PrevArrow = (props: ArrowProps) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all"
            style={{ right: "-24px" }}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
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

const Destinations: React.FC = () => {
    const settings = {
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

    const destinations = [
        { name: "مكة المكرمة", image: "/images/makka.jpg" },
        { name: "اسطنبول", image: "/images/istanbul.jpg" },
        { name: "دبي", image: "/images/dubai.jpg" },
        { name: "مكة المكرمة", image: "/images/makka.jpg" },
        { name: "اسطنبول", image: "/images/istanbul.jpg" },
        { name: "دبي", image: "/images/dubai.jpg" },
    ];

    return (
        <section className="container py-8! md:py-16!">
            <p className="text-[#505050] text-[10px] md:text-lg font-medium">
                الوجهات السياحية
            </p>

            <h2 className="text-[#121212] text-lg md:text-[40px] font-semibold leading-[150%]">
                <span className="text-[#00567E]">إختر وجهتك</span> القادمة وانطلق في{" "}
                <span className="text-[#00567E]">رحلة لا تُنسى</span>
            </h2>

            <div className="slider-container mt-6! md:mt-12! relative px-6! md:px-12!">
                <Slider {...settings}>
                    {destinations.map((dest, index) => (
                        <div key={index} className="px-2! md:px-3!">
                            <div className="relative overflow-hidden rounded-[20px] md:rounded-[50px] w-[104px] md:w-full">
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    className="w-[104px] md:w-full h-[119px] md:h-[377px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                                <div className="w-20 md:w-[115px] h-6 md:h-8 bg-[#FEFEFE] rounded-[34px] absolute top-2 md:top-4 right-2 md:right-6 flex items-center justify-center gap-1">
                                    <p className="text-[#121212] text-[10px] md:text-base font-semibold leading-[100%]">
                                        +900 رحلة
                                    </p>
                                    <div className="w-3 h-3 md:w-4 md:h-4">
                                        <Flag />
                                    </div>
                                </div>

                                <div className="w-[104px] md:w-full h-[22px] md:h-14 bg-[#FFFFFF80] backdrop-blur-sm absolute bottom-0 flex items-center justify-center text-[#FEFEFE] text-sm md:text-[32px] font-semibold">
                                    {dest.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Destinations;
