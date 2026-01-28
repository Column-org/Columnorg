import { isExternalLink } from "@/app/_utils/links";
import { ButtonLink } from "@/common/button";
import Image from "next/image";
import Link from "next/link";

const STATIC_FOOTER_DATA = {
  copyright: `© ${new Date().getFullYear()} Column. All rights reserved.`,
  navbar: {
    items: [
      { _title: "Features", url: "#features" },
      { _title: "Partners", url: "#partners" },
      { _title: "Privacy Policy", url: "/privacy" },
      { _title: "Terms of Service", url: "/terms" },
    ],
  },
  socialLinks: [
    { _title: "Twitter", url: "https://twitter.com", icon: "/twitter.svg" }, // Placeholder icon path
    { _title: "GitHub", url: "https://github.com", icon: "/github.svg" },   // Placeholder icon path
  ],
};

export const Footer = () => (
  <footer className="relative overflow-hidden bg-transparent py-16 text-black">
    {/* Large watermark text - Positioned at bottom on mobile, center on desktop */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0 flex items-end justify-center opacity-[0.03] sm:items-center">
      <h2 className="select-none text-[20vw] font-black leading-none tracking-tighter sm:text-[15vw]">
        Column
      </h2>
    </div>
    
    <div className="container relative z-10 mx-auto grid grid-cols-2 grid-rows-[auto_auto_auto] place-items-start items-center gap-y-7 px-6 sm:grid-cols-[1fr_auto_1fr] sm:grid-rows-2 sm:gap-x-3 sm:gap-y-16">
      <Link aria-label="Homepage" href="/">
        <Image
          src="/Column.png"
          alt="Column Logo"
          width={80}
          height={80}
          className="h-12 w-auto object-contain" />
      </Link>
      <nav className="col-start-1 row-start-2 flex flex-col gap-x-2 gap-y-3 self-center sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:flex-row sm:items-center sm:place-self-center md:gap-x-4 lg:gap-x-8">
        {STATIC_FOOTER_DATA.navbar.items.map(({ _title, url }) => (
          <ButtonLink
            key={_title}
            unstyled
            className="px-2 font-light tracking-tight text-black/60 hover:text-black"
            href={url ?? "#"}
            target={isExternalLink(url) ? "_blank" : "_self"}
          >
            {_title}
          </ButtonLink>
        ))}
      </nav>

      <p className="col-span-2 text-pretty text-sm text-black/60 sm:col-span-1">
        {STATIC_FOOTER_DATA.copyright}
      </p>

      <ul className="col-span-2 col-start-1 row-start-3 flex w-full items-center gap-x-3.5 gap-y-4 sm:col-span-1 sm:col-start-3 sm:row-start-2 sm:w-auto sm:flex-wrap sm:justify-self-end">
        {STATIC_FOOTER_DATA.socialLinks.map((link) => {
          return (
            <li key={link._title} className="shrink-0 sm:first:ml-auto">
              {/* Removed BaseHubImage and social links for now or use placeholders if icons exist */}
            </li>
          );
        })}
      </ul>
    </div>
  </footer>
);
