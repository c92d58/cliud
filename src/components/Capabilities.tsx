import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import FadingVideo from "./FadingVideo";
import { ImageIcon, MovieIcon, LightbulbIcon } from "./Icons";

const blurIn = {
  initial: { filter: "blur(10px)", opacity: 0, y: 20 },
  animate: { filter: "blur(0px)", opacity: 1, y: 0 },
};

const transition: Transition = { duration: 0.8, ease: "easeOut" };

interface CardProps {
  icon: React.ReactNode;
  title: string;
  tags: string[];
  body: string;
  delay: number;
}

function CapabilityCard({ icon, title, tags, body, delay }: CardProps) {
  return (
    <motion.div
      initial={{ filter: "blur(10px)", opacity: 0, y: 30 }}
      whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="liquid-glass h-11 w-11 rounded-[0.75rem] flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="flex flex-wrap gap-1.5 justify-end">
          {tags.map((tag) => (
            <span
              key={tag}
              className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex-1" />
      <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none text-white mt-4">
        {title}
      </h3>
      <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
        {body}
      </p>
    </motion.div>
  );
}

const cards: CardProps[] = [
  {
    icon: <ImageIcon size={20} />,
    title: "設計",
    tags: ["品牌系統", "藝術指導", "視覺識別", "動態設計"],
    body: "我們打造無可取代的識別與介面——字體系統、元件庫、藝術指導的頁面，規模化而不失靈魂。",
    delay: 0.2,
  },
  {
    icon: <MovieIcon size={20} />,
    title: "工程",
    tags: ["React", "Next.js", "Headless CMS", "Edge-Ready"],
    body: "基於現代技術棧的生產級前端。高效能、無障礙、完整監控——讓您的團隊在專案上線後依然樂於維護。",
    delay: 0.35,
  },
  {
    icon: <LightbulbIcon size={20} />,
    title: "增長",
    tags: ["SEO", "分析", "A/B 測試", "留存策略"],
    body: "上線只是起點。我們與您的團隊在轉換、內容與迭代循環上協作，將精美網站轉化為持續增值的資產。",
    delay: 0.5,
  },
];

export default function Capabilities() {
  return (
    <section id="services" className="min-h-screen overflow-hidden bg-black relative">
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_093722_ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
        <div>
          <motion.p
            {...blurIn}
            transition={{ ...transition, delay: 0 }}
            className="text-sm font-body text-white/80 mb-6"
          >
            // 核心能力
          </motion.p>
          <motion.h2
            {...blurIn}
            transition={{ ...transition, delay: 0.1 }}
            className="font-heading italic text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] text-white"
          >
            工作室工藝，
            <br />
            從頭到尾
          </motion.h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <CapabilityCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
