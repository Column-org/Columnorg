"use client";
import * as React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";
import clsx from "clsx";
import { useRef } from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  color: string;
  image?: string;
  description: string;
  index: number;
  progress: MotionValue<number>;
}

export const Card = ({ title, color, image, description, index, progress }: CardProps) => {
  // First card is fully visible, others are stacked behind
  const isFirstCard = index === 0;
  
  // Stacked state properties - first card has no offset
  const rotation = isFirstCard ? 0 : (index - 1.5) * 4;
  const yOffset = isFirstCard ? 0 : index * 8;
  const xOffsetInitial = isFirstCard ? 0 : index * 30 - 45;
  
  // Dynamic transforms based on expansion progress
  const currentRotation = useTransform(progress, [0, 1], [rotation, 0]);
  const currentY = useTransform(progress, [0, 1], [yOffset * -1, 0]);
  const currentX = useTransform(progress, [0, 1], [xOffsetInitial, 0]);
  const scale = useTransform(progress, [0, 0.5], [isFirstCard ? 1 : 0.92 + index * 0.02, 1]);

  return (
    <motion.div
      style={{
        rotate: currentRotation,
        y: currentY,
        x: currentX,
        scale,
        zIndex: 10 + index,
      }}
      className={clsx(
        "relative shrink-0 w-[calc(100vw-5rem)] h-[460px] rounded-[24px] p-6 flex flex-col gap-4 shadow-2xl overflow-hidden sm:w-[300px] sm:h-[440px] md:w-[380px] md:h-[520px] md:rounded-[40px] md:p-8 md:gap-5",
        color
      )}
    >
      <h3 className={clsx(
        "text-xl font-semibold leading-tight sm:text-2xl md:text-3xl",
        description.includes("Seamlessly") || color === "bg-[#2D2B3D]" ? "text-white" : "text-[#1A1A1A]"
      )}>
        {title}
      </h3>
      
      {image && (
        <div className="mt-auto relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 md:rounded-2xl">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover"
          />
        </div>
      )}

      {!image && (
        <div className="mt-auto flex flex-col gap-2 md:gap-4">
          <p className={clsx(
            "text-sm opacity-80 sm:text-base md:text-lg",
            color === "bg-[#2D2B3D]" ? "text-white" : "text-[#1A1A1A]"
          )}>
            Experience the future of finance with our advanced features and seamless integration.
          </p>
        </div>
      )}

      <div className="mt-4 flex items-center gap-2 md:gap-3">
         <div className="size-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm md:size-10">
            <div className="size-4 rounded-full bg-white md:size-5" />
         </div>
         <span className="text-xs font-medium opacity-80 sm:text-sm md:text-base">{description}</span>
      </div>
    </motion.div>
  );
};
