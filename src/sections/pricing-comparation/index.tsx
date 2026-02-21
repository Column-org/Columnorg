import { CheckCircle, CircleHelp } from "lucide-react";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";

import { Heading } from "@/common/heading";
import { Section } from "@/common/section-wrapper";
import { ButtonLink } from "@/common/button";
import { SimpleTooltip } from "@/common/tooltip";

import { MobilePricingComparison } from "./mobile-pricing-comparison";

export interface PlanProps {
  _id: string;
  _title: string;
  price: string;
  isMostPopular: boolean;
}

export interface FeatureValueProps {
  _id: string;
  plan: { _id: string };
  value: {
    __typename: "BooleanComponent" | "CustomTextComponent";
    boolean?: boolean;
    text?: string;
  };
}

export interface PricingTableProps {
  heading: {
    title: string;
    subtitle?: string;
    tag?: string;
    align?: "center" | "left" | "right";
  };
  categories: {
    items: {
      _id: string;
      _title: string;
      features: {
        items: {
          _id: string;
          _title: string;
          tooltip?: string;
          values: {
            items: FeatureValueProps[];
          };
        }[];
      };
    }[];
  };
}

export function PricingTable(props: PricingTableProps) {
  const { heading, categories } = props;
  const plans = extractPlans(categories);

  return (
    <Section className="xl:max-w-screen-xl" id="pricing">
      <Heading {...heading}>
        {heading.title}
      </Heading>
      <table className="hidden w-full table-fixed lg:table">
        <thead className="sticky top-[var(--header-height)] bg-[--surface-primary]">
          <tr>
            <PlanHeader plan={null} />
            {plans.map((plan) => (
              <PlanHeader key={plan._id} plan={plan} />
            ))}
          </tr>
        </thead>
        <tbody>
          {categories.items.map((category, i) => (
            <React.Fragment key={category._id}>
              <CategoryHeader category={category} className={clsx(i === 0 && "py-4")} />
              {category.features.items.map((feature) => (
                <tr
                  key={feature._id}
                  className="border-b border-[--border-70]"
                >
                  <FeatureTitle {...feature} />
                  {feature.values.items.map((v) => (
                    <FeatureValue key={v.plan._id} value={v} />
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <MobilePricingComparison {...{ ...props, plans }} />
    </Section>
  );
}

const $tableCell = cva("min-h-16 px-3 text-base flex items-center gap-1.5 font-normal", {
  variants: {
    align: {
      start: "text-start justify-start",
      center: "text-center justify-center",
      end: "text-end justify-end",
    },
    type: {
      default: "text-[--text-secondary] dark:text-[--dark-text-secondary]",
      primary: "text-primary dark:text-dark-primary",
    },
  },
  defaultVariants: {
    align: "center",
    type: "default",
  },
});

interface TableCellProps<T extends React.ElementType> {
  as?: T;
  className?: string;
  children: React.ReactNode;
}

function TableCell<T extends React.ElementType = "td">({
  as,
  className,
  children,
  align,
  type,
  ...props
}: TableCellProps<T> &
  React.ComponentPropsWithoutRef<T> &
  VariantProps<typeof $tableCell>): React.JSX.Element {
  const Component = as ?? "div";

  return (
    <Component className={$tableCell({ class: className, type, align })} {...props}>
      {children}
    </Component>
  );
}

function FeatureTitle(
  feature: PricingTableProps["categories"]["items"][0]["features"]["items"][0],
) {
  return (
    <th className="w-auto">
      <TableCell align="start" as="div" type="primary">
        <p>{feature._title}</p>
        {feature.tooltip ? (
          <SimpleTooltip content={feature.tooltip}>
            <CircleHelp className="size-4 shrink-0 text-[--text-tertiary]" />
          </SimpleTooltip>
        ) : null}
      </TableCell>
    </th>
  );
}

function CategoryHeader({
  category,
  className,
}: {
  category: PricingTableProps["categories"]["items"][0];
  className?: string;
}) {
  return (
    <tr>
      <th className="w-auto">
        <TableCell
          align="start"
          as="div"
          className={clsx("px-3 pb-2 pt-10", className)}
          type="primary"
        >
          <p className="text-lg font-medium">{category._title}</p>
        </TableCell>
      </th>
      {Array.from(category.features.items[0]?.values.items ?? []).map((v) => (
        <th key={`${category._title}${v._id}`} className="w-[1fr]" />
      ))}
    </tr>
  );
}

function PlanHeader({ plan }: { plan: PlanProps | null }) {
  return plan ? (
    <th className="w-[1fr] pb-2 pt-6">
      <span className="flex flex-col items-center gap-3 font-normal">
        <div className="flex flex-col items-center gap-0.5">
          <p className="text-base text-[--text-secondary] md:text-base">
            {plan._title}
          </p>
          <p className="text-lg font-medium">{plan.price}</p>
        </div>
        <ButtonLink href="#" intent={plan.isMostPopular ? "primary" : "secondary"}>
          Get started
        </ButtonLink>
      </span>
    </th>
  ) : (
    <th className="w-auto" />
  );
}

function FeatureValue({ value }: { value?: FeatureValueProps }) {
  return (
    <td className="w-[1fr]">
      <TableCell>
        {value ? (
          value.value?.__typename === "BooleanComponent" ? (
            value.value.boolean ? (
              <CheckCircle className="size-5 text-[--success]" />
            ) : (
              <span className="text-[--text-tertiary-50]">
                &mdash;
              </span>
            )
          ) : value.value?.__typename === "CustomTextComponent" ? (
            <p>{value.value.text}</p>
          ) : null
        ) : null}
      </TableCell>
    </td>
  );
}

const extractPlans = (categories: PricingTableProps["categories"]) => {
  const plans = new Map<string, PlanProps>();

  categories.items.forEach((category) => {
    category.features.items.forEach((feature) => {
      feature.values.items.forEach((v: any) => {
        plans.set(v.plan._id, v.plan as PlanProps);
      });
    });
  });

  return Array.from(plans.values());
};
