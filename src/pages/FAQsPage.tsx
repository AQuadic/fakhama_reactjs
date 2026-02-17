import { Link } from "react-router-dom"
import BackArrow from "../components/icons/BackArrow"
import { Skeleton } from "../components/ui/skeleton";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { getFaqs } from "../lib/api/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

const FAQsPage = () => {
    const { t, i18n } = useTranslation();

    const { data, isLoading } = useQuery({
        queryKey: ["faqs"],
        queryFn: () => getFaqs(),
    });

    if (isLoading) {
        return (
            <div className="container mt-10 space-y-4">
                {[...Array(4)].map((_, index) => (
                    <div
                        key={index}
                        className="rounded-2xl border p-4"
                    >
                        <Skeleton className="h-5 w-3/4" />
                        <div className="mt-3 space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    const faqs = data?.data ?? [];
    return (
        <section className="container py-12!">
            <Link to='/' className="w-12 h-12 rounded-full bg-[#F6F6F6] md:hidden flex items-center justify-center">
                <BackArrow />
            </Link>
            <div className="md:mt-12 mt-10 flex flex-col items-center justify-center gap-9">
                <h2 className="text-[#0B0B0B] md:text-[40px] text-2xl font-semibold">
                    {t('faq.faq')}
                </h2>
                <p className="text-[#3B3B3B] md:text-xl text-sm font-medium text-center">
                    {t('faq.faq_description')}
                </p>
            </div>

            <div className="container mt-10!">
                <Accordion type="single" collapsible className="rounded-4xl">
                    {faqs.map((faq) => (
                        <AccordionItem
                            key={faq.id}
                            value={`item-${faq.id}`}
                        >
                            <AccordionTrigger>
                                {faq.question[i18n.language as "ar" | "en"]}
                            </AccordionTrigger>

                            <AccordionContent>
                                {faq.answer[i18n.language as "ar" | "en"]}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

export default FAQsPage
