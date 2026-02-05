import "./Resume.css";

export default function Resume() {
  return (
    <section className="resume">
      <div className="container">
        <h2 className="section-heading">Résumé</h2>
        <p className="resume-intro">
          View or download my full résumé as PDF (
          <a href="/Resume2026.pdf" target="_blank" rel="noopener noreferrer">
            Resume2026.pdf
          </a>
          ). Place the file at <code>frontend/public/Resume2026.pdf</code> so it
          is served at this link.
        </p>
        <div className="resume-actions">
          <a
            href="/Resume2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View PDF
          </a>
          <a
            href="/Resume2026.pdf"
            download="Resume2026.pdf"
            className="btn btn-outline"
          >
            Download PDF
          </a>
        </div>
        <p className="resume-note">
          If you haven’t added the PDF yet, save your résumé as{" "}
          <code>public/Resume2026.pdf</code> in the frontend folder.
        </p>
      </div>
    </section>
  );
}
