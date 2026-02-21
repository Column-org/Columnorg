import { Section } from "@/common/section-wrapper";
import { Heading } from "@/common/heading";

import { Slider } from "./slider";

export interface Quote {
  _id: string;
  _title: string;
  text: string;
  role: string;
  image?: {
    url: string;
  };
}

export interface TestimonialsProps {
  heading: {
    title: string;
    subtitle?: string;
    tag?: string;
    align?: "center" | "left" | "right" | "none";
  };
  quotes: Quote[];
}

export function Testimonials({ heading, quotes }: TestimonialsProps) {
  return (
    <div className="relative overflow-clip">
      <Section>
        <Slider quotes={quotes}>
          {heading.align === "none" ? (
            <div />
          ) : (
            <Heading className="self-stretch" {...heading}>
              {heading.title}
            </Heading>
          )}
        </Slider>
      </Section>
    </div>
  );
}
