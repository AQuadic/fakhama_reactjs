import { useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { Trip } from "../../lib/api/trips";
import { useTripSelection } from "../../lib/useTripSelection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Price from "../icons/Price";

interface TripPickerProps {
  trip: Trip;
}

const TripPicker = ({ trip }: TripPickerProps) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "ar" | "en";

  const {
    selectedAirportId,
    selectedFlightScheduleId,
    selectedPriceId,
    selectedHotel,
    selectedAirline,
    selectedAirportName,
    setSelectedAirport,
    setSelectedFlightSchedule,
    setSelectedPrice,
    setSelectedHotel,
    setSelectedAirline,
    setSelectedAirportName,
  } = useTripSelection();

  // Extract unique airports from prices
  const uniqueAirports = useMemo(() => {
    const airportMap = new Map<number, { id: number; name: string }>();
    trip.prices.forEach((p) => {
      if (p.airport && !airportMap.has(p.airport.id)) {
        airportMap.set(p.airport.id, {
          id: p.airport.id,
          name: p.airport.name?.[lang] || p.airport.name?.en || "",
        });
      }
    });
    return Array.from(airportMap.values());
  }, [trip.prices, lang]);

  // Auto-select first airport if none selected
  useEffect(() => {
    if (selectedAirportId === null && uniqueAirports.length > 0) {
      setSelectedAirport(uniqueAirports[0].id);
    }
  }, [uniqueAirports, selectedAirportId, setSelectedAirport]);

  // Filter flight schedules and prices for selected airport
  const filteredSchedules = useMemo(
    () =>
      trip.flight_schedules.filter(
        (fs) => fs.airport_id === selectedAirportId && fs.is_active,
      ),
    [trip.flight_schedules, selectedAirportId],
  );

  const filteredPrices = useMemo(
    () =>
      trip.prices.filter(
        (p) => p.airport_id === selectedAirportId && p.is_active,
      ),
    [trip.prices, selectedAirportId],
  );

  // Min price for the banner
  const minPrice = useMemo(() => {
    if (trip.prices.length === 0) return null;
    return trip.prices.reduce((min, p) => {
      const val = parseFloat(p.price);
      return val < min ? val : min;
    }, parseFloat(trip.prices[0].price));
  }, [trip.prices]);

  const hasHotels = trip.hotels && trip.hotels.length > 0;
  const hasAirlines = trip.airlines && trip.airlines.length > 0;
  const hasAirports = trip.airports && trip.airports.length > 0;
  const hasAirportTabs = uniqueAirports.length > 0;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(lang === "ar" ? "ar-EG" : "en-US", {
      day: "numeric",
      month: "short",
    });
  };

  const handleBookNow = () => {
    if (!trip.agent_phone_e164) return;

    const tripName = trip.name?.[lang] || trip.name?.en || "";
    const schedule = trip.flight_schedules.find(
      (fs) => fs.id === selectedFlightScheduleId,
    );
    const price = trip.prices.find((p) => p.id === selectedPriceId);

    const lines: string[] = [`${t("tripPicker.whatsappMessage")} ${tripName}`];
    if (selectedHotel)
      lines.push(`🏨 ${t("tripDetails.hotelsLabel")}: ${selectedHotel}`);
    if (selectedAirline)
      lines.push(`✈️ ${t("tripDetails.airlinesLabel")}: ${selectedAirline}`);
    if (selectedAirportName)
      lines.push(
        `🛫 ${t("tripDetails.airportsLabel")}: ${selectedAirportName}`,
      );
    if (schedule)
      lines.push(
        `📅 ${t("tripPicker.flightSchedules")}: ${formatDate(schedule.from_date)} - ${formatDate(schedule.to_date)}`,
      );
    if (price)
      lines.push(
        `💰 ${t("tripPicker.pricesTitle")}: ${price.name?.[lang] || price.name?.en} - ${parseFloat(price.price).toLocaleString()} ${t("tripPicker.currency")}`,
      );

    const message = encodeURIComponent(lines.join("\n"));
    window.open(
      `https://wa.me/${trip.agent_phone_e164.replace("+", "")}?text=${message}`,
      "_blank",
    );
  };

  return (
    <div
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="w-full md:w-[379px] h-auto py-8! px-4! bg-[#F7FAFC] rounded-[32px]"
    >
      {/* Price Banner */}
      {minPrice !== null && (
        <div className="p-3! bg-[#DBEEF7] border border-[#0478AF] rounded-[8px] mb-6! flex items-center gap-2">
          <Price />
          <p className="text-dark text-lg font-medium">
            {t("tripPicker.priceStartsFrom")}{" "}
            <span className="text-[#00567E] text-xl font-semibold">
              {minPrice.toLocaleString()} {t("tripPicker.currency")}
            </span>{" "}
            {t("tripPicker.perPerson")}
          </p>
        </div>
      )}

      {/* Hotels */}
      {hasHotels && (
        <>
          <h2 className="text-[#00567E] text-xl font-medium mb-3! text-start">
            {t("tripDetails.hotelsLabel")}
          </h2>
          <div className="flex flex-wrap gap-2 mb-6! justify-start">
            {trip.hotels.map((hotel, i) => (
              <button
                key={i}
                onClick={() => setSelectedHotel(hotel)}
                className={`py-2! px-4! rounded-[20px] text-sm font-medium border transition-all cursor-pointer ${
                  selectedHotel === hotel
                    ? "bg-[#0478AF] text-white border-[#0478AF]"
                    : "bg-white text-dark border-[#D2D1D1] hover:border-[#0478AF]"
                }`}
              >
                {hotel}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Airlines */}
      {hasAirlines && (
        <>
          <h2 className="text-[#00567E] text-xl font-medium mb-3! text-start">
            {t("tripDetails.airlinesLabel")}
          </h2>
          <div className="flex flex-wrap gap-2 mb-6! justify-start">
            {trip.airlines.map((airline, i) => (
              <button
                key={i}
                onClick={() => setSelectedAirline(airline)}
                className={`py-2! px-4! rounded-[20px] text-sm font-medium border transition-all cursor-pointer ${
                  selectedAirline === airline
                    ? "bg-[#0478AF] text-white border-[#0478AF]"
                    : "bg-white text-dark border-[#D2D1D1] hover:border-[#0478AF]"
                }`}
              >
                {airline}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Airports (trip.airports string list) */}
      {hasAirports && (
        <>
          <h2 className="text-[#00567E] text-xl font-medium mb-3! text-start">
            {t("tripDetails.airportsLabel")}
          </h2>
          <div className="flex flex-wrap gap-2 mb-6! justify-start">
            {trip.airports.map((airport, i) => (
              <button
                key={i}
                onClick={() => setSelectedAirportName(airport)}
                className={`py-2! px-4! rounded-[20px] text-sm font-medium border transition-all cursor-pointer ${
                  selectedAirportName === airport
                    ? "bg-[#0478AF] text-white border-[#0478AF]"
                    : "bg-white text-dark border-[#D2D1D1] hover:border-[#0478AF]"
                }`}
              >
                {airport}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Divider before flight tabs */}
      {(hasHotels || hasAirlines || hasAirports) && hasAirportTabs && (
        <div className="w-full h-px border-b border-[#D2D1D1] border-dashed mb-6!" />
      )}

      {/* Airport Tabs (from prices) */}
      {hasAirportTabs ? (
        <Tabs
          value={selectedAirportId?.toString() || ""}
          onValueChange={(val) => setSelectedAirport(Number(val))}
        >
          {uniqueAirports.length > 1 && (
            <TabsList className="w-full flex">
              {uniqueAirports.map((airport) => (
                <TabsTrigger
                  key={airport.id}
                  value={airport.id.toString()}
                  className="flex-1 h-10! bg-[#EEEEEE] data-[state=active]:bg-[#0478AF] data-[state=active]:text-white"
                >
                  {airport.name}
                </TabsTrigger>
              ))}
            </TabsList>
          )}

          {uniqueAirports.map((airport) => (
            <TabsContent
              key={airport.id}
              value={airport.id.toString()}
              className="mt-6!"
            >
              {/* Flight Schedules */}
              {filteredSchedules.length > 0 && (
                <>
                  <h2 className="text-[#00567E] text-xl font-medium text-start rtl:text-right">
                    {t("tripPicker.flightSchedules")}
                  </h2>
                  <div className="w-full h-px border-b border-[#D2D1D1] border-dashed mt-4!" />

                  <div className="mt-4!">
                    {filteredSchedules.map((schedule) => (
                      <div
                        key={schedule.id}
                        className={`flex rtl:flex-row-reverse w-full  rtl:text-right items-center justify-between mb-4! p-3! rounded-lg transition-all cursor-pointer ${
                          selectedFlightScheduleId === schedule.id
                            ? "border-2 border-[#0478AF] bg-white"
                            : "border-2 border-transparent"
                        }`}
                        onClick={() => setSelectedFlightSchedule(schedule.id)}
                      >
                        <label className="select-none mx-2! text-lg font-medium text-dark cursor-pointer flex-1 text-start rtl:text-end">
                          <span>
                            {formatDate(schedule.from_date)} -{" "}
                            {formatDate(schedule.to_date)}
                          </span>
                          {schedule.remaining_seats > 0 && (
                            <p className="text-gray text-sm mt-1">
                              {schedule.remaining_seats}{" "}
                              {t("tripPicker.seatsRemaining")}
                            </p>
                          )}
                        </label>
                        <input
                          type="checkbox"
                          aria-label={`${formatDate(schedule.from_date)} - ${formatDate(schedule.to_date)}`}
                          checked={selectedFlightScheduleId === schedule.id}
                          onChange={() =>
                            setSelectedFlightSchedule(schedule.id)
                          }
                          className="w-4 h-4 border rounded-xs focus:ring-0 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Prices */}
              {filteredPrices.length > 0 && (
                <>
                  <div className="w-full h-px border-b border-[#D2D1D1] border-dashed my-6!" />

                  <h2 className="text-[#00567E] text-xl font-medium rtl:text-right">
                    {t("tripPicker.pricesTitle")}{" "}
                    <span className="text-gray text-sm">
                      ({t("tripPicker.priceNote")})
                    </span>
                  </h2>

                  <div className="mt-4!">
                    {filteredPrices.map((price) => (
                      <div
                        key={price.id}
                        className={`flex rtl:flex-row-reverse items-center justify-between mb-4! p-3! rounded-lg transition-all cursor-pointer ${
                          selectedPriceId === price.id
                            ? "border-2 border-[#0478AF] bg-white"
                            : "border-2 border-transparent"
                        }`}
                        onClick={() => setSelectedPrice(price.id)}
                      >
                        <label className="select-none ms-2! text-lg font-medium text-dark cursor-pointer flex-1 rtl:text-right">
                          {price.name?.[lang] || price.name?.en || ""}
                          <p className="text-[#00567E] text-base font-medium mt-3!">
                            {parseFloat(price.price).toLocaleString()}{" "}
                            {t("tripPicker.currency")}
                          </p>
                        </label>
                        <input
                          type="checkbox"
                          aria-label={
                            price.name?.[lang] || price.name?.en || ""
                          }
                          checked={selectedPriceId === price.id}
                          onChange={() => setSelectedPrice(price.id)}
                          className="w-4 h-4 border rounded-xs focus:ring-0 cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </TabsContent>
          ))}
        </Tabs>
      ) : (
        !hasHotels &&
        !hasAirlines &&
        !hasAirports && (
          <p className="text-gray text-center py-4">
            {t("tripPicker.noAirports")}
          </p>
        )
      )}

      {/* Book Now Button */}
      <button
        onClick={handleBookNow}
        className="w-full h-14 bg-[#0478AF] rounded-[50px] mt-8! text-[#FEFEFE] text-lg font-semibold hover:bg-[#0590D0] transition-colors cursor-pointer"
      >
        {t("tripPicker.bookNow")}
      </button>
    </div>
  );
};

export default TripPicker;
