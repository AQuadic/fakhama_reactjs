import AboutTrip from "../icons/AboutTrip"
import BackArrow from "../icons/BackArrow"
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
        <section className="container md:py-8!">
            <div className="md:block hidden">
                <Breadcrumbs />
            </div>

            <div className="md:hidden flex items-center gap-[85px]">
                <BackArrow />
                <p className="text-[#121212] text-xl font-medium">
                    تفاصيل الرحلة
                </p>
            </div>

            <div className="md:mt-12! mt-6! flex flex-wrap justify-between gap-4">
                <div>
                    <img
                        src="/images/makka2.jpg"
                        className="md:w-[789px] md:h-[427px] rounded-[32px]"
                        alt=""
                    />
                    <h2 className="text-[#121212] md:text-[40px] text-base font-semibold mt-8!">
                        عمرة رمضان-مكة المكرمة
                    </h2>

                    <div className="flex items-center gap-2 bg-[#F7FAFC] px-3! py-2! rounded-[32px] w-fit mt-3">
                        <Location />
                        <p className="text-[#00567E] md:text-xl text-xs font-medium">
                            فندق العنوان جبل عمر
                        </p>
                    </div>

                    <div className="flex items-center gap-3 md:mt-8! mt-5!">
                        <AboutTrip />
                        <h3 className="text-[#121212] md:text-[32px] text-lg font-semibold">
                            عن الرحلة
                        </h3>
                    </div>

                    <p className="text-[#505050] md:text-xl text-xs font-medium leading-[150%] mt-4 md:w-[730px]">
                        استمتع برحلة عمرة مميزة خلال شهر رمضان المبارك إلى مكة المكرمة، في أجواء إيمانية روحانية لا تُنسى. نمنحك فرصة أداء مناسك العمرة بكل راحة وطمأنينة، مع تنظيم متكامل يراعي أدق التفاصيل لتتفرغ للعبادة والاستمتاع بنفحات الشهر الفضيل بجوار بيت الله الحرام.
                    </p>

                    <div className="flex items-center gap-3 md:mt-8! mt-5!">
                        <Calender />
                        <h3 className="text-[#121212] md:text-[32px] text-lg font-semibold">
                            مدة الرحلة
                        </h3>
                    </div>

                    <p className="text-[#505050] md:text-2xl text-sm font-semibold md:mt-6! mt-3!">
                        3 أيام
                    </p>

                    <div className="flex items-center gap-3 md:mt-8! mt-5!">
                        <EmptyStar />
                        <h3 className="text-[#121212] md:text-[32px] text-lg font-semibold">
                            مميزات الرحلة
                        </h3>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <div className="md:py-3! py-2.5 px-2! bg-[#F7FAFC] rounded-[20px] flex items-center gap-1 mt-3!">
                            <Flights />
                            <p className="text-[#121212] md:text-base text-xs font-medium">
                                طيران دولي
                            </p>
                        </div>

                        <div className="md:py-3! py-2.5 px-2! bg-[#F7FAFC] rounded-[20px] flex items-center gap-1">
                            <Meal />
                            <p className="text-[#121212] md:text-base text-xs font-medium">
                                وجبة افطار و سحور
                            </p>
                        </div>
                        <div className="md:py-3! py-2.5 px-2! bg-[#F7FAFC] rounded-[20px] flex items-center gap-1">
                            <Star />
                            <p className="text-[#121212] md:text-base text-xs font-medium">
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