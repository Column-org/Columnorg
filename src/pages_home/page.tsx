import { Hero } from "../sections/hero";
import { Companies } from "../sections/companies";
import { FeaturesGrid } from "../sections/features/features-grid";
import { FeaturesList } from "../sections/features/features-list";
import { PageView } from "@/components/page-view";
import { AccordionFaq } from "../sections/accordion-faq";
import { ExpandingCards } from "../sections/expanding-cards";
import { Newsletter } from "../sections/newsletter";
import { Testimonials } from "../sections/testimonials";



const STATIC_TESTIMONIALS_DATA = {
  heading: { title: "Trusted by thousands", subtitle: "Join the community movement.", tag: "Testimonials", align: "center" },
  quotes: [
    { _id: "1", _title: "Early Adopter", text: "The most seamless onboarding experience on Movement. Period.", role: "Developer" },
    { _id: "2", _title: "NFT Collector", text: "I can finally manage all my assets without switching wallets constantly.", role: "Trader" }
  ]
};

const STATIC_NEWSLETTER_DATA = {
  title: "Stay in the loop",
  description: "Get the latest updates on Movement and Column.",
  submissions: {
    ingestKey: "newsletter",
    schema: [{ type: "email", name: "email", label: "Enter your email", placeholder: "your@email.com", required: true }]
  }
};

export default function Page() {
  return (
    <>
      <PageView analyticsKey="static_page_view" />
      <Hero />
      <ExpandingCards />
      <Companies />
      <FeaturesList />
      <FeaturesGrid />
      <Testimonials {...STATIC_TESTIMONIALS_DATA as any} />

      <AccordionFaq />
      <Newsletter newsletter={STATIC_NEWSLETTER_DATA as any} />
    </>
  );
}
