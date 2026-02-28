import { motion } from "framer-motion";
import { Check } from "lucide-react";
/* import Image from next removed */;
import { Section } from "@/common/section-wrapper";
import { Heading } from "@/common/heading";

const FEATURE_LIST_DATA = {
  heading: {
    title: "Why Choose Column?",
    subtitle: "Your Keys, Your Crypto",
    tag: "Benefits",
  },
  items: [
    {
      _title: "True Self-Custody",
      description: "You have complete control over your assets. We never hold your private keys or your funds.",
      image: {
        url: "/protected.avif",
        width: 560,
        height: 374,
        alt: "True Self-Custody",
      },
      characteristics: {
        items: [
          { _title: "No central point of failure" },
          { _title: "100% user-controlled" },
        ],
      },
    },
    {
      _title: "Enhanced Privacy & Security",
      description: "Interact with the blockchain securely and anonymously without forced KYC or invasive tracking.",
      image: {
        url: "/web3wallet.png",
        width: 560,
        height: 374,
        alt: "Enhanced Privacy & Security",
      },
      characteristics: {
        items: [
          { _title: "Zero personal data collection" },
          { _title: "Open-source architecture" },
        ],
      },
    },
    {
      _title: "Borderless Access",
      description: "Uncensorable access to decentralized finance and the broader Web3 ecosystem, anywhere in the world.",
      image: {
        url: "/Column.png",
        width: 560,
        height: 374,
        alt: "Borderless Access",
      },
      characteristics: {
        items: [
          { _title: "Permissionless transactions" },
          { _title: "Direct dApp interaction" },
        ],
      },
    },
  ],
};

export function FeaturesList() {
  const { heading, items } = FEATURE_LIST_DATA;
  
  return (
    <Section container="default" id="features">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <Heading subtitle={heading.subtitle} tag={heading.tag}>
          {heading.title}
        </Heading>
      </motion.div>

      <div className="flex flex-col gap-6">
        {items.map(({ image, ...item }, index) => (
          <motion.article
            key={item._title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-[--border] bg-[--surface-secondary] p-px sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16"
          >
            <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
               <div className="relative aspect-video h-[200px] w-full overflow-hidden rounded-lg bg-white md:h-full">
                 <img
                   src={image.url}
                   alt={image.alt ?? item._title}
                   className="h-full w-full object-cover"
                 />
               </div>
            </figure>
            <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
              <div className="flex flex-col items-start gap-2">
                <h5 className="text-2xl font-medium text-[--text-primary] md:text-3xl">
                  {item._title}
                </h5>
                <p className="font-normal text-[--text-secondary] md:text-lg">
                  {item.description}
                </p>
              </div>
              <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                {item.characteristics.items.map(({ _title }) => (
                  <li
                    key={_title}
                    className="flex items-center gap-4 font-normal text-[--text-secondary]"
                  >
                    <span className="flex size-6 items-center justify-center rounded-full bg-[--surface-tertiary]">
                      <Check className="size-4 text-[--text-tertiary]" />
                    </span>
                    {_title}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
