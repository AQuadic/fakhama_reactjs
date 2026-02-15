import React from "react";

interface MealProps {
  className?: string;
}

const Meal: React.FC<MealProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.33333 1.33334V6.66668C5.33333 7.40306 4.73638 8.00001 4 8.00001H3.33333V14.6667"
        stroke="#121212"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33333 1.33334V4.00001"
        stroke="#121212"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.33333 1.33334V4.00001"
        stroke="#121212"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 1.33334C10.6667 1.33334 12.6667 2.66668 12.6667 5.33334C12.6667 8.00001 10.6667 8.00001 10.6667 8.00001V14.6667"
        stroke="#121212"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Meal;
