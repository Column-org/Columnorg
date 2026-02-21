
import { Button } from "@/common/button";
import { Copy, Check } from "lucide-react";
import * as React from "react";

export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = React.useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Button unstyled className="relative -ml-2 p-2" onClick={onCopy}>
      <span className="sr-only">Copy</span>
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
    </Button>
  );
}
