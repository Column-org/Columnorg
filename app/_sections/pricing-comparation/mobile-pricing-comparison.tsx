"use client";
import clsx from "clsx";
import * as React from "react";
import { ChevronDown, Check, CircleHelp, ChevronsUpDown } from "lucide-react";
import { SimpleTooltip } from "../../../common/tooltip";
import { type PlanFragment, type PricingTableProps } from ".";

export function MobilePricingComparison({
  categories,
  plans,
}: Pick<PricingTableProps, "categories"> & {
  plans: PlanFragment[];
}) {
  const [activePlan, setActivePlan] = React.useState<string>(plans[0]?._id ?? "");
  const [isSelectOpen, setIsSelectOpen] = React.useState(false);
  const [openCategories, setOpenCategories] = React.useState<string[]>([
    categories.items[0]?._id ?? "",
  ]);

  const selectedPlan = React.useMemo(
    () => plans.find((plan) => plan._id === activePlan),
    [activePlan, plans],
  );

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <div className="relative flex flex-col self-stretch lg:hidden">
      <div className="relative mb-4">
        <button
          onClick={() => setIsSelectOpen(!isSelectOpen)}
          className={clsx(
            "relative flex w-full items-center justify-between rounded-md px-4 py-2 pr-10 text-[--text-secondary] dark:text-[--dark-text-secondary]",
            "border border-[--border] bg-[--surface-secondary]",
            "dark:border-[--dark-border] dark:bg-[--dark-surface-secondary]",
          )}
        >
          <span className="flex items-center gap-2">
            {selectedPlan?._title ?? "Select a plan"}
            <span className="ml-2 font-medium text-[--text-primary] dark:text-[--dark-text-primary]">
              {selectedPlan?.price}
            </span>
          </span>
          <ChevronsUpDown className="absolute right-2 top-1/2 size-5 -translate-y-1/2 opacity-50" />
        </button>

        {isSelectOpen && (
          <div className="absolute z-[100] mt-1 w-full overflow-hidden rounded-md border border-[--border] bg-[--surface-secondary] shadow-lg dark:border-[--dark-border] dark:bg-[--dark-surface-secondary]">
            <div className="flex flex-col gap-0.5 p-1">
              {plans.map((plan) => (
                <button
                  key={plan._id}
                  onClick={() => {
                    setActivePlan(plan._id);
                    setIsSelectOpen(false);
                  }}
                  className={clsx(
                    "group relative flex w-full items-center justify-between rounded-sm px-4 py-2 text-start text-[--text-secondary] dark:text-[--dark-text-secondary]",
                    "hover:bg-[--surface-tertiary] dark:hover:bg-[--dark-surface-tertiary]",
                    {
                      "bg-[--surface-tertiary] text-[--text-primary] dark:bg-[--dark-surface-tertiary] dark:text-[--dark-text-primary]":
                        activePlan === plan._id,
                    },
                  )}
                >
                  <span className="flex-1">{plan._title}</span>
                  <div className="flex items-center gap-3">
                    <span>{plan.price}</span>
                    <div className="flex size-4 items-center justify-center">
                      {activePlan === plan._id && <Check className="size-4" />}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex w-full flex-col bg-[--surface-primary] dark:bg-[--dark-surface-primary]">
                {categories.items.map((category: any) => {
                  const isOpen = openCategories.includes(category._id);
                  return (
                    <div
                      key={category._id}
                      className="w-full border-b border-[--border] last:border-0 dark:border-[--dark-border]"
                    >
                      <button
                        onClick={() => toggleCategory(category._id)}
                        className="flex w-full items-center justify-between px-3 py-6"
                      >
                        <p className="flex-1 text-start font-medium">{category._title}</p>
                        <ChevronDown
                          className={clsx("size-5 transition-transform duration-200", {
                            "rotate-180": isOpen,
                          })}
                        />
                      </button>

                      <div
                        className={clsx(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0",
                        )}
                      >
                        <table className="w-full">
                          <tbody className="grid grid-cols-[min-content_auto] gap-x-6">
                            {category.features.items.map((feature: any) => (
                              <tr
                                key={feature._id}
                                className="col-span-2 grid grid-cols-subgrid place-content-end justify-start border-b border-[--border-70] px-3 py-3.5 dark:border-[--dark-border-70]"
                              >
                                <th className="place-self-start flex w-auto items-center gap-1 text-nowrap text-sm font-normal">
                                  <p>{feature._title}</p>
                                  {feature.tooltip ? (
                                    <SimpleTooltip content={feature.tooltip}>
                                      <span className="ml-1 text-[--text-tertiary] dark:text-[--dark-text-tertiary]">
                                        <CircleHelp className="size-4" />
                                      </span>
                                    </SimpleTooltip>
                                  ) : null}
                                </th>
                                <FeatureValue activePlan={activePlan} feature={feature} />
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                })}
      </div>
    </div>
  );
}

function FeatureValue({
  feature,
  activePlan,
}: {
  feature: any;
  activePlan: string;
}) {
  const value = feature.values.items.find((value: any) => value.plan._id === activePlan);

  if (!value) return null;

  return (
    <td className="flex flex-1 items-center justify-end text-sm font-normal text-[--text-secondary] dark:text-[--dark-text-secondary]">
      {value.value?.__typename === "BooleanComponent" ? (
        value.value.boolean ? (
          <span className="flex items-center justify-center rounded-full bg-[rgba(var(--success),0.1)] p-1.5">
            <Check className="size-5 text-[--success]" />
          </span>
        ) : (
          <span className="text-[--text-tertiary-50] dark:text-[--dark-text-tertiary-50]">
            &mdash;
          </span>
        )
      ) : value.value?.__typename === "CustomTextComponent" ? (
        <span className="text-right text-[--text-secondary] dark:text-[--dark-text-secondary]">
          {value.value.text}
        </span>
      ) : (
        <span className="text-[--text-secondary] dark:text-[--dark-text-secondary]">
          {String(value.value)}
        </span>
      )}
    </td>
  );
}
