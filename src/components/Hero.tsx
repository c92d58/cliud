import { motion } from "framer-motion";
import FadingVideo from "./FadingVideo";
import BlurText from "./BlurText";
import { ArrowUpRight, Play, ClockIcon, GlobeIcon } from "./Icons";

import type { Transition } from "framer-motion";

const blurIn = {
  initial: { filter: "blur(10px)", opacity: 0, y: 20 },
  animate: { filter: "blur(0px)", opacity: 1, y: 0 },
};

const transition: Transition = { duration: 0.8, ease: "easeOut" };

const navLinks = ["Work", "Studio", "Services", "Journal", "Contact"];

const logos = ["Aeon", "Vela", "Apex", "Orbit", "Zeno"];

export default function Hero() {
  return (
    <section className="h-screen overflow-hidden bg-black relative">
      {/* Background video */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: "120%", height: "120%" }}
      >
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16">
        {/* Logo */}
        <div className="liquid-glass h-12 w-12 rounded-full flex items-center justify-center">
          <span className="font-heading italic text-2xl text-white">a</span>
        </div>

        {/* Center nav - hidden on mobile */}
        <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-0">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
          <button className="ml-2 bg-white text-black rounded-full px-4 py-2 text-sm font-medium font-body flex items-center gap-1.5 hover:bg-white/90 transition-colors">
            Start a Project
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Right spacer */}
        <div className="h-12 w-12" />
      </nav>

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
              New
            </span>
            <span className="text-xs text-white/80 font-body font-light">
              Booking Q3 2026 engagements — limited capacity
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            {...blurIn}
            transition={{ ...transition, delay: 0.6 }}
            className="mt-6 max-w-3xl"
          >
            <BlurText
              text="Crafted Digital Experiences Built to Outlast Trends"
              className="text-6xl md:text-7xl lg:text-[5rem] font-heading italic text-white leading-[0.8] tracking-[-4px]"
            />
          </motion.div>

          {/* Subtext */}
          <motion.p
            {...blurIn}
            transition={{ ...transition, delay: 0.8 }}
            className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight"
          >
            We are a small studio of designers and engineers shaping
            brand-defining websites for ambitious companies. Precise typography,
            cinematic motion, and code you can be proud of.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...blurIn}
            transition={{ ...transition, delay: 1.1 }}
            className="mt-6 flex gap-6 items-center"
          >
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium font-body text-white flex items-center gap-2 hover:bg-white/5 transition-colors">
              Start a Project
              <ArrowUpRight size={16} />
            </button>
            <button className="text-sm font-medium font-body text-white flex items-center gap-2 hover:text-white/80 transition-colors">
              <Play size={16} />
              Watch Showreel
            </button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            {...blurIn}
            transition={{ ...transition, delay: 1.3 }}
            className="mt-8 flex gap-4"
          >
            {/* Card 1 */}
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem]">
              <ClockIcon size={20} />
              <p className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4">
                6 Weeks
              </p>
              <p className="text-xs text-white/70 font-body font-light mt-2">
                Average End-to-End Launch Time
              </p>
            </div>

            {/* Card 2 */}
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem]">
              <GlobeIcon size={20} />
              <p className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4">
                140+
              </p>
              <p className="text-xs text-white/70 font-body font-light mt-2">
                Brands Shipped Across Four Continents
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
              Trusted by founders, operators, and creative directors worldwide
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
  );
}
