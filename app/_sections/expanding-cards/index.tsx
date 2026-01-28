"use client";
import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "../../../common/section-wrapper";
import { Heading } from "../../../common/heading";
import { Button } from "../../../common/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./card";

export const ExpandingCards = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Hero phase: 0% to 20% scroll - hero is alone
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const heroTranslateY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Intermediate heading appears as hero fades: 15% to 30%
  const intermediateOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0, 1, 0]);
  
  // Cards appear after hero and intermediate heading: 35% to 45%
  const cardsOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.35, 0.45], [50, 0]);
  
  // Expansion phase: 45% to 65% scroll
  const expansionProgress = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);
  
  // Horizontal scroll phase: 60% to 95% scroll
  // We go slightly further (-110%) to ensure we see the last card clearly
  const xTranslate = useTransform(scrollYProgress, [0.65, 0.95], ["0%", "-110%"]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;
    const totalHeight = 500 * viewportHeight / 100; // 500vh
    
    // Step size is 15% of the total scrollable height for a meaningful jump
    const step = totalHeight * 0.15;
    const targetScroll = direction === 'right' 
      ? scrollTop + step 
      : scrollTop - step;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <section ref={containerRef} className="relative h-[500vh] @container p-0! overflow-x-clip m-0!">
      <div className="sticky top-[--header-height] h-[calc(100svh-var(--header-height))] flex flex-col items-center justify-center overflow-hidden">
        {/* Original Hero Decorations */}
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <div className="absolute left-0 top-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)]">
            <div className="col-span-1 border-r border-[--border]" />
            <div className="col-span-1 border-r border-[--border]" />
            <div className="col-span-1" />
          </div>
          {/* Enhanced Glow */}
          <figure className="absolute -bottom-[20%] left-1/2 aspect-square w-[600px] -translate-x-1/2 rounded-full bg-[--accent-500]/30 blur-[120px]" />
          <figure className="absolute left-[4vw] top-[64px] hidden aspect-square w-[32vw] rounded-full bg-[--surface-primary] opacity-50 blur-[100px] md:block" />
          <figure className="absolute bottom-[-50px] right-[7vw] hidden aspect-square w-[30vw] rounded-full bg-[--surface-primary] opacity-50 blur-[100px] md:block" />
        </motion.div>

        {/* Unified Hero Container */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center z-10"
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroTranslateY,
            visibility: useTransform(heroOpacity, (v) => v <= 0 ? "hidden" : "visible") as any,
          }}
        >
          <div className="flex flex-col items-center gap-8 w-full max-w-4xl px-6">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-pretty text-center text-[clamp(48px,9vw,88px)] font-semibold leading-[1.05] tracking-[-0.045em] text-[--text-primary]">
                Redefining wallets<br />on Movement
              </h1>
              <p className="text-base max-w-xl text-pretty text-center text-[--text-tertiary] md:text-lg">
                Making Onboarding consumer first on Movementlabs
              </p>
            </div>
            
            <div className="relative flex w-full flex-col items-center justify-center max-w-md">
              <Button className="!h-14 w-full rounded-xl !text-base font-semibold shadow-[0_20px_50px_rgba(251,191,36,0.2)] md:!text-lg" intent="primary">
                Get Started for Free
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Intermediate heading disappears - Frame 2 */}
        <motion.div
          style={{ 
            opacity: intermediateOpacity,
            visibility: useTransform(intermediateOpacity, (v) => v <= 0 ? "hidden" : "visible") as any,
          }}
          className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none"
        >
          <Heading level={2} className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-8xl mb-6">
            Everything you need <br /> in one place.
          </Heading>
        </motion.div>

        {/* Cards and Navigation container - Frame 3 */}
        <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col items-center justify-center z-30 pointer-events-none">
          {/* Cards slider */}
          <motion.div 
            style={{ 
              x: xTranslate, 
              opacity: cardsOpacity, 
              y: cardsY,
              visibility: useTransform(cardsOpacity, (v) => v <= 0 ? "hidden" : "visible") as any,
            }}
            className="flex items-center justify-start gap-3 px-6 cursor-grab active:cursor-grabbing sm:gap-4 sm:px-[10vw] md:gap-5 md:px-[15vw] pointer-events-auto"
          >
            {CARDS.map((card, index) => (
              <Card 
                key={index} 
                {...card} 
                index={index} 
                progress={expansionProgress} 
              />
            ))}
          </motion.div>

          {/* Manual Navigation Pill */}
          <motion.div
            style={{ 
              opacity: cardsOpacity,
              visibility: useTransform(cardsOpacity, (v) => v <= 0 ? "hidden" : "visible") as any,
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-40 pointer-events-auto md:right-12"
          >
            <div className="flex flex-col items-center gap-2 rounded-full border border-[--border] bg-white/80 backdrop-blur-md p-1.5 shadow-xl">
              <button 
                aria-label="Next card"
                onClick={() => handleManualScroll('right')}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff7ea] text-[#4F3F85] hover:bg-[#fff2d1] transition-all active:scale-95 shadow-sm border border-[--border]/30"
              >
                <ChevronRight className="size-8" />
              </button>
              <button 
                aria-label="Previous card"
                onClick={() => handleManualScroll('left')}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff7ea] text-[#4F3F85] hover:bg-[#fff2d1] transition-all active:scale-95 shadow-sm border border-[--border]/30"
              >
                <ChevronLeft className="size-8" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CARDS = [
  {
    title: "Multiple chains, one wallet. No more switching.",
    color: "bg-[#B0A2F2]",
    image: "/wallet_card_mockup_1769554119799.png",
    description: "Personalize your experience",
  },
  {
    title: "Seamlessly access the largest NFT marketplaces.",
    color: "bg-[#2D2B3D]",
    image: "/nft_card_mockup_1769554135236.png",
    description: "Discover unique collections",
  },
  {
    title: "Showcase your NFT collection.",
    color: "bg-[#FADBD8]",
    image: "/showcase_card_mockup_1769554150388.png",
    description: "Display your assets beautifully",
  },
  {
    title: "Monitor any transaction and notify.",
    color: "bg-[#FDF2B3]",
    image: "/notifications_card_mockup_1769554175202.png",
    description: "Real-time alerts",
  },
  {
    title: "Institutional grade security for everyone.",
    color: "bg-[#D1F2EB]",
    description: "MPC & Social Recovery",
  },
  {
    title: "The fastest way to swap tokens.",
    color: "bg-[#FEF9E7]",
    description: "Best rates, zero fees",
  },
  {
    title: "Your keys, your crypto. Always.",
    color: "bg-[#EBF5FB]",
    description: "Self-custody made easy",
  },
];
