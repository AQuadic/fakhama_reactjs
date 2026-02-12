import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        id="hero"
      >
        <Hero />
      </section>

      {/* Why Us Section */}
      <section
        id="why-us"
        className="min-h-[40vh] flex items-center justify-center bg-white"
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-[#00567E] text-center">
            لماذا نحن
          </h2>
        </div>
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
      <section
        id="testimonials"
        className="min-h-[40vh] flex items-center justify-center"
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-[#00567E] text-center">
            أراء العملاء
          </h2>
        </div>
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
