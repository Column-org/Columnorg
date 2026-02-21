import { Link, type LinkProps } from "react-router-dom";

export interface SettingsLogoLite {
  logoLite: {
    url: string;
    width: number;
    height: number;
  };
}

export function FormLayout({
  children,
  title,
  subtitle,
  settingsLogoLite,
}: {
  title: string;
  subtitle: React.ReactNode;
  children: React.ReactNode;
  settingsLogoLite: SettingsLogoLite;
}) {
  const logoLite = settingsLogoLite.logoLite;

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-5 rounded-xl border border-[--surface-secondary] bg-[--surface-primary] p-5 shadow-md dark:border-[--dark-border] dark:bg-[--dark-surface-secondary] dark:shadow-none">
      <header className="flex flex-col gap-3">
        <img
          alt="Logo"
          className="size-8 self-start"
          height={logoLite.height}
          src={logoLite.url}
          width={logoLite.width}
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-medium">{title}</h1>
          <div className="text-sm text-[--text-secondary] dark:text-[--dark-text-secondary]">
            {subtitle}
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}

export function RichTextFormWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-sm dark:prose-invert">
      {children}
    </div>
  );
}

export function CustomAnchor({
  children,
  href,
  ...props
}: React.AllHTMLAttributes<HTMLAnchorElement> & Partial<LinkProps>) {
  return (
    <Link className="text-[--accent-500] hover:underline" to={href || '#'} {...(props as any)}>
      {children}
    </Link>
  );
}
