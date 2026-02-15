import Booking from "../components/home/Booking"
import Testimonials from "../components/home/Testimonials"
import TripDetailsHeader from "../components/trip_details/TripDetailsHeader"

const Tripdetails = () => {
    return (
        <div>
            <TripDetailsHeader />
            <Testimonials />
            <Booking />
        </div>
    )
}

export default Tripdetails
