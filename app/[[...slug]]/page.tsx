import { Companies } from "../_sections/companies";
import { FeaturesGrid } from "../_sections/features/features-grid";
import { FeaturesList } from "../_sections/features/features-list";
import { Hero } from "../_sections/hero";
import { PageView } from "../../components/page-view";
import { AccordionFaq } from "../_sections/accordion-faq";

export const dynamic = "force-static";
export const revalidate = 30;

export default function Page() {
  return (
    <>
      <PageView analyticsKey="static_page_view" />
      <Hero />
      <Companies />
      <FeaturesList />
      <FeaturesGrid />
      <AccordionFaq />
    </>
  );
}
