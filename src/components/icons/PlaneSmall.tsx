import React from "react";

interface PlaneSmallProps {
  className?: string;
}

const PlaneSmall: React.FC<PlaneSmallProps> = ({ className }) => {
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
        d="M2.96 4.29L3.81 3.44C3.81 3.44 6.96 4.49 8.77 5.54L10.79 3.52C11.09 3.22 11.48 3 11.9 2.95C12.22 2.91 12.61 2.87 12.97 2.87L13.17 3.06C13.17 3.42 13.14 3.81 13.1 4.14C13.04 4.56 12.83 4.94 12.53 5.24L10.51 7.25C11.56 9.06 12.61 12.19 12.61 12.19L11.75 13.05C11.75 13.05 10.03 10.57 8.6 9.15C8.6 9.15 7.55 9.82 5.94 11.43C5.94 11.43 6.13 12.19 6.13 12.95L5.94 13.14C5.94 13.14 5.18 12.19 4.51 11.52C3.84 10.85 2.89 10.1 2.89 10.1L3.08 9.91C3.84 9.91 4.6 10.1 4.6 10.1C6.21 8.5 6.89 7.44 6.89 7.44C5.46 6.01 2.96 4.29 2.96 4.29Z"
        stroke="#121212"
        strokeWidth="0.8"
        fill="none"
      />
    </svg>
  );
};

export default PlaneSmall;
