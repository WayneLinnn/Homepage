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
            I'm Wayne Lin, based in New South Wales, Australia. I focus on
            backend systems, AI applications, and legal-tech. I've built a law
            logic solution with Coze at a law firm, delivered e-commerce backend
            with Java/Spring Boot at Wipro, and researched weakly supervised
            learning and medical data at the University of Queensland, with a
            publication on pre-training in medical data.
          </p>
          <p>
            I'm open to relocation and looking for roles where I can combine
            backend engineering with AI or legal-tech.
          </p>
          <h3 className="about-skills-title">Skills</h3>
          <ul className="about-skills">
            <li>
              <strong>Backend:</strong> Node.js, Java, Spring Boot, Maven,
              Hibernate
            </li>
            <li>
              <strong>ML/Data:</strong> Python, PyTorch, TensorFlow, Hadoop, GCP
            </li>
            <li>
              <strong>Frontend:</strong> React, HTML, CSS, JavaScript
            </li>
            <li>
              <strong>Languages:</strong> English (fluent), Mandarin (native)
            </li>
            <li>
              <strong>Other:</strong> Australia Driver's Licence
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
