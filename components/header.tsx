"use client";

import { ButtonLink } from "@/common/button";
import Image from "next/image";
import { DesktopMenu, MobileMenu, HeaderProps } from "./navigation-menu";
import { Github } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

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
        icon: <Github className="size-4" />,
      },
    ],
  },
};

export const Header = () => {
  const { scrollYProgress } = useScroll();
  
  // Sync header background with page background transition
  const headerBg = useTransform(
    scrollYProgress,
    [0.8, 0.95],
    ["rgba(255, 255, 255, 0.95)", "rgba(255, 247, 234, 0.95)"]
  );

  return (
    <motion.header 
      style={{ backgroundColor: headerBg }}
      className="sticky left-0 top-0 z-[110] flex w-full flex-col border-b border-[--border] backdrop-blur-sm"
    >
      <div className="flex min-h-[--header-height] py-4">
        <div className="container mx-auto flex w-full items-center justify-between px-6">
          <div className="flex items-center gap-8">
            <ButtonLink unstyled className="flex items-center gap-3 ring-offset-2" href="/">
              <Image
                src="/Column.png"
                alt="Column Logo"
                width={150}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
              <span className="text-3xl font-bold text-[--text-primary]">
                Column
              </span>
            </ButtonLink>
            
            {/* Navigation links close to the logo */}
            <DesktopMenu {...STATIC_HEADER_DATA} showLinksOnly />
          </div>
          
          <div className="flex items-center gap-8">
            {/* CTA buttons on the right */}
            <DesktopMenu {...STATIC_HEADER_DATA} showCtasOnly />
            <MobileMenu {...STATIC_HEADER_DATA} />
          </div>
        </div>
      </div>
    </motion.header>
  );
};
