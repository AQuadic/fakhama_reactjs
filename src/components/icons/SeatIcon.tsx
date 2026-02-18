import type { SVGProps } from "react";

const SeatIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Seat back */}
      <path d="M7 4C7 2.9 7.9 2 9 2H15C16.1 2 17 2.9 17 4V13H7V4Z" />
      {/* Seat cushion */}
      <path d="M5 13C5 11.9 5.9 11 7 11H17C18.1 11 19 11.9 19 13V15C19 16.1 18.1 17 17 17H7C5.9 17 5 16.1 5 15V13Z" />
      {/* Legs */}
      <path
        d="M8 17V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 17V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Armrests */}
      <path
        d="M5 13H3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M19 13H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SeatIcon;
