import { Companies } from "../_sections/companies";
import { FeaturesGrid } from "../_sections/features/features-grid";
import { FeaturesList } from "../_sections/features/features-list";
import { PageView } from "../../components/page-view";
import { AccordionFaq } from "../_sections/accordion-faq";
import { ExpandingCards } from "../_sections/expanding-cards";

export const dynamic = "force-static";
export const revalidate = 30;

export default function Page() {
  return (
    <>
      <PageView analyticsKey="static_page_view" />
      <ExpandingCards />
      <Companies />
      <FeaturesList />
      <FeaturesGrid />
      <AccordionFaq />
    </>
  );
}
