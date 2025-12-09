import { ButtonLink } from "@/common/button";
import Image from "next/image";
import { DesktopMenu, MobileMenu, HeaderProps } from "./navigation-menu";

import { GitHubLogoIcon } from "@radix-ui/react-icons";

const STATIC_HEADER_DATA: HeaderProps = {
  navbar: {
    items: [
      { _id: "1", _title: "Features", href: "#features", sublinks: { items: [] } },
      { _id: "2", _title: "Partners", href: "#partners", sublinks: { items: [] } },
      { _id: "3", _title: "FAQ", href: "#faq", sublinks: { items: [] } },
    ],
  },
  rightCtas: {
    items: [
      {
        _id: "cta1",
        href: "https://github.com/NileDex",
        label: "GitHub",
        type: "secondary",
        icon: <GitHubLogoIcon className="size-4" />,
      },
    ],
  },
};

export const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-[110] flex w-full flex-col border-b border-[--border] bg-[--surface-primary] dark:border-[--dark-border] dark:bg-[--dark-surface-primary]">
      <div className="flex min-h-[--header-height] bg-[--surface-primary] py-4 dark:bg-[--dark-surface-primary]">
        <div className="container mx-auto grid w-full grid-cols-[auto_auto_1fr] items-center gap-8 px-6 lg:gap-12">
          <ButtonLink unstyled className="flex items-center gap-3 ring-offset-2" href="/">
            <Image
              src="/Column.png"
              alt="Column Logo"
              width={150}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
            <span className="text-3xl font-bold text-[--text-primary] dark:text-[--dark-text-primary]">
              Column
            </span>
          </ButtonLink>
          <DesktopMenu {...STATIC_HEADER_DATA} />
          <MobileMenu {...STATIC_HEADER_DATA} />
        </div>
      </div>
    </header>
  );
};
