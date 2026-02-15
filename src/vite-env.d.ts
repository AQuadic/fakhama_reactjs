/// <reference types="vite/client" />

// Allow CSS imports
declare module "*.css" {
  const content: string;
  export default content;
}

// Swiper CSS module declarations
declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
declare module "swiper/css/scrollbar";
