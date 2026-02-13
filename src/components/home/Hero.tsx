import { motion } from "framer-motion";

const Hero = () => {
    // Variants for animation
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
                duration: 0.6
            }
        },
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="relative container flex flex-wrap items-center gap-8 md:!py-12 py-8">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20 -z-10"
                style={{ backgroundImage: "url('/images/world.png')" }}
            ></div>

            {/* Left content */}
            <motion.div
                className="flex-1"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h2
                    className="text-[#121212] md:text-[48px] text-2xl font-semibold leading-[150%]"
                    variants={fadeInUp}
                >
                    <span className="text-[#00567E]">نرتّب رحلتك </span>
                    من البداية للنهاية ، <br />
                    <span className="text-[#00567E]">بكل ثقة.</span>
                </motion.h2>

                <motion.p
                    className="text-[#505050] md:text-xl text-sm font-medium mt-6"
                    variants={fadeInUp}
                >
                    من اختيار الوجهة المناسبة وحتى العودة بسلام، نهتم بكل تفاصيل رحلتك  <br />خطوة بخطوة، بدايةً من التخطيط وحجز الطيران والفنادق، مرورًا بتنظيم البرامج <br />السياحية والرحلات، وصولًا إلى الدعم المستمر قبل وأثناء السفر.
                </motion.p>

                <motion.button
                    className="md:w-[306px] w-full md:h-14 h-12 bg-[#0478AF] rounded-[50px] !mt-6 text-[#FEFEFE] text-lg font-semibold"
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    احجز الآن
                </motion.button>

                <motion.div
                    className="md:block hidden absolute right-76 top-[480px]"
                    variants={fadeInUp}
                >
                    <img src="/images/arrow.svg" alt="arrow" />
                </motion.div>
            </motion.div>

            {/* Right images */}
            <motion.div
                className="flex md:gap-8 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.img
                    src="/images/hero1.jpg"
                    className="md:w-[276px] w-[163px] md:h-[633px] h-[374px] rounded-[50px]"
                    variants={fadeInUp}
                />
                <div className="flex flex-col md:gap-8 gap-4">
                    <motion.img
                        src="/images/hero2.jpg"
                        className="md:w-[276px] w-[163px] md:h-[284px] h-[168px] rounded-[50px]"
                        variants={fadeInUp}
                    />
                    <motion.img
                        src="/images/hero3.jpg"
                        className="md:w-[276px] w-[163px] md:h-[284px] h-[168px] rounded-[50px]"
                        variants={fadeInUp}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
