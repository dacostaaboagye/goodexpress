// Reusable Components

import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  brandName: string;
}

export const Logo = ({ brandName }: Readonly<LogoProps>) => (
  <div className="shrink-0">
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/logo.png"
        alt={brandName}
        width={160} // Adjust width as needed for your design
        height={40} // Adjust height as needed for your design
        priority // Consider adding priority for LCP images
      />
    </Link>
  </div>
);
