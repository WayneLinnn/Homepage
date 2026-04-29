import { Link, useParams } from "react-router-dom";
import "./ProjectBlueprint.css";
import { projectBlueprints } from "../data/careerData";

export default function ProjectBlueprint() {
  const { slug } = useParams();
  const project = projectBlueprints.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="project-blueprint">
        <div className="container">
          <h2 className="section-heading">Project Blueprint</h2>
          <p className="project-blueprint-copy">
            This project was not found. Return to the{" "}
            <Link to="/career-toolkit">Career Toolkit</Link> or the{" "}
            <Link to="/">home page</Link>.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="project-blueprint">
      <div className="container">
        <h2 className="section-heading">{project.title}</h2>
        <p className="project-blueprint-kicker">{project.subtitle}</p>
        <p className="project-blueprint-copy">{project.summary}</p>
        <p className="project-blueprint-signal">{project.hiringSignal}</p>

        <div className="project-blueprint-grid">
          <article className="project-blueprint-card">
            <h3>Stack</h3>
            <ul className="project-blueprint-chip-list">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="project-blueprint-card">
            <h3>What this project proves</h3>
            <ul>
              {project.capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="project-blueprint-card project-blueprint-card-wide">
            <h3>Delivery checklist</h3>
            <ul>
              {project.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="project-blueprint-actions">
          <Link to="/career-toolkit" className="btn">
            View Career Toolkit
          </Link>
          <Link to="/" className="btn btn-outline">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
