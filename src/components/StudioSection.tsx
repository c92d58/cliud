import { motion } from "framer-motion";
import type { Transition } from "framer-motion";

const transition: Transition = { duration: 0.8, ease: "easeOut" };

const values = [
  { title: "工藝", desc: "每一個像素、每一次過渡、每一行文字都經過深思熟慮。我們不抄捷徑。" },
  { title: "夥伴關係", desc: "我們不只是承包商——我們是您的團隊延伸。深度協作，共同承擔責任。" },
  { title: "持久性", desc: "網站不是一次性產物。我們建構的是長期增長、易於維護的系統。" },
];

const members = [
  { name: "林宇軒", role: "創意總監 / 共同創辦人" },
  { name: "陳雨晴", role: "技術總監 / 共同創辦人" },
  { name: "張以諾", role: "設計總監" },
  { name: "王思涵", role: "前端工程師" },
];

export default function StudioSection() {
  return (
    <section id="studio" className="min-h-screen bg-black px-8 md:px-16 lg:px-20 pt-28 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="text-sm font-body text-white/80 mb-6"
        >
          // 關於團隊
        </motion.p>
        <motion.h2
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.1 }}
          className="font-heading italic text-6xl md:text-7xl lg:text-[5rem] leading-[0.9] tracking-[-3px] text-white"
        >
          小型團隊，
          <br />
          巨大影響
        </motion.h2>

        {/* About text */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.2 }}
          className="mt-10 max-w-2xl"
        >
          <p className="text-base text-white/80 font-body font-light leading-relaxed">
            Aether 由一群對數位工藝懷抱熱情的設計師與工程師組成。
            我們相信最好的網站來自於小團隊的深度投入——沒有人浮於事，沒有官僚流程，只有對品質的執著。
          </p>
          <p className="mt-4 text-base text-white/60 font-body font-light leading-relaxed">
            成立六年來，我們與橫跨四大洲的 140 多個品牌合作，從新創公司到財富 500 強企業。
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ filter: "blur(10px)", opacity: 0, y: 30 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.12, ease: "easeOut" }}
              className="liquid-glass rounded-[1.25rem] p-6"
            >
              <span className="font-heading italic text-4xl tracking-[-1px] text-white/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-heading italic text-2xl tracking-[-1px] text-white">
                {v.title}
              </h3>
              <p className="mt-2 text-sm text-white/70 font-body font-light leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team */}
        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.5 }}
          className="mt-16"
        >
          <p className="text-sm font-body text-white/80 mb-6">// 核心成員</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {members.map((m) => (
              <div key={m.name} className="liquid-glass rounded-[1rem] p-5">
                <div className="w-full aspect-square rounded-lg bg-white/5 mb-4 flex items-center justify-center">
                  <span className="font-heading italic text-3xl text-white/10">
                    {m.name[0]}
                  </span>
                </div>
                <p className="font-heading italic text-lg tracking-[-0.5px] text-white">
                  {m.name}
                </p>
                <p className="text-xs text-white/50 font-body font-light mt-1">
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
