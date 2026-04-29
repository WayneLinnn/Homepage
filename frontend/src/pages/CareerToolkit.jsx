import "./CareerToolkit.css";
import {
  aiOpsFramework,
  applicationCadence,
  learningRoadmap,
  linkedinAssets,
  monthlyPlan,
  resumeVariants,
  targetCities,
  targetIndustries,
  targetRoles,
} from "../data/careerData";

export default function CareerToolkit() {
  return (
    <section className="career-toolkit">
      <div className="container">
        <h2 className="section-heading">Career Toolkit</h2>
        <p className="toolkit-intro">
          This page turns my job-search plan into practical assets: positioning,
          resume focus, LinkedIn copy, target roles, a three-month plan, and an
          AI-operations framework I can reuse later if I start a small software
          or automation business.
        </p>

        <div className="toolkit-grid">
          <article className="toolkit-card">
            <h3>LinkedIn Positioning</h3>
            <p className="toolkit-label">Suggested headline</p>
            <p className="toolkit-highlight">{linkedinAssets.headline}</p>
            <p className="toolkit-label">About summary</p>
            {linkedinAssets.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <article className="toolkit-card">
            <h3>Resume Versions</h3>
            {resumeVariants.map((resume) => (
              <div key={resume.title} className="toolkit-block">
                <p className="toolkit-highlight">{resume.title}</p>
                <p>{resume.focus}</p>
                <ul>
                  {resume.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </article>

          <article className="toolkit-card">
            <h3>Target Roles</h3>
            <ul className="toolkit-chip-list">
              {targetRoles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
            <p className="toolkit-label">Priority cities</p>
            <ul className="toolkit-chip-list">
              {targetCities.map((city) => (
                <li key={city}>{city}</li>
              ))}
            </ul>
            <p className="toolkit-label">Priority industries</p>
            <ul>
              {targetIndustries.map((industry) => (
                <li key={industry}>{industry}</li>
              ))}
            </ul>
          </article>

          <article className="toolkit-card">
            <h3>Application Cadence</h3>
            <ul>
              {applicationCadence.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="toolkit-card">
            <h3>Learning Roadmap</h3>
            {learningRoadmap.map((phase) => (
              <div key={phase.phase} className="toolkit-block">
                <p className="toolkit-highlight">
                  {phase.phase}: {phase.title}
                </p>
                <ul className="toolkit-chip-list">
                  {phase.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </article>

          <article className="toolkit-card">
            <h3>Three-Month Execution Plan</h3>
            {monthlyPlan.map((month) => (
              <div key={month.month} className="toolkit-block">
                <p className="toolkit-highlight">{month.month}</p>
                <p>{month.goal}</p>
                <ul>
                  {month.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </article>

          <article className="toolkit-card toolkit-card-wide">
            <h3>AI Operating Model for a Small Company</h3>
            <p>
              I do not need a fully autonomous agent stack to run a business.
              The more practical operating model is human-led, AI-augmented
              execution with clear approval boundaries.
            </p>
            <p className="toolkit-label">Principles</p>
            <ul>
              {aiOpsFramework.principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="toolkit-label">Modules AI can support</p>
            <ul className="toolkit-chip-list">
              {aiOpsFramework.modules.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="toolkit-label">Control points</p>
            <ul>
              {aiOpsFramework.controlPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
