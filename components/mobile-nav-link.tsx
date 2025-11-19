import { NavLink } from "@/types/nav-link";
import Link from "next/link";

export const MobileNavLink: React.FC<NavLink & { onClick: () => void }> = ({
  href,
  label,
  onClick,
}) => (
  <Link
    href={href}
    className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
    onClick={onClick}
  >
    {label}
  </Link>
);
