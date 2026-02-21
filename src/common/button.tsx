import { type VariantProps, cva } from "class-variance-authority";
import { Link, type LinkProps as RouterLinkProps } from "react-router-dom";

export const $button = cva(
  "gap-1 font-normal shrink-0 rounded-full ring-[--control] focus-visible:ring-2 outline-hidden outline-0",
  {
    variants: {
      intent: {
        primary:
          "bg-[--accent-500] hover:bg-[--accent-600] text-[--text-on-accent-primary] border-[--accent-600]",
        secondary:
          "bg-[--surface-secondary] text-[--text-primary] border-[--border] border dark:bg-[--dark-surface-secondary] dark:text-[--dark-text-primary] dark:border-[--dark-border] hover:bg-[--surface-tertiary] dark:hover:bg-[--dark-surface-tertiary]",
        tertiary:
          "bg-[--text-primary] text-[--surface-primary] dark:bg-[--dark-text-primary] dark:text-[--dark-surface-primary] border border-[--dark-border] dark:border-[--border] hover:bg-[--dark-surface-tertiary] dark:hover:bg-[--surface-tertiary]",
      },
      disabled: {
        true: "opacity-30",
      },
      onlyButton: {
        true: "rounded-xs",
      },
      iconSide: {
        left: "flex-row-reverse pl-3",
        right: "flex-row pr-3",
      },
      unstyled: {
        true: "px-0 py-0 bg-transparent border-none hover:bg-transparent hover:border-none dark:hover:bg-transparent dark:hover:border-none dark:bg-transparent dark:border-none",
      },
      size: {
        md: "inline-flex items-center justify-center px-3.5 text-sm h-8 md:px-5",
        lg: "inline-flex items-center justify-center h-9 px-5 text-sm md:text-base md:h-10",
      },
    },
  },
);

type ButtonProps<C extends keyof React.JSX.IntrinsicElements> = VariantProps<typeof $button> &
  React.JSX.IntrinsicElements[C] & {
    icon?: React.ReactNode;
    unstyled?: boolean;
    href?: string;
  };

export const Button = ({
  children,
  intent = "primary",
  disabled = false,
  onlyButton = false,
  icon,
  iconSide = "left",
  unstyled,
  className,
  size = "md",
  ref,
  ...props
}: ButtonProps<"button">) => {
  return (
    <button
      ref={ref}
      className={$button(
        !unstyled
          ? {
              intent,
              disabled,
              onlyButton,
              iconSide: icon ? iconSide : undefined,
              unstyled,
              className,
              size,
            }
          : { className },
      )}
      disabled={disabled}
      {...props}
    >
      {children}
      {icon ? <span>{icon}</span> : null}
    </button>
  );
};

export const ButtonLink = ({
  children,
  intent = "primary",
  disabled = false,
  onlyButton = false,
  icon,
  iconSide = "left",
  unstyled,
  className,
  size = "md",
  ref,
  href,
  ...props
}: ButtonProps<"a"> & Partial<RouterLinkProps>) => {
  const isExternal = href?.startsWith('http') || href?.startsWith('mailto');

  if (isExternal) {
    return (
      <a
        ref={ref}
        href={href}
        className={$button(
          !unstyled ? { intent, disabled, onlyButton, iconSide: icon ? iconSide : undefined, className, unstyled, size } : { className }
        )}
        {...props}
      >
        {children}
        {icon ? <span>{icon}</span> : null}
      </a>
    );
  }

  return (
    <Link
      ref={ref as any}
      to={href || '#'}
      className={$button(
        !unstyled
          ? {
              intent,
              disabled,
              onlyButton,
              iconSide: icon ? iconSide : undefined,
              className,
              unstyled,
              size,
            }
          : { className },
      )}
      {...(props as any)}
    >
      {children}
      {icon ? <span>{icon}</span> : null}
    </Link>
  );
};
