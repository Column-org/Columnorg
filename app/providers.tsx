import { ThemeProvider } from "next-themes";
import { AppThemeProvider, AppTheme, DEFAULT_THEME } from "../context/theme-provider";
import { TooltipProvider } from "../common/tooltip";

export function Providers({ children, theme = DEFAULT_THEME }: { children: React.ReactNode; theme?: AppTheme }) {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="system">
      <AppThemeProvider theme={theme} />
      <TooltipProvider>{children}</TooltipProvider>
    </ThemeProvider>
  );
}
