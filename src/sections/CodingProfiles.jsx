import { ExternalLink } from "lucide-react";
import Section from "../components/Section";
import { profiles } from "../data/portfolio";

export default function CodingProfiles() {
  return (
    <Section id="profiles" eyebrow="Coding profiles & links" title="Professional links and platform presence in one quick scan.">
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profiles.map((profile) => {
          const Icon = profile.icon;
          const available = Boolean(profile.href);
          const content = (
            <>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-electric/10 text-electric"><Icon size={24} /></span>
              <div className="min-w-0 flex-1">
                <p className="font-black text-white">{profile.label}</p>
                <p className="mt-1 text-sm text-slate-400">{profile.status}</p>
              </div>
              <ExternalLink size={18} className={available ? "text-electric" : "text-slate-600"} />
            </>
          );

          return available ? (
            <a key={profile.label} href={profile.href} target="_blank" rel="noreferrer" className="glass flex items-center gap-4 rounded-3xl p-5 transition hover:-translate-y-1 hover:border-electric/35">
              {content}
            </a>
          ) : (
            <div key={profile.label} className="glass flex items-center gap-4 rounded-3xl p-5 opacity-75">
              {content}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
