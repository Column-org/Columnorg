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

  // Hero phase: 0% to 15% scroll
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.12], [1, 0.95]);
  const heroTranslateY = useTransform(scrollYProgress, [0, 0.12], [0, -50]);

  // Intermediate heading appears: 10% to 28%
  const intermediateOpacity = useTransform(scrollYProgress, [0.1, 0.18, 0.28], [0, 1, 0]);
  
  // Cards appearance: 25% to 35%
  const cardsOpacity = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.25, 0.35], [50, 0]);
  
  // Expansion phase: 32% to 45%
  const expansionProgress = useTransform(scrollYProgress, [0.32, 0.45], [0, 1]);
  
  // Horizontal scroll phase: 40% to 95%
  // We use steps (0 to 4) for smoother mathematical interpolation
  const horizontalStep = useTransform(scrollYProgress, [0.4, 0.95], [0, 4]);
  const xTranslate = useTransform(horizontalStep, (step) => `calc(-${step} * (var(--card-width) + var(--card-gap)))`);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;
    const scrollSectionHeight = 350 * viewportHeight / 100;
    
    // One card step in scroll progress: (0.95 - 0.40) / 4 = 0.55 / 4 = 0.1375
    const step = scrollSectionHeight * 0.1375;
    
    const targetScroll = direction === 'right' 
      ? scrollTop + step 
      : scrollTop - step;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      ref={containerRef} 
      className="relative h-[350vh] @container p-0! overflow-x-clip m-0! [--card-width:calc(100vw-5rem)] [--card-gap:0.75rem] sm:[--card-width:300px] sm:[--card-gap:1.5rem] md:[--card-width:380px] md:[--card-gap:2.5rem]"
    >
      <div className="sticky top-[--header-height] h-[calc(100svh-var(--header-height))] flex flex-col items-center justify-center overflow-hidden">
        {/* Decorations */}
        <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute left-0 top-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)]">
            <div className="col-span-1 border-r border-[--border]" />
            <div className="col-span-1 border-r border-[--border]" />
          </div>
          <figure className="absolute -bottom-[20%] left-1/2 aspect-square w-[600px] -translate-x-1/2 rounded-full bg-[--accent-500]/30 blur-[120px]" />
        </motion.div>

        {/* Hero */}
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
              <h1 className="text-pretty text-center text-[clamp(44px,8vw,80px)] font-semibold leading-[1.1] tracking-[-0.04em] text-[--text-primary]">
                Redefining wallets<br />on Movement
              </h1>
              <p className="text-base max-w-xl text-pretty text-center text-[--text-tertiary] md:text-lg">
                Making Onboarding consumer first on Movementlabs
              </p>
            </div>
            <Button className="!h-14 w-full sm:w-auto px-12" intent="primary">
              Get Started for Free
            </Button>
          </div>
        </motion.div>

        {/* Intermediate */}
        <motion.div
          style={{ 
            opacity: intermediateOpacity,
            visibility: useTransform(intermediateOpacity, (v) => v <= 0 ? "hidden" : "visible") as any,
          }}
          className="absolute inset-0 flex flex-col items-center justify-start pt-[12vh] z-50 pointer-events-auto md:pt-[15vh]"
        >
          <div className="relative">
            {/* Pulsing Sparkles around Heading */}
            <motion.div
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [0.8, 1.2, 0.8],
                rotate: [0, 15, -15, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-12 -top-12 md:-left-20 md:-top-20 pointer-events-none"
            >
              <img src="/sparkles.svg" alt="" className="w-8 h-8 md:w-12 md:h-12 opacity-80" />
            </motion.div>

            <motion.div
              animate={{
                opacity: [0.3, 0.9, 0.3],
                scale: [0.7, 1.1, 0.7],
                rotate: [0, -10, 10, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
              className="absolute -right-8 -bottom-8 md:-right-16 md:-bottom-16 pointer-events-none"
            >
              <img src="/sparkles.svg" alt="" className="w-6 h-6 md:w-10 md:h-10 opacity-60" />
            </motion.div>

            <motion.div
              animate={{
                opacity: [0.2, 0.7, 0.2],
                scale: [0.6, 1.3, 0.6],
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2, ease: "easeInOut" }}
              className="absolute left-1/2 -top-16 -translate-x-1/2 md:-top-24 pointer-events-none"
            >
              <img src="/sparkles.svg" alt="" className="w-4 h-4 md:w-8 md:h-8 opacity-40 blur-[0.5px]" />
            </motion.div>

            <Heading level={2} className="text-pretty text-center text-4xl font-bold tracking-tighter sm:text-6xl md:text-8xl">
              Everything you need <br /> in one place.
            </Heading>
          </div>
        </motion.div>

        {/* Cards container - ALIGNED TO EDGE */}
        <div className="absolute inset-0 flex items-center z-30 pointer-events-none">
          <motion.div 
            style={{ 
              x: xTranslate, 
              opacity: cardsOpacity, 
              y: cardsY,
              visibility: useTransform(cardsOpacity, (v) => v <= 0 ? "hidden" : "visible") as any,
            }}
            className="flex items-center justify-start gap-[--card-gap] px-10 sm:px-20 md:px-32 pointer-events-auto"
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

          {/* Navigation */}
          <motion.div
            style={{ 
              opacity: cardsOpacity,
              visibility: useTransform(cardsOpacity, (v) => v <= 0 ? "hidden" : "visible") as any,
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-40 pointer-events-auto"
          >
            <div className="flex flex-col items-center gap-3 rounded-full border border-[--border] bg-white/80 backdrop-blur-md p-2 shadow-xl">
              <button 
                onClick={() => handleManualScroll('right')}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff7ea] text-[#4F3F85] hover:bg-[#fff2d1] transition-all active:scale-95 shadow-sm border border-[#4F3F85]/10"
              >
                <ChevronRight className="size-8" />
              </button>
              <button 
                onClick={() => handleManualScroll('left')}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff7ea] text-[#4F3F85] hover:bg-[#fff2d1] transition-all active:scale-95 shadow-sm border border-[#4F3F85]/10"
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
];
