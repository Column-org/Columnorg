/* import Image from next removed */;
import clsx from "clsx";

import { Section } from "@/common/section-wrapper";
import s from "./companies.module.css";

export function Companies() {
  return (
    <Section container="full" id="partners">
      <h2 className="text-center tracking-tight text-[--text-tertiary] opacity-50">
        Partners
      </h2>
      <div className="no-scrollbar flex max-w-full justify-center overflow-auto">
        <div className="bg-linear-to-r from-[--surface-primary] pointer-events-none absolute left-0 top-0 h-full w-[30vw] bg-transparent xl:hidden" />
        <div className="bg-linear-to-l from-[--surface-primary] pointer-events-none absolute right-0 top-0 h-full w-[30vw] bg-transparent xl:hidden" />
        <div
          className={clsx("flex shrink-0 items-center gap-4 px-6 lg:gap-6 lg:px-12", s.scrollbar)}
        >
          <figure className="flex h-16 items-center px-2 py-3 lg:p-4">
            <img
              alt="Privy"
              className="w-16 lg:w-20"
              height={20}
              src="/privy.webp"
              width={80}
            />
          </figure>
        </div>
      </div>
    </Section>
  );
}
