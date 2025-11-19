"use client";

import {
  BRAND_NAME,
  CTA_BUTTON,
  NAV_LINKS,
  PRIMARY_COLOR,
} from "@/presentation/constants/header";
import { Menu, X } from "lucide-react";
import { JSX, useState } from "react";
import { CTAButton } from "./cta-button";
import { Logo } from "./logo";
import { NavLink } from "./nav-link";
import { MobileNavLink } from "./mobile-nav-link";
import { MobileCTAButton } from "./mobile-cta-button";

export default function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => setIsOpen(!isOpen);
  const closeMenu = (): void => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo brandName={BRAND_NAME} />

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <CTAButton href={CTA_BUTTON.href} label={CTA_BUTTON.label} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-primary"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close main menu" : "Open main menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden pb-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <MobileNavLink
                key={link.href}
                href={link.href}
                label={link.label}
                onClick={closeMenu}
              />
            ))}
            <MobileCTAButton
              href={CTA_BUTTON.href}
              label={CTA_BUTTON.label}
              onClick={closeMenu}
            />
          </div>
        )}
      </nav>
    </header>
  );
}
