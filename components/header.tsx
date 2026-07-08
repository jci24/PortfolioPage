import Link from "next/link";

const navigationItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
  { label: "Assistant", href: "/chat" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="site-brand">
          <span className="eyebrow">
            Jaime Castresana Iza
          </span>
          <p className="site-tagline">
            Software Engineer | Audio, DSP Tools & AI Product Development
          </p>
        </div>

        <nav aria-label="Primary" className="site-nav">
          <div className="site-nav-list">
            {navigationItems.map((item) => (
              <Link className="site-nav-link" href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
