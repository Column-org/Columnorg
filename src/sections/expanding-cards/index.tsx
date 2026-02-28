
import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/common/section-wrapper";
import { Heading } from "@/common/heading";
import { Button } from "@/common/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./card";
import { PhoneFrame } from "@/components/phone-frame";

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

  // Intermediate heading appears: 10% to 38%
  const intermediateOpacity = useTransform(scrollYProgress, [0.1, 0.18, 0.32, 0.4], [0, 1, 1, 0]);
  
  // Cards appearance: 42% to 52%
  const cardsOpacity = useTransform(scrollYProgress, [0.42, 0.52], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.42, 0.52], [50, 0]);
  
  // Expansion phase: 50% to 62%
  const expansionProgress = useTransform(scrollYProgress, [0.5, 0.62], [0, 1]);
  
  // Horizontal scroll phase: 62% to 98%
  const horizontalStep = useTransform(scrollYProgress, [0.62, 0.98], [0, 4]);
  const xTranslate = useTransform(horizontalStep, (step) => `calc(-${step} * (var(--card-width) + var(--card-gap)))`);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollSectionHeight = containerRef.current.offsetHeight;
    
    // One card step in scroll progress: (0.98 - 0.62) / 4 = 0.36 / 4 = 0.09
    const step = scrollSectionHeight * 0.09;
    
    const targetScroll = direction === 'right' 
      ? currentScrollTop + step 
      : currentScrollTop - step;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      ref={containerRef} 
      className="relative h-[550vh] md:h-[400vh] lg:h-[350vh] @container !p-0 overflow-x-clip !m-0 [--card-width:calc(100vw-5rem)] [--card-gap:0.75rem] sm:[--card-width:300px] sm:[--card-gap:1.5rem] md:[--card-width:380px] md:[--card-gap:2.5rem]"
    >
      <div className="sticky top-[var(--header-height)] h-[calc(100vh-var(--header-height))] flex flex-col items-center justify-center overflow-hidden">
        {/* Decorations */}
        <motion.div style={{ opacity: heroOpacity }} className="absolute inset-0 z-0 pointer-events-none">

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
              <h1 className="text-pretty text-center text-[clamp(44px,8vw,80px)] font-medium leading-[1.1] tracking-[-0.04em] text-[--text-primary]">
                Unlock the Power <br /> of Movement
              </h1>
              <p className="text-base max-w-xl text-pretty text-center text-[--text-tertiary] md:text-lg">
                The most advanced interface for the next generation of decentralized finance.
              </p>
            </div>
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
            {/* ASCII Art Background Decoration */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-[0.12] select-none pointer-events-none z-0 text-[--text-tertiary]">
              <pre className="font-mono text-[12px] leading-[1.1] whitespace-pre text-center md:text-[16px]">
{`                                                                                 
                                                                                 
                                                                                 
                                                                                 
                                                                                 
 @@@@@                                                                      @@@@@
 @@@@@@@                                                                  @@@@@@@
 @@@@@@@@                                                                 @@@@@@@
 @@@@@@@@                                                                 @@@@@@@
 @@@@@@@@                                                                 @@@@@@@
 @@@@@@@@                                                                 @@@@@@@
 @@@@@@@@                                                                 @@@@@@@
 @@@@@@@@                                                                 @@@@@@@
 @@@@@@@@                                                                 @@@@@@@
 @@@@@@@@@@@@@@@@@                                              @@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@                                              @@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@                                 @@@          @@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@                            @@@@@@@@          @@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@                  @         @@@@@@@@          @@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@             @@@@@@         @@@@@@@@          @@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@           @@@@@@@@         @@@@@@@@          @@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@           @@@@@@@@         @@@@@@@@          @@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@           @@@@@@@@         @@@@@@@@          @@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@           @@@@@@@@         @@@@@@@@          @@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@           @@@@@@@@         @@@@@@@@          @@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@           @@@@@@@@         @@@@@@@@          @@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@           @@@@@@@          @@@@@@@@          @@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@           @@@@@@@          @@@@@@@@          @@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@           @@@@@@@          @@@@@@@@          @@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@           @@@@@@@          @@@@@@@@          @@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@           @@@@@@@          @@@@@@@@       @@@@@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@           @@@@@@@          @@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@           @@@@@@@                   @@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@           @@@@@@@      @@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@           @       @@@@@@@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@@@       @@          @@@@@@@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@    @@@@@@@          @@@@@@@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@          @@@@@@@@          @@@@@@@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@          @@@@@@@@          @@@@@@@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@          @@@@@@@@          @@@@@@@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@          @@@@@@@@          @@@@@@@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@          @@@@@@@@          @@@@@@@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@          @@@@@@@@          @@@@@@@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@          @@@@@@@@          @@@@@@@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@          @@@@@@@@          @@@@@@@@@         @@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@          @@@@@@@@          @@@@@@@@@          @@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@          @@@@@@@@          @@@@@@@@@          @@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@          @@@@@@@@          @@@@@@@@@          @@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@          @@@@@@@@          @@@@@@@@@          @@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@          @@@@@@@@          @@@@@@@@@          @@@@@@@@@@@@@@@@@@@@@@@@@`}
              </pre>
            </div>

            <Heading level={2} className="text-pretty text-center text-4xl font-bold tracking-tighter sm:text-6xl md:text-8xl">
              Everything you need <br /> in one place.
            </Heading>
            
            <motion.div 
              style={{ 
                opacity: useTransform(scrollYProgress, [0.15, 0.22], [0, 1]),
                scale: useTransform(scrollYProgress, [0.15, 0.22], [0.9, 1]),
                y: useTransform(scrollYProgress, [0.15, 0.22], [40, 0])
              }}
              className="mt-12"
            >
              <PhoneFrame />
            </motion.div>
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
            <div className="flex flex-col items-center gap-3 rounded-full border border-[--border] bg-[--surface-primary]/80 backdrop-blur-md p-2 shadow-xl">
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
    title: "Buy and sell all types of crypto in an instant.",
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
];
