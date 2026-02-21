import clsx from "clsx";
import * as React from "react";

export type SimpleTooltipProps = {
  content: React.ReactNode;
  delayDuration?: number;
  disabled?: boolean;
  className?: string;
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  children: React.ReactNode;
};

export function SimpleTooltip({
  children,
  content,
  side = "top",
  sideOffset = 5,
  className,
  disabled,
}: SimpleTooltipProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  if (disabled) return <>{children}</>;

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={clsx(
            "absolute z-[999] rounded-md border border-[--border] bg-[--surface-secondary] px-2 py-1 text-sm text-[--text-secondary] shadow-md dark:border-[--dark-border] dark:bg-[--dark-surface-secondary] dark:text-[--dark-text-secondary]",
            "whitespace-nowrap transition-all duration-200",
            {
              "bottom-full left-1/2 mb-2 -translate-x-1/2": side === "top",
              "top-full left-1/2 mt-2 -translate-x-1/2": side === "bottom",
              "left-full top-1/2 ml-2 -translate-y-1/2": side === "right",
              "right-full top-1/2 mr-2 -translate-y-1/2": side === "left",
            },
            className,
          )}
        >
          {content}
          <div
            className={clsx(
              "absolute size-2 rotate-45 border border-[--border] bg-[--surface-secondary] dark:border-[--dark-border] dark:bg-[--dark-surface-secondary]",
              {
                "bottom-[-5px] left-1/2 -translate-x-1/2 border-l-0 border-t-0": side === "top",
                "top-[-5px] left-1/2 -translate-x-1/2 border-b-0 border-r-0": side === "bottom",
                "left-[-5px] top-1/2 -translate-y-1/2 border-r-0 border-t-0": side === "right",
                "right-[-5px] top-1/2 -translate-y-1/2 border-b-0 border-l-0": side === "left",
              },
            )}
          />
        </div>
      )}
    </div>
  );
}

export function CustomTooltip(props: SimpleTooltipProps) {
  return <SimpleTooltip {...props} />;
}

export function TooltipProvider({
  children,
}: {
  children?: React.ReactNode;
  delayDuration?: number;
}) {
  return <>{children}</>;
}
