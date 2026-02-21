import { Heading } from "@/common/heading";
import { Section } from "@/common/section-wrapper";
import clsx from "clsx";
import { DarkLightImage } from "@/common/dark-light-image";
import { TrackedButtonLink } from "@/components/tracked-button";
import s from "./hero.module.css";

export interface FeatureHeroProps {
  heading: {
    title: string;
    subtitle?: string;
    tag?: string;
    align?: "center" | "left" | "right";
  };
  heroLayout: string;
  image: {
    light: { url: string; width: number; height: number; alt?: string };
    dark: { url: string; width: number; height: number; alt?: string };
  };
  actions: {
    _id: string;
    href: string;
    label: string;
    type: "primary" | "secondary" | "tertiary";
  }[];
  eventsKey?: string;
}

export default function FeatureHero({
  heading,
  heroLayout,
  image,
  actions,
  eventsKey,
}: FeatureHeroProps) {
  switch (heroLayout) {
    case "Image bottom": {
      return (
        <Section>
          <div className="flex flex-col gap-6">
            <Heading {...heading}>
              {heading.title}
            </Heading>
            <div className="flex justify-center gap-3">
              {actions?.map((action) => (
                <TrackedButtonLink
                  key={action._id}
                  analyticsKey={eventsKey}
                  href={action.href}
                  intent={action.type}
                  name="cta_click"
                  size="lg"
                >
                  {action.label}
                </TrackedButtonLink>
              ))}
            </div>
          </div>
          <DarkLightImage
            className="block rounded-lg border border-[--border]"
            {...image}
          />
        </Section>
      );
    }
    case "Image Right": {
      return (
        <Section>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
            <div className="flex flex-1 flex-col gap-6 lg:pr-16">
              <Heading {...heading} align="left">
                {heading.title}
              </Heading>
              <div className="flex justify-start gap-3">
                {actions?.map((action) => (
                  <TrackedButtonLink
                    key={action._id}
                    analyticsKey={eventsKey}
                    href={action.href}
                    intent={action.type}
                    name="cta_click"
                    size="lg"
                  >
                    {action.label}
                  </TrackedButtonLink>
                ))}
              </div>
            </div>
            <DarkLightImage
              className="block flex-1 rounded-lg border border-[--border] lg:w-1/2"
              {...image}
            />
          </div>
        </Section>
      );
    }
    case "full image": {
      return (
        <>
          <DarkLightImage
            {...image}
            className="block max-h-[720px] w-full border-y border-t-0 border-[--border] object-cover"
          />
          <Section>
            <div className="flex items-center justify-between self-stretch">
              <Heading {...heading} align="left">
                {heading.title}
              </Heading>
              {actions && actions.length > 0 ? (
                <div className="flex gap-3">
                  {actions.map((action) => (
                    <TrackedButtonLink
                      key={action._id}
                      analyticsKey={eventsKey}
                      href={action.href}
                      intent={action.type}
                      name="cta_click"
                      size="lg"
                    >
                      {action.label}
                    </TrackedButtonLink>
                  ))}
                </div>
              ) : null}
            </div>
          </Section>
        </>
      );
    }
    case "gradient": {
      return (
        <Section>
          <div className="z-10 flex flex-col items-center gap-8">
            <img
              alt="Logo"
              className="size-20"
              src="/Column.png"
            />
            <Heading {...heading}>
              {heading.title}
            </Heading>
            <div className="flex gap-3">
              {actions
                ? actions.map((action) => (
                    <TrackedButtonLink
                      key={action._id}
                      analyticsKey={eventsKey}
                      href={action.href}
                      intent={action.type}
                      name="cta_click"
                      size="lg"
                    >
                      {action.label}
                    </TrackedButtonLink>
                  ))
                : null}
            </div>
          </div>
          {/* Gradient */}
          <div
            className={clsx(
              "absolute -top-1/2 left-1/2 z-0 h-[400px] w-[60vw] -translate-x-1/2 scale-150 rounded-[50%]",
              s.gradient,
            )}
          />
        </Section>
      );
    }
    default: {
      return null;
    }
  }
}
