import home from "@/public/assets/images/homes.png";
import invite from "@/public/assets/images/invites.png";
import profile from "@/public/assets/images/profiles.png";
import navCenter from "@/public/assets/images/nav_center.png";

import { ROUTES } from "./routes";

/**
 *  LEFT NAVIGATION FOOTER LABELS
 */
export const LEFT_NAV = [
  {
    label: "Home",
    href: ROUTES.HOME,
    icon: home,
  },
  {
    label: "Invite",
    href: ROUTES.INVITE,
    icon: invite,
  },
];

/**
 *  RIGHT NAVIGATION FOOTER LABELS
 */
export const RIGHT_NAV = [
  {
    label: "Wallet",
    href: ROUTES.WALLET,
    icon: home,
  },
  {
    label: "Profile",
    href: ROUTES.PROFILE,
    icon: profile,
  },
];

/**
 * CENTER NAVIGATION FOOTER LABEL
 */
export const CENTER_NAV = {
  label: "E-Casino",
  href: ROUTES.E_CASINO,
  icon: navCenter,
};