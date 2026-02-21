import * as React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { $button, ButtonLink } from "@/common/button";
import { useToggleState } from "@/hooks/use-toggle-state";
import { useHasRendered } from "@/hooks/use-has-rendered";

export interface SublinkItem {
  _id: string;
  _title: string;
  href: string;
}

export interface NavItem {
  _id: string;
  _title: string;
  href?: string;
  sublinks: {
    items: SublinkItem[];
  };
}

export interface HeaderProps {
  navbar: {
    items: NavItem[];
  };
  rightCtas: {
    items: {
      _id: string;
      href: string;
      label: string;
      type: "primary" | "secondary" | "tertiary";
      icon?: React.ReactNode;
    }[];
  };
}

// #region desktop 💻
/* -------------------------------------------------------------------------- */
/*                                   Desktop                                  */
/* -------------------------------------------------------------------------- */

export function NavigationMenuHeader({
  links,
  className,
}: {
  links: NavItem[];
  className?: string;
}) {
  return (
    <nav className={clsx("z-1 relative flex-col justify-center lg:flex", className)}>
      <ul className="flex flex-1 items-center gap-0.5 px-4">
        {links.map((link) => (
          <li key={link._id} className="group relative">
            {link.sublinks.items.length > 0 ? (
              <div className="relative group">
                <button
                  className={$button({
                    className:
                      "inline-flex items-center gap-1 rounded-full pb-px pl-3 pr-2 tracking-tight hover:bg-[--surface-tertiary] dark:hover:bg-[--dark-surface-tertiary] lg:h-7",
                  })}
                >
                  {link.href ? (
                    <Link to={link.href}>{link._title}</Link>
                  ) : (
                    <span className="cursor-default">{link._title}</span>
                  )}
                  <ChevronDown className="size-4 text-[--text-tertiary] transition-transform duration-200 group-hover:rotate-180 dark:text-[--dark-text-tertiary]" />
                </button>
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <ul className="w-[clamp(180px,30vw,300px)] rounded-md border border-[--border] bg-[--surface-primary] p-0.5 shadow-lg dark:border-[--dark-border] dark:bg-[--dark-surface-primary]">
                    {link.sublinks.items.map((sublink) => (
                      <li key={sublink._id}>
                        <Link
                          className={$button({
                            className:
                              "flex w-full items-center gap-2 rounded-md px-3 py-1.5 hover:bg-[--surface-tertiary] dark:hover:bg-[--dark-surface-tertiary]",
                          })}
                          to={sublink.href}
                        >
                          {sublink._title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                className={$button({
                  className:
                    "inline-flex h-6 shrink-0 items-center justify-center gap-1 rounded-full px-3 pb-px tracking-tight hover:bg-[--surface-tertiary] dark:hover:bg-[--dark-surface-tertiary] lg:h-7",
                })}
                to={link.href ?? "#"}
              >
                {link._title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function DesktopMenu({ 
  navbar, 
  rightCtas,
  showLinksOnly,
  showCtasOnly
}: HeaderProps & { showLinksOnly?: boolean; showCtasOnly?: boolean }) {
  return (
    <>
      {(!showCtasOnly) && (
        <NavigationMenuHeader className="hidden lg:flex" links={navbar.items} />
      )}
      {(!showLinksOnly) && (
        <div className="hidden items-center justify-self-end gap-2 lg:flex">
          {rightCtas.items.map((cta) => {
            return (
              <ButtonLink key={cta._id} className="!px-3.5" href={cta.href} intent={cta.type}>
                {cta.icon}
                {cta.label}
              </ButtonLink>
            );
          })}
        </div>
      )}
    </>
  );
}

// #region mobile 📱
/* -------------------------------------------------------------------------- */
/*                                   Mobile                                   */
/* -------------------------------------------------------------------------- */

export function MobileMenu({ navbar, rightCtas }: HeaderProps) {
  const { handleToggle, isOn, handleOff } = useToggleState();

  return (
    <>
      <button
        aria-label="Toggle Menu"
        className="col-start-3 flex items-center justify-center justify-self-end rounded-sm border border-[--border] bg-[--surface-secondary] p-2 dark:border-[--dark-border] dark:bg-[--dark-surface-secondary] lg:hidden lg:h-7"
        onPointerDown={handleToggle}
      >
        {isOn ? <X className="size-4" /> : <Menu className="size-4" />}
      </button>
      <div className="block lg:hidden">
        {isOn ? (
          <div className="fixed left-0 top-[calc(var(--header-height)+1px)] z-10 h-auto w-full bg-[--surface-primary] dark:bg-[--dark-surface-primary]">
            <div className="flex flex-col gap-8 px-6 py-8">
              <nav className="flex flex-col gap-4">
                {navbar.items.map((link) =>
                  link.sublinks.items.length > 0 ? (
                    <ItemWithSublinks
                      key={link._id}
                      _id={link._id}
                      _title={link._title}
                      onClick={handleOff}
                      sublinks={link.sublinks.items}
                    />
                  ) : (
                    <Link
                      key={link._id}
                      className="flex items-center gap-2 rounded-sm px-3 py-1.5"
                      to={link.href ?? "#"}
                      onClick={handleOff}
                    >
                      {link._title}
                    </Link>
                  ),
                )}
              </nav>
              <div className="flex items-center justify-start gap-2">
                {rightCtas.items.map((cta) => {
                  return (
                    <ButtonLink key={cta._id} href={cta.href} intent={cta.type} size="lg">
                      {cta.icon}
                      {cta.label}
                    </ButtonLink>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

function ItemWithSublinks({
  _id,
  _title,
  sublinks,
  onClick,
}: {
  _id: string;
  _title: string;
  sublinks: SublinkItem[];
  onClick: () => void;
}) {
  const { isOn, handleOff, handleOn } = useToggleState(false);
  const hasRendered = useHasRendered();
  const listRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    if (!hasRendered) return;

    if (isOn) {
      listRef.current?.animate([{ height: `${(40 * sublinks.length).toString()}px` }], {
        duration: 200,
        easing: "ease-in-out",
        fill: "forwards",
      });
    } else {
      listRef.current?.animate([{ height: "0px" }], {
        duration: 200,
        easing: "ease-in-out",
        fill: "forwards",
      });
    }
  }, [isOn, hasRendered, sublinks]);

  const handleToggle = () => {
    if (isOn) {
      handleOff();
    } else {
      handleOn();
    }
  };

  return (
    <div key={_id}>
      <button className="flex items-center gap-2 px-3 py-1.5" onClick={handleToggle}>
        {_title}
        <ChevronDown
          className={clsx(
            "h-min transform text-[--text-tertiary] transition-transform dark:text-[--dark-text-tertiary]",
            isOn ? "rotate-180" : "rotate-0",
          )}
        />
      </button>
      <ul
        ref={listRef}
        className={clsx(
          "flex h-0 origin-top transform-gpu flex-col gap-2 overflow-hidden pl-4 transition-transform",
        )}
      >
        {sublinks.map((sublink) => {
          const { href, _title } = sublink;

          return (
            <li key={sublink._id}>
              <Link
                className="flex items-center gap-2 rounded-md px-3 py-1.5 text-[--text-tertiary] dark:text-[--dark-text-tertiary]"
                to={href}
                onClick={onClick}
              >
                {_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
