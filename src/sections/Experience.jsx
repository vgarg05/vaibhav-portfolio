import Section from "../components/Section";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Hands-on experience in Artificial Intelligence, Machine Learning, and predictive modeling.">
      <div className="mt-10 space-y-5">
        {experience.map((item, index) => (
          <article key={item.company} className="glass relative rounded-3xl p-6 sm:p-7">
            <div className="absolute left-7 top-8 hidden h-[calc(100%-4rem)] w-px bg-electric/30 sm:block" />
            <div className="grid gap-5 sm:grid-cols-[160px_1fr]">
              <div className="sm:pl-7">
                <span className="inline-grid h-10 w-10 place-items-center rounded-full border border-electric/30 bg-electric/10 font-black text-electric">{index + 1}</span>
                <p className="mt-3 text-sm font-bold text-electric">{item.duration}</p>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">{item.role}</h3>
                <p className="mt-1 font-semibold text-slate-300">{item.company}</p>
                <div className="mt-4 flex flex-wrap gap-2">{item.tech.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>
                <ul className="mt-5 space-y-3 text-slate-400">
                  {item.points.map((point) => <li key={point} className="leading-7">- {point}</li>)}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
