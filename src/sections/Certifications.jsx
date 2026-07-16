import Section from "../components/Section";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Certifications & achievements" title="Specialized training and coursework in Data Science, AI/ML, and Computer Science.">
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((cert) => {
          const Icon = cert.icon;
          return (
            <article key={cert.title} className="glass rounded-3xl p-5 transition hover:-translate-y-1 hover:border-electric/35">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-electric/10 text-electric"><Icon size={22} /></span>
                <div>
                  <h3 className="font-black leading-6 text-white">{cert.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{cert.issuer}</p>
                  <p className="mt-3 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-slate-300">{cert.date}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
