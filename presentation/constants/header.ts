import { NavLink } from "@/types/nav-link"
import { NAVS } from "./navs"
import { APP_NAME } from "./app-config"

// Constants
export const BRAND_NAME = APP_NAME
export const PRIMARY_COLOR = "orange-600"
export const PRIMARY_HOVER = "orange-700"

export const NAV_LINKS: NavLink[] = [
    { href: `#${NAVS.about}`, label: "About" },
    { href: `#${NAVS.services}`, label: "Services" },
    { href: `#${NAVS.howItWorks}`, label: "How It Works" },
    { href: `#${NAVS.contact}`, label: "Contact" }
]

export const CTA_BUTTON: NavLink = {
    href: "#contact",
    label: "Book Now"
}