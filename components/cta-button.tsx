import { NavLink } from "@/types/nav-link";
import { Button } from "./ui/button";

export const CTAButton: React.FC<NavLink> = ({ href, label }) => (
  <Button asChild size={"lg"}>
    <a href={href} className="w-ful">
      {label}
    </a>
  </Button>
);
