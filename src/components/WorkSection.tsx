import { motion } from "framer-motion";
import type { Transition, Variants } from "framer-motion";

const transition: Transition = { duration: 0.8, ease: "easeOut" };

interface Project {
  title: string;
  category: string;
  desc: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Lumina",
    category: "品牌重塑 / 電商",
    desc: "為高端護膚品牌建立完整的數位識別系統，從字體到購物體驗的全域設計。",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=375&fit=crop&auto=format",
  },
  {
    title: "Nova AI",
    category: "SaaS / 儀表板",
    desc: "AI 分析平台的產品設計與前端工程，將複雜數據轉化為直覺的視覺介面。",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=375&fit=crop&auto=format",
  },
  {
    title: "Arc Studio",
    category: "作品集 / CMS",
    desc: "建築事務所的全球作品集網站，Headless CMS 驅動的多語言展示平台。",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=375&fit=crop&auto=format",
  },
  {
    title: "Pulse Health",
    category: "醫療 / 會員系統",
    desc: "健康管理平台的 UI/UX 重新設計，會員留存率提升 40%。",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=375&fit=crop&auto=format",
  },
];

const cardVariants: Variants = {
  hidden: { filter: "blur(10px)", opacity: 0, y: 30 },
  visible: (i: number) => ({
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function WorkSection() {
  return (
    <section id="work" className="min-h-screen bg-black px-8 md:px-16 lg:px-20 pt-28 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="text-sm font-body text-white/80 mb-6"
        >
          // 精選作品
        </motion.p>
        <motion.h2
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.1 }}
          className="font-heading italic text-6xl md:text-7xl lg:text-[5rem] leading-[0.9] tracking-[-3px] text-white"
        >
          我們的作品
        </motion.h2>

        {/* Project grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="liquid-glass rounded-[1.25rem] p-8 group cursor-pointer hover:bg-white/[0.03] transition-colors"
            >
              {/* Image */}
              <div className="w-full aspect-[16/10] rounded-lg mb-6 overflow-hidden bg-white/5">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-body text-white/50 uppercase tracking-wider">
                  {p.category}
                </span>
              </div>
              <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-white/70 font-body font-light leading-relaxed max-w-[40ch]">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
