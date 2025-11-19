interface NavLinkProps {
  href: string;
  label: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, label }) => (
  <a href={href} className={`text-gray-700 hover:text-orange-700 transition`}>
    {label}
  </a>
);
