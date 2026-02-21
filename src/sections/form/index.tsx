import { Section } from "@/common/section-wrapper";
import {
  FormLayout,
  RichTextFormWrapper,
  SettingsLogoLite,
} from "@/components/form-components";
import { Button } from "@/common/button";
import { ArrowRight } from "lucide-react";
import { LabeledInput, LabeledTextarea, LabeledWrapper } from "@/components/labeled-input";
import { Select } from "@/components/select";

export interface FormProps {
  title: string;
  subtitle?: {
    json: {
      content: any;
    };
  } | string;
  cta: {
    label: string;
    type: "primary" | "secondary" | "tertiary";
    icon?: React.ReactNode;
  };
  submissions: {
    ingestKey: string;
    schema: {
      id: string;
      type: string;
      name: string;
      label: string;
      required?: boolean;
      placeholder?: string;
      options?: string[];
    }[];
  };
  settingsLogoLite: SettingsLogoLite;
}

export function Form(props: FormProps) {
  return (
    <Section>
      <FormLayout
        {...props}
        subtitle={
          typeof props.subtitle === 'string' ? (
            <p>{props.subtitle}</p>
          ) : props.subtitle ? (
            <RichTextFormWrapper>{props.subtitle.json.content}</RichTextFormWrapper>
          ) : null
        }
        title={props.title}
      >
        <form
          className="flex flex-col gap-3"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            console.log("Form submission:", Object.fromEntries(formData));
            alert("Submitted successfully (Simulation)");
          }}
        >
          {props.submissions.schema.map((field) => {
            if (field.type === "textarea") {
              return (
                <LabeledTextarea key={field.id} rows={8} className="max-h-64 min-h-16" {...field as any} />
              );
            } else if (field.type === "select" || field.type === "radio") {
              return (
                <LabeledWrapper key={field.id} label={field.label} id={field.id}>
                  <Select id={field.id} name={field.name} required={field.required}>
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Select>
                </LabeledWrapper>
              );
            } else {
              return <LabeledInput key={field.id} {...field as any} />;
            }
          })}
          <div className="mt-3 flex items-center justify-between">
            <Button
              icon={props.cta.icon ?? <ArrowRight className="size-4" />}
              iconSide="right"
              intent={props.cta.type}
              type="submit"
            >
              {props.cta.label}
            </Button>
          </div>
        </form>
      </FormLayout>
    </Section>
  );
}
