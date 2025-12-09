import { fragmentOn } from "basehub";
import { avatarFragment } from "../../../lib/basehub/fragments";

export const heroFragment = fragmentOn("HeroComponent", {
  _analyticsKey: true,
  customerSatisfactionBanner: {
    text: true,
    avatars: {
      items: {
        _id: true,
        avatar: avatarFragment,
      },
    },
  },
  title: true,
  subtitle: true,
  actions: {
    _id: true,
    href: true,
    label: true,
    type: true,
  },
});

export type HeroFragment = fragmentOn.infer<typeof heroFragment>;
