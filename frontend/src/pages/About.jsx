import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-heading">
          <span className="section-num">01.</span> About
        </h2>
        <div className="about-content">
          <p>
            I am a PR-based engineer in New South Wales, Australia, targeting
            backend and backend-leaning full-stack roles. My strongest delivery
            experience is in Java and Spring Boot, API design, business
            workflows, and production-focused implementation.
          </p>
          <p>
            I also have academic and applied AI experience across weakly
            supervised learning, legal-tech workflows, and model-enabled product
            ideas. My current direction is to stay software-first while growing
            practical AI product and deployment capability.
          </p>
          <h3 className="about-skills-title">Skills</h3>
          <ul className="about-skills">
            <li>
              <strong>Backend:</strong> Java, Spring Boot, REST APIs, Maven,
              Hibernate, SQL
            </li>
            <li>
              <strong>Frontend:</strong> React, TypeScript, JavaScript, HTML,
              CSS
            </li>
            <li>
              <strong>AI / Data:</strong> Python, PyTorch, TensorFlow, RAG
              workflows, Hadoop, GCP
            </li>
            <li>
              <strong>Cloud / Delivery:</strong> Docker, AWS-ready deployment
              workflow, Git, product documentation
            </li>
            <li>
              <strong>Languages:</strong> English (fluent), Mandarin (native)
            </li>
            <li>
              <strong>Other:</strong> PR in Australia, open to relocation,
              Australia Driver's Licence
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
