

import { useEffect } from "react";

export function ErrorSuppressor() {
  useEffect(() => {
    // 1. Suppress window errors and unhandled rejections
    const handleError = (event: ErrorEvent) => {
      if (
        event.message?.includes("Failed to connect to MetaMask") ||
        event.message?.includes("Cannot redefine property: ethereum") ||
        event.error?.message?.includes("Failed to connect to MetaMask") ||
        event.error?.message?.includes("Cannot redefine property: ethereum")
      ) {
        event.stopImmediatePropagation();
        event.preventDefault();
        return true;
      }
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      if (
        event.reason?.message?.includes("Failed to connect to MetaMask") ||
        event.reason?.message?.includes("Cannot redefine property: ethereum") ||
        (typeof event.reason === "string" && 
          (event.reason.includes("Failed to connect to MetaMask") || 
           event.reason.includes("Cannot redefine property: ethereum")))
      ) {
        event.stopImmediatePropagation();
        event.preventDefault();
        return true;
      }
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    // 2. Monkey-patch console.error to prevent Next.js overlay from picking up extension errors via console
    const originalConsoleError = console.error;
    console.error = (...args) => {
      const msg = args.join(" ");
      if (
        msg.includes("Failed to connect to MetaMask") ||
        msg.includes("Cannot redefine property: ethereum")
      ) {
        // Suppress this specific error log
        return;
      }
      originalConsoleError.apply(console, args);
    };

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
      console.error = originalConsoleError; // Restore original console.error
    };
  }, []);

  return null;
}
