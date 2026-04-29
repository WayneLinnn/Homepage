import { Link } from "react-router-dom";
import "./Resume.css";

export default function Resume() {
  const resumePath = "/full-stack-ai-developer-feng-lin-2026.pdf";
  const resumeFileName = "full-stack-ai-developer-feng-lin-2026.pdf";

  return (
    <section className="resume">
      <div className="container">
        <h2 className="section-heading">Résumé</h2>
        <p className="resume-intro">
          View or download my full résumé as PDF (
          <a href={resumePath} target="_blank" rel="noopener noreferrer">
            Full Stack & AI Developer Resume
          </a>
          ). The file is served from{" "}
          <code>frontend/public/{resumeFileName}</code>.
        </p>
        <div className="resume-actions">
          <a
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View PDF
          </a>
          <a
            href={resumePath}
            download={resumeFileName}
            className="btn btn-outline"
          >
            Download PDF
          </a>
        </div>
        <p className="resume-note">
          If you update the PDF later, replace{" "}
          <code>public/{resumeFileName}</code> in the frontend folder.
        </p>
        <p className="resume-note">
          I also keep a <Link to="/career-toolkit">Career Toolkit</Link> page
          with role targeting, resume positioning, and a three-month execution
          plan for software and AI roles in Australia.
        </p>
      </div>
    </section>
  );
}
