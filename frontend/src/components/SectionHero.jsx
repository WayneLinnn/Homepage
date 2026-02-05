import "./SectionHero.css";

/**
 * Hero 区块（参考 Brittany Chiang）：姓名 + 职位方向 + 一句话能力
 * 求职向：让 HR 3 秒内知道「岗位类型 + 核心能力」
 */
export default function SectionHero() {
  return (
    <section className="section-hero">
      <div className="container section-hero-inner">
        <p className="section-hero-greeting">Hi, my name is</p>
        <h1 className="section-hero-name">Wayne Lin.</h1>
        <h2 className="section-hero-title">Full-Stack & AI Developer.</h2>
        <p className="section-hero-tagline">
          I build backend systems and AI-powered applications for legal and
          product teams. Focused on Java/Spring Boot, Node.js, React, and
          legal-tech solutions.
        </p>
      </div>
    </section>
  );
}
