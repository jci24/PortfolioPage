"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const navigationItems = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "skills", label: "Expertise", href: "/#skills" },
  { id: "about", label: "About", href: "/#about" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (pathname !== "/") return;

    const updateHeader = () => {
      setScrolled(window.scrollY > 24);

      for (const item of [...navigationItems].reverse()) {
        const section = document.getElementById(item.id);
        if (section && window.scrollY >= section.offsetTop - 150) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, [pathname]);

  return (
    <header
      className={`premium-site-header${scrolled ? " premium-site-header-scrolled" : ""}`}
    >
      <nav aria-label="Primary" className="premium-site-nav">
        <Link
          aria-label="Jaime Castresana Iza, home"
          className="premium-site-brand"
          href="/#home"
          onClick={() => setMobileMenuOpen(false)}
        >
          JC
        </Link>

        <ul className="premium-site-links">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <Link
                aria-current={
                  pathname === "/" && activeSection === item.id
                    ? "page"
                    : undefined
                }
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="premium-site-actions">
          <div className="premium-site-status">
            <span aria-hidden="true" />
            Available
          </div>
          <ThemeToggle />
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
          className="premium-menu-toggle"
          onClick={() => setMobileMenuOpen((open) => !open)}
          type="button"
        >
          {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {mobileMenuOpen ? (
        <nav
          aria-label="Mobile"
          className="premium-mobile-menu"
          id="mobile-navigation"
        >
          {navigationItems.map((item) => (
            <Link
              aria-current={
                pathname === "/" && activeSection === item.id
                  ? "page"
                  : undefined
              }
              href={item.href}
              key={item.id}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{item.label}</span>
              <small>{String(navigationItems.indexOf(item) + 1).padStart(2, "0")}</small>
            </Link>
          ))}
          <Link
            className="premium-mobile-cv"
            href="/Jaime_Castresana_CV.pdf"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Download CV</span>
            <small>PDF</small>
          </Link>
          <div className="premium-mobile-theme">
            <span>Appearance</span>
            <ThemeToggle />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
