import { motion } from "framer-motion";
import type { Transition } from "framer-motion";

const transition: Transition = { duration: 0.8, ease: "easeOut" };

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("感謝您的訊息，我們會盡快與您聯繫。");
  };

  return (
    <section id="contact" className="min-h-screen bg-black px-8 md:px-16 lg:px-20 pt-28 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="text-sm font-body text-white/80 mb-6"
        >
          // 聯繫我們
        </motion.p>
        <motion.h2
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.1 }}
          className="font-heading italic text-6xl md:text-7xl lg:text-[5rem] leading-[0.9] tracking-[-3px] text-white"
        >
          讓我們聊聊
          <br />
          您的下一個項目
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ filter: "blur(10px)", opacity: 0, y: 30 }}
            whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.2 }}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="您的姓名"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 font-body outline-none focus:border-white/30 transition-colors"
              />
              <input
                type="email"
                placeholder="電子郵件"
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 font-body outline-none focus:border-white/30 transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="公司名稱（選填）"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 font-body outline-none focus:border-white/30 transition-colors"
            />
            <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white/70 font-body outline-none focus:border-white/30 transition-colors appearance-none">
              <option value="" disabled selected className="bg-black">
                感興趣的服務
              </option>
              <option value="design" className="bg-black">設計</option>
              <option value="engineering" className="bg-black">工程</option>
              <option value="growth" className="bg-black">增長</option>
              <option value="all" className="bg-black">全面合作</option>
            </select>
            <textarea
              placeholder="告訴我們您的項目…"
              rows={5}
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 font-body outline-none focus:border-white/30 transition-colors resize-none"
            />
            <button
              type="submit"
              className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium font-body hover:bg-white/90 transition-colors self-start"
            >
              發送
            </button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ filter: "blur(10px)", opacity: 0, y: 30 }}
            whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.35 }}
            className="flex flex-col gap-6"
          >
            <div className="liquid-glass rounded-[1.25rem] p-6">
              <p className="text-xs font-body text-white/50 uppercase tracking-wider mb-2">
                電子郵件
              </p>
              <p className="font-heading italic text-xl tracking-[-0.5px] text-white">
                hello@aether.studio
              </p>
            </div>
            <div className="liquid-glass rounded-[1.25rem] p-6">
              <p className="text-xs font-body text-white/50 uppercase tracking-wider mb-2">
                所在地
              </p>
              <p className="font-heading italic text-xl tracking-[-0.5px] text-white">
                台北 · 東京 · 倫敦
              </p>
            </div>
            <div className="liquid-glass rounded-[1.25rem] p-6">
              <p className="text-xs font-body text-white/50 uppercase tracking-wider mb-2">
                社群
              </p>
              <div className="flex gap-4">
                {["Instagram", "LinkedIn", "Dribbble", "GitHub"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-sm text-white/60 font-body font-light hover:text-white transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <span className="font-heading italic text-lg text-white/30">Aether</span>
          <span className="text-xs text-white/20 font-body">
            © {new Date().getFullYear()} Aether Studio. All rights reserved.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
