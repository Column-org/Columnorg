import { Heading } from "@/common/heading";
import { Section } from "@/common/section-wrapper";

export interface FaqProps {
  heading: {
    title: string;
    subtitle?: string;
    tag?: string;
  };
  questions: {
    items: {
      _title: string;
      answer: string;
    }[];
  };
}

export function Faq(faq: FaqProps) {
  return (
    <Section>
      <Heading {...faq.heading}>
        {faq.heading.title}
      </Heading>
      <ul className="mx-auto flex w-full grid-cols-3 flex-col place-content-start items-start gap-8 self-stretch lg:grid lg:gap-14 lg:px-24">
        {faq.questions.items.map((question) => (
          <li key={question._title} className="flex flex-col gap-1.5">
            <p className="font-medium leading-relaxed tracking-tighter sm:text-lg">
              {question._title}
            </p>
            <p className="text-sm leading-relaxed tracking-tight text-[--text-tertiary] sm:text-base">
              {question.answer}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
