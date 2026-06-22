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
      {/* Top row: icon + tags */}
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

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom: title + body */}
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
    title: "Design",
    tags: ["Brand Systems", "Art Direction", "Visual Identity", "Motion"],
    body: "We shape identities and interfaces that feel unmistakably yours — typographic systems, component libraries, and art-directed pages that scale without losing soul.",
    delay: 0.2,
  },
  {
    icon: <MovieIcon size={20} />,
    title: "Engineering",
    tags: ["React", "Next.js", "Headless CMS", "Edge-Ready"],
    body: "Production-grade front-ends built on modern stacks. Performant, accessible, and instrumented — with code your team will enjoy extending long after launch.",
    delay: 0.35,
  },
  {
    icon: <LightbulbIcon size={20} />,
    title: "Growth",
    tags: ["SEO", "Analytics", "A/B Testing", "Retention"],
    body: "Launch is the starting line. We partner with your team on conversion, content, and iteration loops that turn a beautiful site into a compounding asset.",
    delay: 0.5,
  },
];

export default function Capabilities() {
  return (
    <section className="min-h-screen overflow-hidden bg-black relative">
      {/* Background video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_093722_ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
        {/* Header */}
        <div>
          <motion.p
            {...blurIn}
            transition={{ ...transition, delay: 0 }}
            className="text-sm font-body text-white/80 mb-6"
          >
            // Capabilities
          </motion.p>
          <motion.h2
            {...blurIn}
            transition={{ ...transition, delay: 0.1 }}
            className="font-heading italic text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] text-white"
          >
            Studio craft,
            <br />
            end to end
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <CapabilityCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
