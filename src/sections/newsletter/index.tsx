import * as React from "react";
import { Section } from "@/common/section-wrapper";
import { Input } from "@/common/input";

export interface NewsletterProps {
  newsletter: {
    title: string;
    description: string;
    submissions: {
      ingestKey: string;
      schema: {
        type: string;
        name: string;
        label: string;
        placeholder?: string;
        required?: boolean;
      }[];
    };
  };
}

export function Newsletter({ newsletter }: NewsletterProps) {
  const emailInput = newsletter.submissions.schema.find((field) => field.type === "email");

  return (
    <Section
      className="bg-[--surface-secondary] !py-10 dark:bg-[--dark-surface-secondary]"
      container="full"
    >
      <div className="container mx-auto flex flex-col gap-4 px-6 lg:flex-row lg:justify-between">
        <div className="flex flex-1 flex-col items-start gap-1">
          <h5 className="text-xl font-medium lg:text-2xl">{newsletter.title}</h5>
          <p className="text text-[--text-tertiary] dark:text-[--dark-text-tertiary] lg:text-lg">
            {newsletter.description}
          </p>
        </div>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const email = formData.get("email");
            console.log("Newsletter subscription:", email);
            alert("Subscribed successfully (Simulation)!");
          }}
        >
          {emailInput && (
            <Input 
              type="email"
              name="email"
              placeholder={emailInput.placeholder}
              required={emailInput.required}
            />
          )}
        </form>
      </div>
    </Section>
  );
}
