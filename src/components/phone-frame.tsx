import React from "react";

export function PhoneFrame() {
  return (
    <div className="relative mx-auto w-[280px] h-[580px] rounded-[3rem] border-[8px] border-[#1a1a1a] bg-[#000] shadow-2xl ring-1 ring-white/10 overflow-hidden group">
      {/* Notch / Dynamic Island */}
      <div className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-[#000] z-50 ring-1 ring-white/5" />
      
      {/* Screen Content */}
      <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
        <img 
          src="/herophone.jpg" 
          alt="Phone Content" 
          className="h-full w-full object-cover"
        />
      </div>

      {/* Side buttons hardware */}
      <div className="absolute -left-[10px] top-28 h-12 w-[3px] rounded-r-md bg-[#222] shadow-[1px_0_0_rgba(255,255,255,0.05)]" />
      <div className="absolute -left-[10px] top-44 h-12 w-[3px] rounded-r-md bg-[#222] shadow-[1px_0_0_rgba(255,255,255,0.05)]" />
      <div className="absolute -right-[10px] top-36 h-20 w-[3px] rounded-l-md bg-[#222] shadow-[-1px_0_0_rgba(255,255,255,0.05)]" />
    </div>
  );
}
