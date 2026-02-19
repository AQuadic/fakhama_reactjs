import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchIcon from "../icons/SearchIcon";
import SearchEmptyState from "./SearchEmptyState";
import SearchResultCard from "./SearchResultCard";
import { searchTrips } from "../../lib/api/trips";
import type { Trip } from "../../lib/api/trips";

interface SearchSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function SearchSpinner() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="w-10 h-10 border-3 border-[#0478AF]/20 border-t-[#0478AF] rounded-full animate-spin" />
    </div>
  );
}

export default function SearchSidebar({ isOpen, onClose }: SearchSidebarProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language as "ar" | "en";
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [results, setResults] = useState<Trip[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const closeSearch = useCallback(() => {
    onClose();
    setSearchTerm("");
    setDebouncedTerm("");
    setResults([]);
    setHasSearched(false);
  }, [onClose]);

  // Escape key listener
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeSearch();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, closeSearch]);

  // Auto-focus input when sidebar opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Debounce the search term (400ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 400);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Fetch results when debounced term changes
  useEffect(() => {
    const trimmed = debouncedTerm.trim();
    if (!trimmed) {
      // Reset search state without cascading if values already match
      setResults((prev) => (prev.length === 0 ? prev : []));
      setHasSearched(false);
      return;
    }

    let cancelled = false;
    setIsLoading(true);
    setHasSearched(true);

    searchTrips(trimmed)
      .then((data) => {
        if (!cancelled) setResults(data);
      })
      .catch(() => {
        if (!cancelled) setResults([]);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [debouncedTerm]);

  const isEmpty = hasSearched && !isLoading && results.length === 0;
  const hasResults = !isLoading && results.length > 0;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#000000B2] z-50"
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
              className="fixed top-4 md:right-4 bottom-4 w-85.75 md:w-197.25 bg-white shadow-xl z-50 overflow-y-auto rounded-2xl"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>{`
                                .search-sidebar-scroll::-webkit-scrollbar { display: none; }
                            `}</style>

              <div className="p-6!">
                {/* Search Input */}
                <div className="mb-6!">
                  <div className="relative">
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder={
                        lang === "ar"
                          ? "إبحث عن رحلتك المفضلة .."
                          : "Search for your trip.."
                      }
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-12! py-3.5! border border-[#D2D1D1] rounded-[50px] focus:outline-none focus:border-[#0478AF] transition-colors duration-200 text-dark placeholder:text-[#A0A0A0]"
                    />
                    {/* Search icon on the right */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                          stroke="#505050"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 22L20 20"
                          stroke="#505050"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    {/* Clear button */}
                    {searchTerm && (
                      <button
                        aria-label={
                          lang === "ar" ? "مسح البحث" : "Clear search"
                        }
                        onClick={() => setSearchTerm("")}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A0A0A0] hover:text-dark transition-colors duration-200"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 6L6 18M6 6L18 18"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>

                {/* Empty input state */}
                {searchTerm.trim() === "" && (
                  <div className="py-24!">
                    <div className="flex flex-col items-center justify-center gap-4">
                      <SearchIcon />
                      <p className="text-xl text-dark font-medium text-center">
                        {lang === "ar"
                          ? "ابدأ رحلتك الآن! ابحث عن الوجهة التي تحلم بها."
                          : "Start your journey! Search for your dream destination."}
                      </p>
                    </div>
                  </div>
                )}

                {isLoading && <SearchSpinner />}

                {isEmpty && <SearchEmptyState />}

                {hasResults && (
                  <div>
                    {/* Results header */}
                    <div className="flex items-center justify-between mb-4!">
                      <p className="text-sm font-semibold text-gray">
                        {lang === "ar"
                          ? `تم العثور على ${results.length} نتيجة`
                          : `${results.length} result${results.length !== 1 ? "s" : ""} found`}
                      </p>
                    </div>

                    {/* Result cards */}
                    <div className="flex flex-col gap-1">
                      {results.map((trip) => (
                        <motion.div
                          key={trip.id}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <SearchResultCard
                            trip={trip}
                            onClick={() => {
                              closeSearch();
                              window.location.href = `/trip-details/${trip.id}`;
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
