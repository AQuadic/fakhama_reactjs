import { motion } from "framer-motion";

const WhyUs = () => {
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="container flex flex-wrap items-center justify-between gap-6 md:!py-17 py-8">
            <motion.div
                className="flex-1"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.h2 className="text-[#505050] md:text-lg text-[10px] font-medium" variants={fadeInUp}>
                    لماذا نحن؟
                </motion.h2>

                <motion.h2 className="md:w-[500px] text-[#121212] md:text-[40px] text-lg font-semibold leading-[150%]" variants={fadeInUp}>
                    <span className="text-[#00567E]">شريكك الموثوق</span> لرحلات سياحية سلسة ومميزة !
                </motion.h2>

                <motion.p className="md:w-[500px] text-[#505050] md:text-xl text-xs font-medium leading-[150%] !mt-4" variants={fadeInUp}>
                    نتميز بخبرة طويلة في تنظيم الرحلات داخل وخارج البلاد، مع برامج متنوعة وأسعار تنافسية وخدمة عملاء 24/7. نهتم بكل تفاصيل رحلتك، من التخطيط وحجز الطيران والفنادق إلى تنظيم الأنشطة والرحلات، لنضمن لك تجربة سفر سلسة وممتعة.
                </motion.p>

                <motion.div className="flex md:gap-8 gap-[65px] !mt-10" variants={fadeInUp}>
                    {[
                        { value: "+5000", label: "عميل راضٍ" },
                        { value: "+40", label: "وجهة مختلفة" },
                        { value: "+900", label: "رحلة مميزة" },
                    ].map((item, idx) => (
                        <motion.div key={idx} className="flex flex-col" variants={fadeInUp}>
                            <p className="text-[#00567E] md:text-[48px] text-xl font-semibold leading-[150%]">{item.value}</p>
                            <p className="text-[#505050] md:text-[32px] text-base font-medium">{item.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                className="relative flex-1"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.img src="/images/why_us.png" alt="why us" className="w-full" variants={slideInRight} />

                <motion.div className="md:w-[206px] w-[123px] md:h-[94px] h-[50px] border border-[#A8DAF1] rounded-[20px] absolute top-10 md:left-96 bg-[#FEFEFE] flex items-center justify-center gap-1" variants={slideInRight}>
                    <img src="/images/star.gif" alt="star" className="md:w-14 w-6 md:h-14 h-6" />
                    <div>
                        <h2 className="text-[#00567E] md:text-[32px] text-base font-semibold">+2000</h2>
                        <p className="text-[#121212] md:text-lg text-[10px] font-medium">تجارب مُوصى بها</p>
                    </div>
                </motion.div>

                <motion.div className="md:w-[206px] w-[123px] md:h-[94px] h-[50px] border border-[#A8DAF1] rounded-[20px] absolute -bottom-10 md:right-96 right-56 bg-[#FEFEFE] flex items-center justify-center gap-1" variants={slideInRight}>
                    <img src="/images/success.gif" alt="success" className="md:w-14 w-6 md:h-14 h-6" />
                    <div>
                        <h2 className="text-[#00567E] md:text-[32px] text-base font-semibold">+2000</h2>
                        <p className="text-[#121212] md:text-lg text-[10px] font-medium">عميل راض</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default WhyUs
