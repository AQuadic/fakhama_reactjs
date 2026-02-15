import { useState } from "react"
import Price from "../icons/Price"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

const TripPicker2 = () => {
    const [selectedDate, setSelectedDate] = useState<string | null>(null)

    return (
        <div className="w-[379px] h-full py-8! px-4! bg-[#F7FAFC] rounded-[32px]">

            <div className="p-3 bg-[#DBEEF7] border border-[#0478AF] rounded-[8px] mb-8 flex items-center gap-2">
                <Price />
                <p className="text-[#121212] text-lg font-medium">
                    السعر يبدأ من <span className="text-[#00567E] text-xl">4,500 د.إ</span> للفرد الواحد
                </p>
            </div>

            <Tabs defaultValue="airport1">
                <TabsList>
                    <TabsTrigger value="airport1" className="w-[174px] h-10! bg-[#EEEEEE] data-[state=active]:bg-[#0478AF] data-[state=active]:text-white">
                        مطار الشارقة
                    </TabsTrigger>
                    <TabsTrigger value="airport2" className="w-[174px] h-10! bg-[#EEEEEE] data-[state=active]:bg-[#0478AF] data-[state=active]:text-white">
                        مطار ابو ظبي
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="airport1" className="mt-6">
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

                    <button className="w-full h-14 bg-[#0478AF] rounded-[50px] mt-8! text-[#FEFEFE] text-lg font-semibold">
                        احجز الآن
                    </button>
                </TabsContent>
                <TabsContent value="airport2">
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

                    <button className="w-full h-14 bg-[#0478AF] rounded-[50px] mt-8! text-[#FEFEFE] text-lg font-semibold">
                        احجز الآن
                    </button>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default TripPicker2
