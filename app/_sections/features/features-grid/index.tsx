import Image from "next/image";
import { Section } from "../../../../common/section-wrapper";

const FEATURES = [
  {
    _id: "1",
    title: "Non-Custodial",
    description: "You have full control over your assets. Your keys, your crypto.",
    icon: "/placeholder.svg", // We'll need to use what we have or generic icons
  },
  {
    _id: "2",
    title: "Encrypted Sending with Code",
    description: "Manage assets across multiple networks seamlessly from one dashboard.",
    icon: "/placeholder.svg",
  },
  {
    _id: "3",
    title: "Instant Swaps",
    description: "Swap tokens instantly with the best rates across decentralized exchanges.",
    icon: "/placeholder.svg",
  }
];

export function FeaturesGrid() {
  return (
    <Section>
      <div className="flex flex-col gap-4 text-center">
         <h4 className="text-3xl font-medium tracking-tight">Key Features</h4>
      </div>
      <div className="mt-10 grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
        {FEATURES.map(({ _id, title, description }) => (
          <article
            key={_id}
            className="flex flex-col gap-4 rounded-lg border border-[--border] p-4 [box-shadow:_70px_-20px_130px_0px_rgba(255,255,255,0.05)_inset] dark:border-[--dark-border] dark:[box-shadow:_70px_-20px_130px_0px_rgba(255,255,255,0.05)_inset]"
          >
            <figure className="flex size-9 items-center justify-center rounded-full border border-[--border] bg-[--surface-secondary] p-2 dark:border-[--dark-border] dark:bg-[--dark-surface-secondary]">
               {/* Placeholder for icon, maybe use lucide-react icons later */}
               <div className="size-full rounded-full bg-[--accent]" />
            </figure>
            <div className="flex flex-col items-start gap-1">
              <h5 className="text-lg font-medium">{title}</h5>
              <p className="text-pretty text-[--text-secondary] dark:text-[--dark-text-secondary]">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
