import { NavLink } from "@/types/nav-link";
import Link from "next/link";

export const MobileCTAButton: React.FC<NavLink & { onClick: () => void }> = ({
  href,
  label,
  onClick,
}) => (
  <Link
    href={href}
    className={`block px-3 py-2 bg-orange-600 text-white rounded hover:bg-orange-700`}
    onClick={onClick}
  >
    {label}
  </Link>
);
