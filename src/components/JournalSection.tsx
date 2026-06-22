import { motion } from "framer-motion";
import type { Transition } from "framer-motion";

const transition: Transition = { duration: 0.8, ease: "easeOut" };

const posts = [
  {
    title: "設計系統不是樣式庫",
    category: "設計思維",
    excerpt: "真正的設計系統是團隊協作的語言，而不只是 UI 元件的集合。",
    date: "2026.06",
  },
  {
    title: "效能預算：前端的新底線",
    category: "工程",
    excerpt: "在 Core Web Vitals 時代，效能不再是選項，而是核心需求。",
    date: "2026.05",
  },
  {
    title: "從品牌到體驗的連續性",
    category: "品牌策略",
    excerpt: "如何在每一個觸點維持品牌的一致性——從名片到儀表板。",
    date: "2026.04",
  },
  {
    title: "動態設計的心理學",
    category: "動態設計",
    excerpt: "精心設計的動畫不只是好看，它引導注意力、講述故事、創造記憶。",
    date: "2026.03",
  },
];

export default function JournalSection() {
  return (
    <section id="journal" className="min-h-screen bg-black px-8 md:px-16 lg:px-20 pt-28 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="text-sm font-body text-white/80 mb-6"
        >
          // 觀點
        </motion.p>
        <motion.h2
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.1 }}
          className="font-heading italic text-6xl md:text-7xl lg:text-[5rem] leading-[0.9] tracking-[-3px] text-white"
        >
          我們的觀點
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ filter: "blur(10px)", opacity: 0, y: 30 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: "easeOut" }}
              className="liquid-glass rounded-[1.25rem] p-6 group cursor-pointer hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-body text-white/50 uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-[11px] font-body text-white/30">·</span>
                <span className="text-[11px] font-body text-white/30">
                  {post.date}
                </span>
              </div>
              <h3 className="font-heading italic text-2xl md:text-3xl tracking-[-1px] text-white group-hover:text-white/80 transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-white/60 font-body font-light leading-relaxed max-w-[40ch]">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
