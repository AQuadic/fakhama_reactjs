import { useState } from "react"
import { useTranslation } from "react-i18next"

const TripPicker1 = () => {
    const { t } = useTranslation()

    const [selectedDate, setSelectedDate] = useState<string | null>(null)
    const [selectedRoom, setSelectedRoom] = useState<string | null>(null)

    return (
        <div className="w-[379px] h-auto py-8! px-4! bg-[#F7FAFC] rounded-[32px]">
            <h2 className="text-[#00567E] text-xl font-medium">
                {t("tripPicker.datesTitle")}
            </h2>

            <div className="w-full h-px border-b border-[#D2D1D1] border-dashed mt-4!"></div>

            <div className="mt-4!">

                {["date1", "date2", "date3", "date4"].map((dateKey) => (
                    <div
                        key={dateKey}
                        className={`flex items-center justify-between mb-4! p-3! rounded-lg transition-all ${selectedDate === dateKey
                            ? "border-2 border-[#0478AF] bg-white"
                            : "border-2 border-transparent"
                            }`}
                    >
                        <label
                            htmlFor={dateKey}
                            className="select-none ms-2! text-lg font-medium text-[#121212] cursor-pointer"
                        >
                            {t(`tripPicker.dates.${dateKey}`)}
                        </label>

                        <input
                            id={dateKey}
                            type="checkbox"
                            checked={selectedDate === dateKey}
                            onChange={() =>
                                setSelectedDate(selectedDate === dateKey ? null : dateKey)
                            }
                            className="w-4 h-4 border rounded-xs focus:ring-0 cursor-pointer"
                        />
                    </div>
                ))}

            </div>

            <div className="w-full h-px border-b border-[#D2D1D1] border-dashed my-6!"></div>

            <div>
                <h2 className="text-[#00567E] text-xl font-medium">
                    {t("tripPicker.pricesTitle")}{" "}
                    <span className="text-[#505050] text-sm">
                        ({t("tripPicker.priceNote")})
                    </span>
                </h2>

                <div className="mt-4!">

                    {[
                        { key: "room1", price: "3,150 د.إ" },
                        { key: "room2", price: "3,250 د.إ" },
                        { key: "room3", price: "3,350 د.إ" },
                        { key: "room4", price: "4,150 د.إ" },
                    ].map((room) => (
                        <div
                            key={room.key}
                            className={`flex items-center justify-between mb-4! p-3! rounded-lg transition-all ${selectedRoom === room.key
                                ? "border-2 border-[#0478AF] bg-white"
                                : "border-2 border-transparent"
                                }`}
                        >
                            <label
                                htmlFor={room.key}
                                className="select-none ms-2! text-lg font-medium text-[#121212] cursor-pointer"
                            >
                                {t(`tripPicker.rooms.${room.key}`)}
                                <p className="text-[#00567E] text-base font-medium mt-3!">
                                    {room.price}
                                </p>
                            </label>

                            <input
                                id={room.key}
                                type="checkbox"
                                checked={selectedRoom === room.key}
                                onChange={() =>
                                    setSelectedRoom(
                                        selectedRoom === room.key ? null : room.key
                                    )
                                }
                                className="w-4 h-4 border rounded-xs focus:ring-0 cursor-pointer"
                            />
                        </div>
                    ))}

                </div>
            </div>

            <button className="w-full h-14 bg-[#0478AF] rounded-[50px] mt-8! text-[#FEFEFE] text-lg font-semibold">
                {t("tripPicker.bookNow")}
            </button>
        </div>
    )
}

export default TripPicker1
