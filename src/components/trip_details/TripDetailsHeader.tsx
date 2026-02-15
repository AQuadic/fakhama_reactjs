import AboutTrip from "../icons/AboutTrip"
import Calender from "../icons/Calender"
import EmptyStar from "../icons/EmptyStar"
import Flights from "../icons/Flights"
import Location from "../icons/Location"
import Meal from "../icons/Meal"
import Star from "../icons/Star"
import Breadcrumbs from "./Breadcrumbs"
import TripPicker from "./TripPicker"

const TripDetailsHeader = () => {
    return (
        <section className="container py-8!">
            <Breadcrumbs />

            <div className="mt-12! flex flex-wrap justify-between gap-4">
                <div>
                    <img
                        src="/images/makka2.jpg"
                        className="md:w-[789px] md:h-[427px] rounded-[32px]"
                        alt=""
                    />
                    <h2 className="text-[#121212] text-[40px] font-semibold mt-8!">
                        عمرة رمضان-مكة المكرمة
                    </h2>

                    <div className="flex items-center gap-2 bg-[#F7FAFC] px-3 py-2 rounded-[32px] w-fit">
                        <Location />
                        <p className="text-[#00567E] text-xl font-medium">
                            فندق العنوان جبل عمر
                        </p>
                    </div>

                    <div className="flex items-center gap-3 mt-8!">
                        <AboutTrip />
                        <h3 className="text-[#121212] text-[32px] font-semibold">
                            عن الرحلة
                        </h3>
                    </div>

                    <p className="text-[#505050] text-xl font-medium mt-4 md:w-[730px]">
                        استمتع برحلة عمرة مميزة خلال شهر رمضان المبارك إلى مكة المكرمة، في أجواء إيمانية روحانية لا تُنسى. نمنحك فرصة أداء مناسك العمرة بكل راحة وطمأنينة، مع تنظيم متكامل يراعي أدق التفاصيل لتتفرغ للعبادة والاستمتاع بنفحات الشهر الفضيل بجوار بيت الله الحرام.
                    </p>

                    <div className="flex items-center gap-3 mt-8!">
                        <Calender />
                        <h3 className="text-[#121212] text-[32px] font-semibold">
                            مدة الرحلة
                        </h3>
                    </div>

                    <p className="text-[#505050] text-2xl font-semibold">
                        3 أيام
                    </p>

                    <div className="flex items-center gap-3 mt-8!">
                        <EmptyStar />
                        <h3 className="text-[#121212] text-[32px] font-semibold">
                            مميزات الرحلة
                        </h3>
                    </div>

                    <div className="mt-6 flex gap-4">
                        <div className="py-3! px-2! bg-[#F7FAFC] rounded-[20px] flex items-center gap-1">
                            <Flights />
                            <p className="text-[#121212] text-base font-medium">
                                طيران دولي
                            </p>
                        </div>

                        <div className="py-3! px-2! bg-[#F7FAFC] rounded-[20px] flex items-center gap-1">
                            <Meal />
                            <p className="text-[#121212] text-base font-medium">
                                وجبة افطار و سحور
                            </p>
                        </div>
                        <div className="py-3! px-2! bg-[#F7FAFC] rounded-[20px] flex items-center gap-1">
                            <Star />
                            <p className="text-[#121212] text-base font-medium">
                                فندق فاخر
                            </p>
                        </div>
                    </div>
                </div>
                <TripPicker />
            </div>
        </section>
    )
}

export default TripDetailsHeader