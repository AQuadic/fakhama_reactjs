import Booking from "../components/home/Booking";
import Destinations from "../components/home/Destinations";
import Hero from "../components/home/Hero";
import Testimonials from "../components/home/Testimonials";
import WhyUs from "../components/home/WhyUs";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Why Us Section */}
      <section
        id="why-us"
      >
        <WhyUs />
      </section>

      {/* Destinations Section */}
      <section
        id="destinations"
      >
        <Destinations />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 lg:py-24">
        <Testimonials />
      </section>

      {/* How to Book Section */}
      <section
        id="how-to-book"
      >
        <Booking />
      </section>
    </div>
  );
}
