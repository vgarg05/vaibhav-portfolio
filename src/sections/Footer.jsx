import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-8">
      <div className="mx-auto flex w-[min(1120px,calc(100%-32px))] flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Designed & Developed by {profile.name}</p>
        <p>{profile.location} | {profile.email}</p>
      </div>
    </footer>
  );
}
