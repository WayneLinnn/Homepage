import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Layout.css";
import { positionSummary } from "../data/careerData";

const navItems = [
  { hash: "about", label: "About" },
  { hash: "experience", label: "Experience" },
  { hash: "projects", label: "Projects" },
  { hash: "contact", label: "Contact" },
];

export default function Layout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    if (!isHome) return;
    const ids = navItems.map((n) => n.hash);
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter(
          (e) => e.isIntersecting && ids.includes(e.target.id),
        );
        if (intersecting.length === 0) return;
        const topmost = intersecting.reduce((a, b) =>
          a.target.getBoundingClientRect().top <
          b.target.getBoundingClientRect().top
            ? a
            : b,
        );
        setActiveSection(topmost.target.id);
      },
      { root: null, rootMargin: "-20% 0px -55% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-inner">
          <header className="sidebar-header">
            <p className="sidebar-kicker">{positionSummary.kicker}</p>
            <h1 className="sidebar-name">{positionSummary.name}.</h1>
            <p className="sidebar-title">{positionSummary.title}</p>
            <p className="sidebar-tagline">{positionSummary.tagline}</p>
          </header>

          <nav className="sidebar-nav">
            {navItems.map(({ hash, label }) => {
              const isActive = isHome && activeSection === hash;
              const linkContent = (
                <>
                  <span className="sidebar-nav-line" aria-hidden="true" />
                  <span className="sidebar-nav-text">
                    {label.toUpperCase()}
                  </span>
                </>
              );
              return isHome ? (
                <a
                  key={hash}
                  href={`#${hash}`}
                  className={`sidebar-nav-link ${isActive ? "active" : ""}`}
                >
                  {linkContent}
                </a>
              ) : (
                <Link key={hash} to={`/#${hash}`} className="sidebar-nav-link">
                  {linkContent}
                </Link>
              );
            })}
          </nav>

          <div className="sidebar-footer">
            <a
              href="/full-stack-ai-developer-feng-lin-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-resume"
            >
              View Résumé
            </a>
            <div className="sidebar-utility-links">
              <Link to="/career-toolkit">Career Toolkit</Link>
              <Link to="/projects/customer-ops-portal">Project Blueprint</Link>
            </div>
            <div className="sidebar-social">
              <a
                href="https://github.com/waynelin"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/waynelin"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:waynelinEU@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </aside>

      <div className="content">
        <main className="content-main">{children}</main>
        <footer className="content-footer">
          <p>
            Built with React + Node.js. © {new Date().getFullYear()} Wayne Lin.
          </p>
        </footer>
      </div>
    </div>
  );
}
