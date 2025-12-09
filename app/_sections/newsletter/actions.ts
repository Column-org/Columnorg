"use server";

import { parseFormData, sendEvent } from "basehub/events";
import type { NewsletterFragment } from "./index";

export async function submitNewsletter(
  ingestKey: string,
  schema: NewsletterFragment["submissions"]["schema"],
  data: FormData
) {
  const parsedData = parseFormData(ingestKey as any, schema, data);
  if (!parsedData.success) {
    throw new Error(JSON.stringify(parsedData.errors));
  }
  await sendEvent(ingestKey as any, parsedData.data);
}
