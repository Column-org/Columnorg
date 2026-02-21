import clsx from "clsx";
import * as React from "react";
import { CustomTooltip } from "./tooltip";

type AuthorFragment = {
  _title: string;
  image: {
    url: string;
    alt?: string;
    width: number;
    height: number;
  };
};

type AvatarFragment = {
  url: string;
  alt?: string;
  className?: string;
};

export function Author({
  image,
  _title,
  ...props
}: AuthorFragment & Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt">) {
  return (
    <CustomTooltip content={_title}>
      <img
        alt={image.alt ?? `Avatar for ${_title}`}
        className="size-8 rounded-full border-2 border-[--surface-primary] object-cover transition-all dark:border-[--dark-surface-primary]"
        height={image.height}
        src={image.url}
        width={image.width}
        {...props}
      />
    </CustomTooltip>
  );
}

export function Avatar({
  className,
  alt,
  url,
  priority,
  ...props
}: AvatarFragment & Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & { priority?: boolean }) {
  return (
    <img
      alt={alt ?? "Avatar"}
      className={clsx(
        "size-7 shrink-0 rounded-full border-2 border-[--surface-primary] object-cover dark:border-[--dark-surface-primary]",
        className,
      )}
      height={28}
      src={url}
      width={28}
      {...props}
    />
  );
}
