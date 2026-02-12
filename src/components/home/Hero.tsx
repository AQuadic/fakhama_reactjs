const Hero = () => {
    return (
        <section className="relative container flex flex-wrap items-center gap-8 md:!py-12 py-8">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20 -z-10"
                style={{ backgroundImage: "url('/images/world.png')" }}
            ></div>

            <div className="flex-1">
                <h2 className="text-[#121212] md:text-[48px] text-2xl font-semibold leading-[150%]">
                    <span className="text-[#00567E]">نرتّب رحلتك </span>
                    من البداية للنهاية ، <br />
                    <span className="text-[#00567E]">بكل ثقة.</span>
                </h2>

                <p className="text-[#505050] md:text-xl text-sm font-medium mt-6">
                    من اختيار الوجهة المناسبة وحتى العودة بسلام، نهتم بكل تفاصيل رحلتك  <br />خطوة بخطوة، بدايةً من التخطيط وحجز الطيران والفنادق، مرورًا بتنظيم البرامج <br />السياحية والرحلات، وصولًا إلى الدعم المستمر قبل وأثناء السفر. 
                </p>

                <button className="md:w-[306px] w-full md:h-14 h-12 bg-[#0478AF] rounded-[50px] !mt-6 text-[#FEFEFE] text-lg font-semibold">
                    احجز الآن
                </button>
            </div>

            <div className="flex md:gap-8 gap-4">
                <img
                    src="/images/hero1.jpg"
                    className="md:w-[276px] w-[163px] md:h-[633px] h-[374px] rounded-[50px]"
                />
                <div className="flex flex-col md:gap-8 gap-4">
                    <img
                        src="/images/hero2.jpg"
                        className="md:w-[276px] w-[163px] md:h-[284px] h-[168px] rounded-[50px]"
                    />
                    <img
                        src="/images/hero3.jpg"
                        className="md:w-[276px] w-[163px] md:h-[284px] h-[168px] rounded-[50px]"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
