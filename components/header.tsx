"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/data/profile";

const navigationItems = [
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "CV", href: "/Jaime_Castresana_CV.pdf" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link
          aria-label="Jaime Castresana Iza, home"
          className="site-brand"
          href="/"
          onClick={() => setMobileMenuOpen(false)}
        >
          <strong>Jaime Castresana Iza</strong>
        </Link>

        <nav aria-label="Primary" className="site-nav">
          <div className="site-nav-list">
            {navigationItems.map((item) => (
              <Link className="site-nav-link" href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
            <Link
              className="site-nav-link"
              href={profile.bookingUrl}
            >
              Book a call
            </Link>
            <ThemeToggle />
            <button
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
              className="site-menu-toggle"
              onClick={() => setMobileMenuOpen((open) => !open)}
              type="button"
            >
              {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </div>

      {mobileMenuOpen ? (
        <nav
          aria-label="Mobile"
          className="site-mobile-menu"
          id="mobile-navigation"
        >
          {navigationItems.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={profile.bookingUrl}
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a call
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
