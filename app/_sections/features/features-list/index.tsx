import { CheckIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Section } from "../../../../common/section-wrapper";
import { Heading } from "../../../../common/heading";
import { DarkLightImage } from "../../../../common/dark-light-image";

const FEATURE_LIST_DATA = {
  heading: {
    title: "Why Choose Column?",
    subtitle: "Built for the future",
    tag: "Benefits",
  },
  items: [
    {
      _title: "Uses Privy",
      description: "Seamless authentication and wallet management powered by Privy.",
      image: {
        url: "/protected.avif",
        width: 560,
        height: 374,
        alt: "Uses Privy",
      },
      characteristics: {
        items: [
          { _title: "Sub-second finality" },
          { _title: "High throughput" },
        ],
      },
    },
    // Add more items as needed
    {
      _title: "Secure Asset Transfer",
      description: "Experience the highest standard of security for all your asset transfers.",
      image: {
        url: "/web3wallet.png",
        width: 560,
        height: 374,
        alt: "Secure Asset Transfer",
      },
      characteristics: {
        items: [
          { _title: "Multi-layer encryption" },
          { _title: "Verified protocols" },
        ],
      },
    },
    {
      _title: "In app Swap with Mosaic API",
      description: "Swap tokens effortlessly without ever leaving the application.",
      image: {
        url: "/Column.png",
        width: 560,
        height: 374,
        alt: "In app Swap with Mosaic API",
      },
      characteristics: {
        items: [
          { _title: "Unbeatable rates" },
          { _title: "Instant execution" },
        ],
      },
    },
  ],
};

export function FeaturesList() {
  const { heading, items } = FEATURE_LIST_DATA;
  
  return (
    <Section container="default" id="features">
      <Heading subtitle={heading.subtitle} tag={heading.tag}>
        <h4>{heading.title}</h4>
      </Heading>
      <div className="flex flex-col gap-6">
        {items.map(({ image, ...item }) => (
          <article
            key={item._title}
            className="flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-[--border] bg-[--surface-secondary] p-px dark:border-[--dark-border] dark:bg-[--dark-surface-secondary] sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16"
          >
            <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
              {/* <DarkLightImage
                light={image}
                className="block aspect-video h-[200px] w-full rounded-lg border border-[--border] object-cover dark:border-[--dark-border] md:h-full"
                height={374}
                width={560}
              /> */}
               <div className="relative aspect-video h-[200px] w-full overflow-hidden rounded-lg bg-white md:h-full">
                 <Image
                   src={image.url}
                   alt={image.alt ?? item._title}
                   fill
                   className="object-cover"
                 />
               </div>
            </figure>
            <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
              <div className="flex flex-col items-start gap-2">
                <h5 className="text-2xl font-medium text-[--text-primary] dark:text-[--dark-text-primary] md:text-3xl">
                  {item._title}
                </h5>
                <p className="font-normal text-[--text-secondary] dark:text-[--dark-text-secondary] md:text-lg">
                  {item.description}
                </p>
              </div>
              <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                {item.characteristics.items.map(({ _title }) => (
                  <li
                    key={_title}
                    className="flex items-center gap-4 font-normal text-[--text-secondary] dark:text-[--dark-text-secondary]"
                  >
                    <span className="flex size-6 items-center justify-center rounded-full bg-[--surface-tertiary] dark:bg-[--dark-surface-tertiary]">
                      <CheckIcon className="text-[--text-tertiary] dark:text-[--dark-text-tertiary]" />
                    </span>
                    {_title}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
