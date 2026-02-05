import "./SectionExperience.css";

/**
 * Experience 区块（参考 Brittany Chiang）：经历时间线
 * 求职向：公司、角色、时间、要点、技术标签，便于扫读和匹配 JD
 */
const experiences = [
  {
    company: "Law Firm",
    companyUrl: "https://www.jtn.com/CN/index.aspx",
    role: "AI Technique Provider",
    period: "Sep 2023 — Dec 2025",
    location: "Jinan, China",
    points: [
      "Built a law logic solution system with Coze to provide law service, resulting in lawyer case searching and case integration.",
      "Provided Chinese legal services.",
    ],
    tags: ["Coze", "Legal Tech"],
  },
  {
    company: "Wipro",
    companyUrl: "https://www.wipro.com/en-ANZ",
    role: "Java Backend Developer",
    period: "Sep 2022 — June 2023",
    location: "Sydney, Australia",
    points: [
      "Developed and maintained backend services with Maven and Hibernate, ensuring reliable deployment and consistency.",
      "Delivered e-commerce backend using Spring Boot; implemented API layer and connected front-end systems for production use.",
    ],
    tags: ["Java", "Spring Boot", "Maven", "Hibernate"],
  },
  {
    company: "University of Queensland",
    companyUrl: null,
    role: "Weakly Supervised Learning (Medical)",
    period: "Feb 2022 — June 2022",
    location: "Brisbane, Australia",
    points: [
      "Researched classification performance on large unlabeled, imbalanced datasets; led data cleaning and reprocessing in Python (TensorFlow, PyTorch).",
      "Built CNN and MLP models for weakly supervised learning; image and NLP self-supervision for cancer diagnosis.",
    ],
    tags: ["Python", "TensorFlow", "PyTorch"],
    links: {
      conference: "/COMP7860_conference_paper%20(1).pdf",
      survey: "https://link.springer.com/article/10.1007/s11633-022-1382-8",
    },
  },
  {
    company: "University of Queensland",
    companyUrl: null,
    role: "Cardiovascular Signal Classification & Display",
    period: "Aug 2021 — Nov 2021",
    location: "Brisbane, Australia",
    points: [
      "Processed and displayed cardiovascular signal results using GCP; ran full classification pipeline on Google Cloud Platform.",
      "Built CNN training pipeline using Hadoop, Python (PyTorch, Matplotlib), delivering a practical model for GCP.",
    ],
    tags: ["Python", "PyTorch", "GCP", "Hadoop"],
  },
  {
    company: "Inspur",
    companyUrl: "https://www.inspur.com",
    role: "Frontend Developer Intern",
    period: "Oct 2019 — Feb 2020",
    location: "Jinan, China",
    points: [
      "Improved provincial government website using Java, HTML, and CSS, delivering the province's government website.",
    ],
    tags: ["Java", "HTML", "CSS"],
  },
];

const education = [
  {
    school: "University of Queensland",
    degree: "Master of Information Technology",
    period: "July 2020 — July 2022",
    location: "Brisbane, Australia",
    points: [
      "Thesis: Weakly Supervised Learning for Cyber Attacks from Only Unlabeled Data",
    ],
    tags: [],
  },
  {
    school: "University of Tasmania",
    degree: "Bachelor of Electrical Power Engineering (Honours)",
    period: "Sep 2014 — Dec 2018",
    location: "Hobart, Australia",
    points: ["Thesis: The Influences of Wind Farm Integration to Power Grid"],
    tags: [],
  },
];

export default function SectionExperience() {
  return (
    <section id="experience" className="section-experience">
      <div className="container">
        <h2 className="section-heading">
          <span className="section-num">02.</span> Experience
        </h2>
        <div className="experience-list">
          {experiences.map((exp, i) => (
            <article key={i} className="experience-item">
              <header className="experience-header">
                <div className="experience-title-row">
                  <h3 className="experience-role">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                    <span className="experience-role-sep"> · </span>
                    <span className="experience-role-name">{exp.role}</span>
                  </h3>
                  <span className="experience-period">
                    {exp.period}
                    {exp.location && ` · ${exp.location}`}
                  </span>
                </div>
              </header>
              <ul className="experience-points">
                {exp.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
              <div className="experience-tags">
                {exp.tags.map((t, j) => (
                  <span key={j} className="experience-tag">
                    {t}
                  </span>
                ))}
              </div>
              {exp.links && (
                <div className="experience-links">
                  {exp.links.conference && (
                    <a
                      href={exp.links.conference}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Conference paper (PDF)
                    </a>
                  )}
                  {exp.links.survey && (
                    <a
                      href={exp.links.survey}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Survey: Pre-training in Medical Data
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
          {education.map((ed, i) => (
            <article key={`ed-${i}`} className="experience-item">
              <header className="experience-header">
                <div className="experience-title-row">
                  <h3 className="experience-role">
                    {ed.school}
                    <span className="experience-role-sep"> · </span>
                    <span className="experience-role-name">{ed.degree}</span>
                  </h3>
                  <span className="experience-period">
                    {ed.period}
                    {ed.location && ` · ${ed.location}`}
                  </span>
                </div>
              </header>
              <ul className="experience-points">
                {ed.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
              {ed.tags.length > 0 && (
                <div className="experience-tags">
                  {ed.tags.map((t, j) => (
                    <span key={j} className="experience-tag">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
