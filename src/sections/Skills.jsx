import { motion } from "framer-motion";
import Section from "../components/Section";
import { skills } from "../data/portfolio";
import { fadeUp, stagger } from "../utils/motion";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Technical skills" title="Core competencies across AI, Machine Learning, backend frameworks, and data analytics.">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.article key={skill.category} variants={fadeUp} className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-electric/35">
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-electric/10 text-electric"><Icon size={23} /></span>
                <span className="text-sm font-bold text-electric">{skill.level}%</span>
              </div>
              <h3 className="mt-5 text-xl font-black text-white">{skill.category}</h3>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div className="h-full rounded-full bg-gradient-to-r from-electric to-cobalt" initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 0.9 }} />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skill.items.map((item) => <span className="tag" key={item}>{item}</span>)}
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </Section>
  );
}
