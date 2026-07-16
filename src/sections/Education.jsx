import Section from "../components/Section";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Computer science foundation with strong academic progress.">
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {education.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.school} className="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-electric/35">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-electric/10 text-electric"><Icon size={24} /></span>
              <p className="mt-5 text-sm font-bold text-electric">{item.duration}</p>
              <h3 className="mt-2 text-2xl font-black text-white">{item.degree}</h3>
              <p className="mt-2 leading-7 text-slate-300">{item.school}</p>
              <p className="mt-4 inline-flex rounded-full border border-electric/25 bg-electric/10 px-4 py-2 text-sm font-bold text-electric">{item.meta}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
