import { PlusCircle, MinusCircle } from "lucide-react";
import * as React from "react";
import clsx from "clsx";

export type FaqItem = {
  _title: string;
  answer: string;
};

export function Accordion({
  items,
}: {
  items: FaqItem[];
}) {
  const [activeItems, setActiveItems] = React.useState<string[]>([]);

  const toggleItem = (title: string) => {
    setActiveItems((prev) =>
      prev.includes(title) ? prev.filter((i) => i !== title) : [...prev, title]
    );
  };

  return (
    <div className="flex w-full flex-col items-stretch gap-2 lg:gap-8">
      {items.map((item) => (
        <AccordionItem
          key={item._title}
          {...item}
          isActive={activeItems.includes(item._title)}
          onToggle={() => toggleItem(item._title)}
        />
      ))}
    </div>
  );
}

function AccordionItem({
  _title,
  answer,
  isActive,
  onToggle,
}: FaqItem & { isActive: boolean; onToggle: () => void }) {
  return (
    <div className="flex flex-col border-b border-[--border] last:border-0">
      <button
        onClick={onToggle}
        className="outline-none focus-visible:ring-2 flex w-full items-start gap-3 rounded-md py-4 text-start text-lg font-medium leading-relaxed tracking-tighter ring-[--accent-500] ring-offset-2"
      >
        {isActive ? (
          <MinusCircle className="my-1.5 size-4 shrink-0 transition-transform duration-200" />
        ) : (
          <PlusCircle className="my-1.5 size-4 shrink-0 transition-transform duration-200" />
        )}
        <span>{_title}</span>
      </button>
      <div
        className={clsx(
          "overflow-hidden transition-all duration-300 ease-in-out pl-7 leading-relaxed tracking-tight text-[--text-tertiary]",
          isActive ? "max-h-[1000px] pb-4 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="pt-2">{answer}</div>
      </div>
    </div>
  );
}
