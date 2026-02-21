import clsx from "clsx";
import { useState } from "react";

import { Button } from "@/common/button";

export function Hero() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <section className="relative min-h-[calc(630px-var(--header-height))] overflow-hidden pb-10">
        <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-[--border] dark:border-[--dark-border]">
          {/* Decorations */}
          <div className="col-span-1 flex h-full items-center justify-center" />
          <div className="col-span-1 flex h-full items-center justify-center border-x border-[--border] dark:border-[--dark-border]" />
          <div className="col-span-1 flex h-full items-center justify-center" />
        </div>
        {/* --- */}
        <figure className="pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full bg-[--accent-500-40] blur-[200px]" />
        <figure className="pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full bg-[--surface-primary] opacity-50 blur-[100px] dark:bg-[--dark-surface-primary] md:block" />
        <figure className="pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full bg-[--surface-primary] opacity-50 blur-[100px] dark:bg-[--dark-surface-primary] md:block" />
        {/* --- */}
        <div className="relative z-10 flex flex-col divide-y divide-[--border] pt-[35px] dark:divide-[--dark-border]">
          <div>
            <div className="mx-auto flex min-h-[288px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-2 py-4 sm:px-16 lg:px-24">
              <h1 className="!max-w-screen-lg text-pretty text-center text-[clamp(32px,7vw,64px)] font-medium leading-none tracking-[-1.44px] text-[--text-primary] dark:text-[--dark-text-primary] md:tracking-[-2.16px]">
                Redefining Wallets on Movement
              </h1>
              <h2 className="text-md max-w-2xl text-pretty text-center text-[--text-tertiary] dark:text-[--dark-text-tertiary] md:text-lg">
                Making Onboarding consumer first on Movementlabs
              </h2>
            </div>
          </div>
          <div className="flex items-start justify-center px-8 pb-4 sm:px-24">
            <div className="relative flex w-full max-w-[80vw] flex-col items-center justify-start md:!max-w-[392px]">
              <Button
                className="!h-14 w-full flex-col items-center justify-center rounded-md !text-base"
                intent="primary"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Get Started for Free
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modal for app downloads */}
      {showDropdown && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 z-[150] bg-black/50 backdrop-blur-sm"
            onClick={() => setShowDropdown(false)}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="relative w-full max-w-sm rounded-lg border border-[--border] bg-[--surface-primary] p-8 shadow-2xl dark:border-[--dark-border] dark:bg-[--dark-surface-primary]">
              {/* Close button */}
              <button
                onClick={() => setShowDropdown(false)}
                className="absolute right-4 top-4 rounded-full p-1 text-[--text-tertiary] hover:bg-[--surface-tertiary] hover:text-[--text-primary] dark:text-[--dark-text-tertiary] dark:hover:bg-[--dark-surface-tertiary] dark:hover:text-[--dark-text-primary]"
                aria-label="Close"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h3 className="mb-6 text-center text-2xl font-semibold text-[--text-primary] dark:text-[--dark-text-primary]">
                Download Column
              </h3>
              
              <div className="flex flex-col gap-4">
                <button
                  disabled
                  className="flex items-center justify-center gap-4 rounded-lg border border-[--border] bg-[--surface-secondary] px-6 py-4 opacity-60 transition-opacity dark:border-[--dark-border] dark:bg-[--dark-surface-secondary]"
                >
                  <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-[--text-tertiary] dark:text-[--dark-text-tertiary]">Download on</div>
                    <div className="text-base font-semibold text-[--text-primary] dark:text-[--dark-text-primary]">App Store (Coming Soon)</div>
                  </div>
                </button>
                
                <button
                  disabled
                  className="flex items-center justify-center gap-4 rounded-lg border border-[--border] bg-[--surface-secondary] px-6 py-4 opacity-60 transition-opacity dark:border-[--dark-border] dark:bg-[--dark-surface-secondary]"
                >
                  <svg className="h-10 w-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-[--text-tertiary] dark:text-[--dark-text-tertiary]">Download on</div>
                    <div className="text-base font-semibold text-[--text-primary] dark:text-[--dark-text-primary]">Google Play (Coming Soon)</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
