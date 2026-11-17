import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiMedium } from "react-icons/si";
import { profile } from "../content";
import profilePic from "../assets/profile-pic.jpg";
import { Mono, Reveal } from "../ui";

export default function Connect({ stats }) {
  return (
    <section id="connect" className="relative pt-32 pb-12">
      <div className="pointer-events-none absolute inset-x-[-50vw] bottom-0 top-0 -z-10 bg-gradient-to-b from-transparent via-[#05070B]/60 to-[#0E1F12]" />
      <Reveal className="flex flex-col items-center text-center">
        <img src={profilePic} alt={profile.name} className="h-20 w-20 rounded-full object-cover ring-2 ring-lime/60 ring-offset-4 ring-offset-void" />
        <Mono className="mt-8 text-lime">06 — Connect</Mono>
        <h2 className="mt-5 max-w-4xl font-display text-[44px] sm:text-[72px] font-bold leading-[1.02] tracking-tight text-ink">
          Let's build perception <br className="hidden sm:block" />
          that runs in <span className="text-gradient">real time.</span>
        </h2>
        <p className="mt-5 max-w-xl text-mute">Open to conversations about real-time vision, GPU inference and edge AI.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="rounded-full bg-lime px-6 py-3.5 font-medium text-void hover:bg-lime-soft transition-colors">
            {profile.email}
          </a>
          {[
            [profile.linkedin, AiFillLinkedin, "LinkedIn"],
            [profile.github, AiFillGithub, "GitHub"],
            [profile.medium, SiMedium, "Medium"],
          ].map(([href, Icon, label]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-ink hover:bg-white/10 transition-colors">
              <Icon size={18} /> {label}
            </a>
          ))}
          <a href={profile.resume} target="_blank" rel="noreferrer" className="glass rounded-full px-5 py-3.5 text-ink hover:bg-white/10 transition-colors">
            Résumé ↗
          </a>
        </div>
      </Reveal>
      <div className="mt-28 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row">
        <Mono className="text-mute/60 normal-case tracking-normal">© {new Date().getFullYear()} {profile.name} · {profile.location}</Mono>
        <Mono className="text-mute/60 normal-case tracking-normal">
          Background: {stats ? stats.points.toLocaleString() : "2,529"} points + {stats ? stats.cameras : 35} camera poses from my SfM pipeline
        </Mono>
      </div>
    </section>
  );
}
