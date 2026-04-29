import "./SectionHero.css";
import { positionSummary } from "../data/careerData";

/**
 * Hero 区块（参考 Brittany Chiang）：姓名 + 职位方向 + 一句话能力
 * 求职向：让 HR 3 秒内知道「岗位类型 + 核心能力」
 */
export default function SectionHero() {
  return (
    <section className="section-hero">
      <div className="container section-hero-inner">
        <p className="section-hero-greeting">{positionSummary.kicker}</p>
        <h1 className="section-hero-name">{positionSummary.name}.</h1>
        <h2 className="section-hero-title">{positionSummary.title}.</h2>
        <p className="section-hero-tagline">{positionSummary.tagline}</p>
      </div>
    </section>
  );
}
