import { Heading } from "@/common/heading";
import { Section } from "@/common/section-wrapper";
import { TestimonialsGridClient, type Quote } from "./testimonials-list";

export interface TestimonialsGridProps {
  heading: {
    title: string;
    subtitle?: string;
    tag?: string;
    align?: "center" | "left" | "right";
  };
  quotes: Quote[];
}

export function TestimonialsGrid({ heading, quotes }: TestimonialsGridProps) {
  return (
    <Section>
      <Heading {...heading}>
        {heading.title}
      </Heading>
      <TestimonialsGridClient quotes={quotes} />
    </Section>
  );
}
