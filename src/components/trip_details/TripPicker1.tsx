import { useState } from "react"

const TripPicker1 = () => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null)
    const [selectedRoom, setSelectedRoom] = useState<string | null>(null)

    return (
        <div className="w-[379px] h-full py-8! px-4! bg-[#F7FAFC] rounded-[32px]">
            <h2 className="text-[#00567E] text-xl font-medium">
                مواعيد الرحلة
            </h2>
            <div className="w-full h-px border-b border-[#D2D1D1] border-dashed mt-4!"></div>

            <div className="mt-4!">
                <div
                    className={`flex items-center justify-between mb-4! p-3 rounded-lg transition-all ${selectedDate === 'date1' ? 'border-2 border-[#0478AF] bg-white' : 'border-2 border-transparent'
                        }`}
                >
                    <label htmlFor="item1" className="select-none ms-2 text-sm font-medium text-heading text-[#121212] text-lg font-medium cursor-pointer">
                        من 22 إلي 24 فبراير
                    </label>
                    <input
                        id="item1"
                        type="checkbox"
                        checked={selectedDate === 'date1'}
                        onChange={() => setSelectedDate(selectedDate === 'date1' ? null : 'date1')}
                        className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-0 cursor-pointer"
                    />
                </div>

                <div
                    className={`flex items-center justify-between mb-4! p-3 rounded-lg transition-all ${selectedDate === 'date2' ? 'border-2 border-[#0478AF] bg-white' : 'border-2 border-transparent'
                        }`}
                >
                    <label htmlFor="item2" className="select-none ms-2 text-sm font-medium text-heading text-[#121212] text-lg font-medium cursor-pointer">
                        من 24 إلي 26 فبراير
                    </label>
                    <input
                        id="item2"
                        type="checkbox"
                        checked={selectedDate === 'date2'}
                        onChange={() => setSelectedDate(selectedDate === 'date2' ? null : 'date2')}
                        className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-0 cursor-pointer"
                    />
                </div>

                <div
                    className={`flex items-center justify-between mb-4! p-3 rounded-lg transition-all ${selectedDate === 'date3' ? 'border-2 border-[#0478AF] bg-white' : 'border-2 border-transparent'
                        }`}
                >
                    <label htmlFor="item3" className="select-none ms-2 text-sm font-medium text-heading text-[#121212] text-lg font-medium cursor-pointer">
                        من 1 إلي 3 مارس
                    </label>
                    <input
                        id="item3"
                        type="checkbox"
                        checked={selectedDate === 'date3'}
                        onChange={() => setSelectedDate(selectedDate === 'date3' ? null : 'date3')}
                        className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-0 cursor-pointer"
                    />
                </div>

                <div
                    className={`flex items-center justify-between mb-4! p-3 rounded-lg transition-all ${selectedDate === 'date4' ? 'border-2 border-[#0478AF] bg-white' : 'border-2 border-transparent'
                        }`}
                >
                    <label htmlFor="item4" className="select-none ms-2 text-sm font-medium text-heading text-[#121212] text-lg font-medium cursor-pointer">
                        من 3 إلي 6 مارس
                    </label>
                    <input
                        id="item4"
                        type="checkbox"
                        checked={selectedDate === 'date4'}
                        onChange={() => setSelectedDate(selectedDate === 'date4' ? null : 'date4')}
                        className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-0 cursor-pointer"
                    />
                </div>
            </div>

            <div className="w-full h-px border-b border-[#D2D1D1] border-dashed my-6!"></div>

            <div>
                <h2 className="text-[#00567E] text-xl font-medium">
                    أسعار الرحلة <span className="text-[#505050] text-sm">"السعر للفرد الواحد"</span>
                </h2>

                <div className="mt-4!">
                    <div
                        className={`flex items-center justify-between mb-4! p-3 rounded-lg transition-all ${selectedRoom === 'room1' ? 'border-2 border-[#0478AF] bg-white' : 'border-2 border-transparent'
                            }`}
                    >
                        <label htmlFor="room1" className="select-none ms-2 text-sm font-medium text-heading text-[#121212] text-lg font-medium cursor-pointer">
                            غرفة رباعية
                            <p className="text-[#00567E] text-base font-medium mt-3!">3,150 د.إ</p>
                        </label>
                        <input
                            id="room1"
                            type="checkbox"
                            checked={selectedRoom === 'room1'}
                            onChange={() => setSelectedRoom(selectedRoom === 'room1' ? null : 'room1')}
                            className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-0 cursor-pointer"
                        />
                    </div>

                    <div
                        className={`flex items-center justify-between mb-4! p-3 rounded-lg transition-all ${selectedRoom === 'room2' ? 'border-2 border-[#0478AF] bg-white' : 'border-2 border-transparent'
                            }`}
                    >
                        <label htmlFor="room2" className="select-none ms-2 text-sm font-medium text-heading text-[#121212] text-lg font-medium cursor-pointer">
                            غرفة ثلاثية
                            <p className="text-[#00567E] text-base font-medium mt-3!">3,250 د.إ</p>
                        </label>
                        <input
                            id="room2"
                            type="checkbox"
                            checked={selectedRoom === 'room2'}
                            onChange={() => setSelectedRoom(selectedRoom === 'room2' ? null : 'room2')}
                            className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-0 cursor-pointer"
                        />
                    </div>

                    <div
                        className={`flex items-center justify-between mb-4! p-3 rounded-lg transition-all ${selectedRoom === 'room3' ? 'border-2 border-[#0478AF] bg-white' : 'border-2 border-transparent'
                            }`}
                    >
                        <label htmlFor="room3" className="select-none ms-2 text-sm font-medium text-heading text-[#121212] text-lg font-medium cursor-pointer">
                            غرفة ثنائية
                            <p className="text-[#00567E] text-base font-medium mt-3!">3,350 د.إ</p>
                        </label>
                        <input
                            id="room3"
                            type="checkbox"
                            checked={selectedRoom === 'room3'}
                            onChange={() => setSelectedRoom(selectedRoom === 'room3' ? null : 'room3')}
                            className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-0 cursor-pointer"
                        />
                    </div>

                    <div
                        className={`flex items-center justify-between mb-4! p-3 rounded-lg transition-all ${selectedRoom === 'room4' ? 'border-2 border-[#0478AF] bg-white' : 'border-2 border-transparent'
                            }`}
                    >
                        <label htmlFor="room4" className="select-none ms-2 text-sm font-medium text-heading text-[#121212] text-lg font-medium cursor-pointer">
                            غرفة فردية
                            <p className="text-[#00567E] text-base font-medium mt-3!">4,150 د.إ</p>
                        </label>
                        <input
                            id="room4"
                            type="checkbox"
                            checked={selectedRoom === 'room4'}
                            onChange={() => setSelectedRoom(selectedRoom === 'room4' ? null : 'room4')}
                            className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-0 cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            <button className="w-full h-14 bg-[#0478AF] rounded-[50px] mt-8! text-[#FEFEFE] text-lg font-semibold">
                احجز الآن
            </button>
        </div>
    )
}

export default TripPicker1
