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
import { useTranslation } from "react-i18next"

const TripDetailsHeader = () => {
    const { t } = useTranslation()

    return (
        <section className="container md:py-8!">
            <div className="md:block hidden">
                <Breadcrumbs />
            </div>

            {/* Mobile Header */}
            <div className="md:hidden flex items-center gap-[85px]">
                <BackArrow />
                <p className="text-[#121212] text-xl font-medium">
                    {t("tripDetails.mobileTitle")}
                </p>
            </div>

            <div className="md:mt-12! mt-6! flex flex-wrap justify-between gap-4">
                <div>
                    <img
                        src="/images/makka2.jpg"
                        className="md:w-[789px] md:h-[427px] rounded-[32px]"
                        alt="trip"
                    />

                    {/* Trip Title */}
                    <h2 className="text-[#121212] md:text-[40px] text-base font-semibold mt-8!">
                        {t("tripDetails.title")}
                    </h2>

                    {/* Hotel */}
                    <div className="flex items-center gap-2 bg-[#F7FAFC] px-3! py-2! rounded-[32px] w-fit mt-3">
                        <Location />
                        <p className="text-[#00567E] md:text-xl text-xs font-medium">
                            {t("tripDetails.hotel")}
                        </p>
                    </div>

                    {/* About Section */}
                    <div className="flex items-center gap-3 md:mt-8! mt-5!">
                        <AboutTrip />
                        <h3 className="text-[#121212] md:text-[32px] text-lg font-semibold">
                            {t("tripDetails.aboutTitle")}
                        </h3>
                    </div>

                    <p className="text-[#505050] md:text-xl text-xs font-medium leading-[150%] mt-4 md:w-[730px]">
                        {t("tripDetails.aboutDescription")}
                    </p>

                    {/* Duration Section */}
                    <div className="flex items-center gap-3 md:mt-8! mt-5!">
                        <Calender />
                        <h3 className="text-[#121212] md:text-[32px] text-lg font-semibold">
                            {t("tripDetails.durationTitle")}
                        </h3>
                    </div>

                    <p className="text-[#505050] md:text-2xl text-sm font-semibold md:mt-6! mt-3!">
                        {t("tripDetails.duration")}
                    </p>

                    {/* Features Section */}
                    <div className="flex items-center gap-3 md:mt-8! mt-5!">
                        <EmptyStar />
                        <h3 className="text-[#121212] md:text-[32px] text-lg font-semibold">
                            {t("tripDetails.featuresTitle")}
                        </h3>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4">
                        <div className="md:py-3! py-2.5 px-2! bg-[#F7FAFC] rounded-[20px] flex items-center gap-1 mt-3!">
                            <Flights />
                            <p className="text-[#121212] md:text-base text-xs font-medium">
                                {t("tripDetails.features.flight")}
                            </p>
                        </div>

                        <div className="md:py-3! py-2.5 px-2! bg-[#F7FAFC] rounded-[20px] flex items-center gap-1">
                            <Meal />
                            <p className="text-[#121212] md:text-base text-xs font-medium">
                                {t("tripDetails.features.meal")}
                            </p>
                        </div>

                        <div className="md:py-3! py-2.5 px-2! bg-[#F7FAFC] rounded-[20px] flex items-center gap-1">
                            <Star />
                            <p className="text-[#121212] md:text-base text-xs font-medium">
                                {t("tripDetails.features.hotel")}
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
