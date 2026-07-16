import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, MoveRight } from "lucide-react";
import { focusAreas, profile, stats } from "../data/portfolio";
import { fadeUp, stagger } from "../utils/motion";

export default function Hero() {
  return (
    <section id="hero" className="relative z-10 min-h-screen scroll-mt-20 overflow-hidden pt-24">
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] w-[min(1120px,calc(100%-32px))] items-center gap-10 pb-16 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.p variants={fadeUp} className="eyebrow">Professional Developer Portfolio</motion.p>
          <motion.h1 variants={fadeUp} className="mt-4 max-w-4xl font-display text-5xl font-black leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-xl font-semibold text-electric sm:text-2xl">{profile.role}</motion.p>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{profile.intro}</motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a className="btn-primary" href="#projects"><MoveRight size={18} />View Projects</a>
            <a className="btn-secondary" href={profile.resume} download><Download size={18} />Download Resume</a>
            <a className="btn-secondary" href="#contact"><Mail size={18} />Contact Me</a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="glass relative overflow-hidden rounded-[28px] p-5"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-electric via-cobalt to-cyan-300" />
          <div className="rounded-3xl border border-white/10 bg-slate-950/75 p-6">
            <div className="grid grid-cols-2 gap-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-3xl font-black text-white">{item.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-3">
              {focusAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <div key={area.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-electric/10 text-electric"><Icon size={21} /></span>
                    <div>
                      <p className="font-bold text-white">{area.label}</p>
                      <p className="text-sm text-slate-400">{area.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
      <a href="#about" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 p-3 text-slate-300 transition hover:text-electric md:block" aria-label="Scroll to about">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
