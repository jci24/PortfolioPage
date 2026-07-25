import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="premium-footer">
      <div className="premium-footer-inner">
        <div>
          <Link className="premium-footer-brand" href="/">
            JC
          </Link>
          <p>Audio software · DSP tools · AI-assisted engineering</p>
        </div>
        <nav aria-label="Footer">
          <a href="https://github.com/jci24" rel="noreferrer" target="_blank">
            GitHub <ArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/jaimecastresanaiza/"
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn <ArrowUpRight aria-hidden="true" />
          </a>
          <a href="mailto:jaime.castresana@gmail.com">
            Email <ArrowUpRight aria-hidden="true" />
          </a>
        </nav>
        <div className="premium-footer-meta">
          <span>Made in Copenhagen</span>
          <span>© 2026 Jaime Castresana Iza</span>
        </div>
      </div>
    </footer>
  );
}
