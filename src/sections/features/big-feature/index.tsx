import { Heading } from "@/common/heading";
import { Section } from "@/common/section-wrapper";
import { DarkLightImage } from "@/common/dark-light-image";

export interface BigFeatureProps {
  heading: {
    title: string;
    subtitle?: string;
    tag?: string;
    align?: "center" | "left" | "right";
  };
  featuresBigImageList: {
    items: {
      _title: string;
      description: string;
      icon: {
        alt?: string;
        url: string;
      };
    }[];
  };
  image: {
    light: { url: string; width: number; height: number; alt?: string };
    dark: { url: string; width: number; height: number; alt?: string };
  };
}

export function BigFeature({ featuresBigImageList, heading, image }: BigFeatureProps) {
  return (
    <Section container="default">
      <DarkLightImage
        {...image}
        className="block rounded-xl border border-[--border] md:order-3 md:w-full"
      />
      <Heading {...heading}>
        {heading.title}
      </Heading>
      <div className="flex w-full flex-col items-start gap-4 md:order-2 md:grid md:grid-cols-3 md:gap-16">
        {featuresBigImageList.items.map(({ _title, description, icon }) => (
          <article key={_title} className="flex flex-col gap-4">
            <figure className="flex size-9 items-center justify-center rounded-full border border-[--border] bg-[--surface-secondary] p-2">
              <img
                alt={icon.alt ?? _title}
                className=""
                height={18}
                src={icon.url}
                width={18}
              />
            </figure>
            <div className="flex flex-col items-start gap-1">
              <h5 className="text-lg font-medium">{_title}</h5>
              <p className="text-[--text-tertiary]">
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
