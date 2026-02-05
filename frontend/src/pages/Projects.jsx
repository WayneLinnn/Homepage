import "./Projects.css";

const projects = [
  {
    title: "Law Logic Solution with Coze",
    desc: "Built a law logic solution system with Coze to provide law service, resulting in lawyer case searching and case integration. Delivered Chinese legal services.",
    link: null,
    linkLabel: null,
    tags: ["Coze", "Legal Tech"],
  },
  {
    title: "E-commerce Backend (Spring Boot)",
    desc: "Developed and maintained backend services with Maven and Hibernate at Wipro. Delivered e-commerce backend using Spring Boot; implemented API layer and connected front-end systems for production use.",
    link: null,
    linkLabel: null,
    tags: ["Java", "Spring Boot", "Maven", "Hibernate"],
  },
  {
    title: "Weakly Supervised Learning (Medical)",
    desc: "Researched classification performance on large unlabeled, imbalanced datasets at UQ; led data cleaning and reprocessing in Python (TensorFlow, PyTorch). Built CNN and MLP models for weakly supervised learning; image and NLP self-supervision for cancer diagnosis.",
    link: "/COMP7860_conference_paper%20(1).pdf",
    linkLabel: "Conference paper (PDF)",
    tags: ["Python", "TensorFlow", "PyTorch"],
  },
  {
    title: "Pre-training in Medical Data: A Survey",
    desc: "Survey paper on pre-training in medical data, covering image and text modalities and practical considerations for medical applications.",
    link: "https://link.springer.com/article/10.1007/s11633-022-1382-8",
    linkLabel: "Journal article",
    tags: ["Medical Data", "Survey"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-heading">
          <span className="section-num">03.</span> Projects
        </h2>
        <div className="project-list">
          {projects.map((p, i) => (
            <article key={i} className="project-card">
              <div className="project-card-inner">
                <h3 className="project-title">
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-title-link"
                    >
                      {p.title}
                      <span className="project-arrow" aria-hidden="true">
                        →
                      </span>
                    </a>
                  ) : (
                    p.title
                  )}
                </h3>
                <p className="project-desc">{p.desc}</p>
                <ul className="project-tags">
                  {p.tags.map((t, j) => (
                    <li key={j}>{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <p className="project-archive">
          <a
            href="/Resume2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="project-archive-link"
          >
            View Full Résumé →
          </a>
        </p>
      </div>
    </section>
  );
}
