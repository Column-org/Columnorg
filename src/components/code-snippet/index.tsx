import { CopyButton } from "./copy-button";
import { languagesIcons } from "./language";
import { File } from "lucide-react";
import s from "./code-snippet.module.css";

export interface CodeSnippetProps {
  _id: string;
  code: {
    code: string;
    language: string;
  };
  _title?: string;
}

export function CodeSnippet({ code, _title = "Untitled" }: CodeSnippetProps) {
  return (
    <div className={s["code-snippet"]}>
      <header className={s.header}>
        <div className="flex items-center">
          <span className="mr-2 size-4">
            {languagesIcons[code.language] ?? <File />}
          </span>
          <span className="text-[--text-secondary] dark:text-[--dark-text-secondary]">
            {_title}
          </span>
        </div>
        <CopyButton code={code.code} />
      </header>
      <div className={s.content}>
        <pre className="p-4 overflow-x-auto text-sm">
          <code>{code.code}</code>
        </pre>
      </div>
    </div>
  );
}
