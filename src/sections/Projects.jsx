import { Github, Globe2 } from "lucide-react";
import Section from "../components/Section";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Featured projects" title="Real-world applications built with Artificial Intelligence, Machine Learning, and Python.">
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <article key={project.title} className="glass flex min-h-full flex-col overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:border-electric/35">
              <div className="relative h-44 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(56,189,248,.34),transparent_38%),linear-gradient(135deg,rgba(37,99,235,.28),rgba(2,6,23,.92))]" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-20 w-20 place-items-center rounded-3xl border border-electric/30 bg-electric/10 text-electric shadow-glow"><Icon size={36} /></span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-black text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">{project.stack.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>
                <ul className="mt-5 space-y-2 text-sm text-slate-400">
                  {project.highlights.map((item) => <li key={item}>- {item}</li>)}
                </ul>
                <div className="mt-auto flex gap-3 pt-6">
                  <ProjectButton href={project.github} icon={Github} label="GitHub" />
                  <ProjectButton href={project.live} icon={Globe2} label="Live Demo" />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function ProjectButton({ href, icon: Icon, label }) {
  if (!href) {
    return (
      <button className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-bold text-slate-500" disabled>
        <Icon size={15} />Coming Soon
      </button>
    );
  }

  return (
    <a className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-electric/25 bg-electric/10 px-3 py-2 text-xs font-bold text-electric" href={href} target="_blank" rel="noreferrer">
      <Icon size={15} />{label}
    </a>
  );
}
