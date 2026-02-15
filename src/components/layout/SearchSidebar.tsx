import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import SearchIcon from "../icons/SearchIcon";
import SearchEmptyState from "./SearchEmptyState";

interface SearchSidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchSidebar({ isOpen, onClose }: SearchSidebarProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const closeSearch = () => {
        onClose();
        setSearchTerm("");
    };

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                closeSearch();
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isOpen]);

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-[#000000B2] z-40"
                        onClick={closeSearch}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <div className="mx-auto flex items-center justify-center">
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed top-4 md:right-4 bottom-4 w-[343px] md:w-197.25 bg-white shadow-xl z-50 overflow-y-auto rounded-2xl scrollbar-hide"
                            style={{
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                            }}
                        >
                            <style>{`
                                .scrollbar-hide::-webkit-scrollbar {
                                display: none;
                                }
                            `}</style>
                            <div className="p-6!">
                                <div className="mb-8!">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="إبحث عن رحتلك المفضلة .."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full px-12! py-3! pr-10! border border--[#D2D1D1] rounded-[50px] focus:outline-none"
                                            autoFocus
                                        />
                                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#505050" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M22 22L20 20" stroke="#505050" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {searchTerm.trim() === "" ? (
                                    <div className="py-32!">
                                        <div className="flex flex-col items-center justify-center">
                                            <SearchIcon />
                                            <p className="text-2xl text-[#121212] font-medium text-center mt-4">
                                                ابدأ رحلتك الآن! ابحث عن الوجهة التي تحلم بها.
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <SearchEmptyState />
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}