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
        className="min-h-[40vh] flex items-center justify-center"
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-[#00567E] text-center">
            الوجهات
          </h2>
        </div>
      </section>

      {/* Programs Section */}
      <section
        id="programs"
        className="min-h-[40vh] flex items-center justify-center bg-white"
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-[#00567E] text-center">
            البرامج السياحية
          </h2>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 lg:py-24">
        <Testimonials />
      </section>

      {/* How to Book Section */}
      <section
        id="how-to-book"
        className="min-h-[40vh] flex items-center justify-center bg-white"
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-[#00567E] text-center">
            كيفية الحجز
          </h2>
        </div>
      </section>
    </div>
  );
}
