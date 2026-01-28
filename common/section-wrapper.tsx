import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const $section = cva("py-14 md:py-[72px] flex flex-col items-center gap-10 relative", {
  variants: {
    container: {
      default: "container mx-auto px-6",
      full: "",
    },
  },
  defaultVariants: {
    container: "default",
  },
});

type SectionProps = React.AllHTMLAttributes<HTMLDivElement> & VariantProps<typeof $section>;

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, container, ...props }, ref) => {
    return <section ref={ref} className={$section({ className, container })} {...props} />;
  }
);

Section.displayName = "Section";
