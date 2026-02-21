import { Section } from "@/common/section-wrapper";
import { RichText, richTextClasses } from "@/components/rich-text";

export interface FreeformTextProps {
  body: { json: { content: any } } | string;
}

export function FreeformText(freeformText: FreeformTextProps) {
  const content = typeof freeformText.body === 'string' ? freeformText.body : freeformText.body.json.content;
  return (
    <Section>
      <div className={richTextClasses}>
        <RichText content={content} />
      </div>
    </Section>
  );
}
