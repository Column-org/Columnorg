import { Section } from "@/common/section-wrapper";
import { TrackedButtonLink } from "@/components/tracked-button";

export interface Callout2Props {
  title: string;
  subtitle: string;
  actions?: {
    _id: string;
    href: string;
    label: string;
    type: "primary" | "secondary" | "tertiary";
  }[];
  eventsKey?: string;
}

export function Callout2(callout: Callout2Props) {
  return (
    <Section>
      <article className="flex flex-col justify-center gap-9 self-stretch rounded-xl bg-[rgba(var(--accent-rgb-500),0.1)] p-6 dark:bg-[rgba(var(--accent-rgb-600),0.1)] lg:flex-row lg:justify-between lg:p-10">
        <div className="flex flex-col gap-2">
          <h4 className="text-3xl font-medium text-[--text-primary] dark:text-[--dark-text-primary] lg:text-4xl">
            {callout.title}
          </h4>
          <p className="text-lg text-[--text-secondary] dark:text-[--dark-text-secondary] lg:text-xl">
            {callout.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-2 items-center gap-2 md:flex lg:flex-col">
          {callout.actions?.map((action) => (
            <TrackedButtonLink
              key={action._id}
              analyticsKey={callout.eventsKey}
              href={action.href}
              intent={action.type}
              name="secondary_cta_click"
            >
              {action.label}
            </TrackedButtonLink>
          ))}
        </div>
      </article>
    </Section>
  );
}
