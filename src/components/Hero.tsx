import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Transition } from "framer-motion";
import FadingVideo from "./FadingVideo";
import BlurText from "./BlurText";
import { ArrowUpRight, Play, ClockIcon, GlobeIcon, X } from "./Icons";

const blurIn = {
  initial: { filter: "blur(10px)", opacity: 0, y: 20 },
  animate: { filter: "blur(0px)", opacity: 1, y: 0 },
};

const transition: Transition = { duration: 0.8, ease: "easeOut" };

const navLinks = [
  { label: "作品", href: "#work" },
  { label: "團隊", href: "#studio" },
  { label: "服務", href: "#services" },
  { label: "觀點", href: "#journal" },
  { label: "聯繫", href: "#contact" },
];

const logos = ["Aeon", "Vela", "Apex", "Orbit", "Zeno"];

/* ─── Modal wrapper ────────────────────────────────────────── */
function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg liquid-glass-strong rounded-2xl p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Project form modal ───────────────────────────────────── */
function ProjectForm({ onClose }: { onClose: () => void }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("感謝您的訊息，我們會盡快與您聯繫。");
        onClose();
      }}
      className="flex flex-col gap-5"
    >
      <h2 className="font-heading italic text-3xl tracking-[-1px] text-white">
        開始合作
      </h2>
      <p className="text-sm text-white/70 font-body font-light">
        告訴我們您的項目，我們將在 48 小時內回覆。
      </p>
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
      <textarea
        placeholder="簡單描述您的項目…"
        rows={4}
        required
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 font-body outline-none focus:border-white/30 transition-colors resize-none"
      />
      <button
        type="submit"
        className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium font-body hover:bg-white/90 transition-colors self-start"
      >
        送出
      </button>
    </form>
  );
}

/* ─── Showreel modal ───────────────────────────────────────── */
function ShowreelModal({ onClose: _onClose }: { onClose: () => void }) {
  return (
    <div className="w-full max-w-3xl aspect-video">
      <div className="w-full h-full bg-black/60 rounded-lg flex items-center justify-center">
        <p className="text-white/50 font-body text-sm">Showreel 影片播放器</p>
      </div>
    </div>
  );
}

/* ─── Navbar ───────────────────────────────────────────────── */
function Navbar({ onProjectOpen }: { onProjectOpen: () => void }) {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16">
      {/* Logo */}
      <a href="#hero" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        className="liquid-glass h-12 w-12 rounded-full flex items-center justify-center"
      >
        <span className="font-heading italic text-2xl text-white">A</span>
      </a>

      {/* Center nav - hidden on mobile */}
      <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-0">
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
            className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors cursor-pointer"
          >
            {label}
          </a>
        ))}
        <button
          onClick={onProjectOpen}
          className="ml-2 bg-white text-black rounded-full px-4 py-2 text-sm font-medium font-body flex items-center gap-1.5 hover:bg-white/90 transition-colors"
        >
          開始合作
          <ArrowUpRight size={16} />
        </button>
      </div>

      {/* Right spacer */}
      <div className="h-12 w-12" />
    </nav>
  );
}

/* ─── Main Hero ────────────────────────────────────────────── */
export default function Hero() {
  const [projectOpen, setProjectOpen] = useState(false);
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <>
      <section id="hero" className="h-screen overflow-hidden bg-black relative">
        {/* Background video */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
          style={{ width: "120%", height: "120%" }}
        >
          <FadingVideo
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <Navbar onProjectOpen={() => setProjectOpen(true)} />

        {/* Main content */}
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center">
            {/* Badge */}
            <motion.div
              {...blurIn}
              transition={{ ...transition, delay: 0.4 }}
              className="liquid-glass rounded-full px-4 py-1.5 inline-flex items-center gap-2"
            >
              <span className="bg-white text-black text-[11px] font-semibold px-2 py-0.5 rounded-full font-body">
                新
              </span>
              <span className="text-xs text-white/80 font-body font-light">
                預約 2026 年 Q3 檔期 — 名額有限
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              {...blurIn}
              transition={{ ...transition, delay: 0.6 }}
              className="mt-6 max-w-4xl"
            >
              <BlurText
                text="雕琢數位體驗 超越潮流"
                className="text-6xl md:text-7xl lg:text-[5rem] font-heading italic text-white leading-[0.8] tracking-[-4px]"
              />
            </motion.div>

            {/* Subtext */}
            <motion.p
              {...blurIn}
              transition={{ ...transition, delay: 0.8 }}
              className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight"
            >
              我們是一間小型工作室，設計師與工程師攜手為有野心的品牌打造定義網站的體驗。
              精準的字體排版、電影感的動態設計，以及值得驕傲的程式碼。
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...blurIn}
              transition={{ ...transition, delay: 1.1 }}
              className="mt-6 flex gap-6 items-center"
            >
              <button
                onClick={() => setProjectOpen(true)}
                className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium font-body text-white flex items-center gap-2 hover:bg-white/5 transition-colors"
              >
                開始合作
                <ArrowUpRight size={16} />
              </button>
              <button
                onClick={() => setShowreelOpen(true)}
                className="text-sm font-medium font-body text-white flex items-center gap-2 hover:text-white/80 transition-colors"
              >
                <Play size={16} />
                觀看作品集
              </button>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              {...blurIn}
              transition={{ ...transition, delay: 1.3 }}
              className="mt-8 flex gap-4"
            >
              <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem]">
                <ClockIcon size={20} />
                <p className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4">
                  6 週
                </p>
                <p className="text-xs text-white/70 font-body font-light mt-2">
                  平均完整啟動時程
                </p>
              </div>
              <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem]">
                <GlobeIcon size={20} />
                <p className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4">
                  140+
                </p>
                <p className="text-xs text-white/70 font-body font-light mt-2">
                  橫跨四大洲的品牌
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom trust bar */}
          <motion.div
            {...blurIn}
            transition={{ ...transition, delay: 1.4 }}
            className="flex flex-col items-center gap-4 pb-8"
          >
            <div className="liquid-glass rounded-full px-5 py-2">
              <span className="text-xs text-white/70 font-body font-light">
                受到全球創辦人、營運者與創意總監的信賴
              </span>
            </div>
            <div className="flex gap-12 md:gap-16 items-center">
              {logos.map((name) => (
                <span
                  key={name}
                  className="font-heading italic text-2xl md:text-3xl tracking-tight text-white/60"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      <Modal open={projectOpen} onClose={() => setProjectOpen(false)}>
        <ProjectForm onClose={() => setProjectOpen(false)} />
      </Modal>
      <Modal open={showreelOpen} onClose={() => setShowreelOpen(false)}>
        <ShowreelModal onClose={() => setShowreelOpen(false)} />
      </Modal>
    </>
  );
}
