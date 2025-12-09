import { Heading } from "../../../common/heading";
import { Section } from "../../../common/section-wrapper";

import { Accordion } from "./accordion";

const FAQ_DATA = {
  heading: {
    title: "Freq. Asked Questions",
    subtitle: "Support",
    tag: "FAQ",
  },
  questions: {
    items: [
      {
        _title: "How does Column ensure security?",
        answer: "Column uses state-of-the-art encryption and non-custodial architecture to ensure only you have access to your funds.",
      },
      {
        _title: "Which networks are supported?",
        answer: "We support Movement.",
      },
      {
        _title: "Is there a mobile app?",
        answer: "Yes, Column is available on both iOS and Android platforms.",
      },
       {
        _title: "What are the fees?",
        answer: "Column is free to use. You only pay standard network gas fees.",
      },
    ],
  },
};

export function AccordionFaq() {
  const { heading, questions } = FAQ_DATA;
  return (
    <Section id="faq">
      <Heading {...heading}>
        <h4>{heading.title}</h4>
      </Heading>
      <div className="!mx-auto flex w-full !max-w-screen-md gap-8 lg:gap-14 lg:px-24">
        <Accordion items={questions.items} />
      </div>
    </Section>
  );
}
