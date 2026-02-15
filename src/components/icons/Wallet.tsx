import React from "react";

interface WalletProps {
  className?: string;
}

const Wallet: React.FC<WalletProps> = ({ className }) => {
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
        d="M12.6667 5.33334H3.33333C2.59695 5.33334 2 5.93029 2 6.66668V12.6667C2 13.4031 2.59695 14 3.33333 14H12.6667C13.4031 14 14 13.4031 14 12.6667V6.66668C14 5.93029 13.4031 5.33334 12.6667 5.33334Z"
        stroke="#121212"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 10.6667C11.0349 10.6667 11.3333 10.3682 11.3333 10C11.3333 9.63182 11.0349 9.33334 10.6667 9.33334C10.2985 9.33334 10 9.63182 10 10C10 10.3682 10.2985 10.6667 10.6667 10.6667Z"
        fill="#121212"
      />
      <path
        d="M4 5.33334V3.77334C4 3.18668 4.42667 2.68001 5.01333 2.58668L11.68 1.42668C11.8534 1.39673 12.0311 1.40444 12.2012 1.44934C12.3712 1.49423 12.5295 1.57523 12.6647 1.68668C12.7999 1.79812 12.9088 1.93731 12.9838 2.09431C13.0587 2.25132 13.0978 2.42245 13.0987 2.59601L13.0987 5.33334"
        stroke="#121212"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Wallet;
