import React from "react";
import logo from "./assets/img/codebitbybit-logo.png";
import wordmark from "./assets/img/logo-wordmark.webp";
import nexoImg from "./assets/img/nexoplayer.webp";
import kathaaImg from "./assets/img/kathaa.webp";
import { ArrowRight, ArrowUpRight, MessageCircle, Smartphone, Sparkles } from "lucide-react";
import fullstackBanner from "./assets/img/fullstack-bootcamp-banner.jpg";
import { BOOTCAMP_PATH, FULLSTACK_PATH } from "./routes";

const POSTER = `${import.meta.env.BASE_URL}media/bootcamp-intro-poster.jpg`;
const CHANNEL = "https://whatsapp.com/channel/0029VbDnzsqHrDZpCa9z473T";
const FB = "https://www.facebook.com/AIinOdia";
const PROFILE = "https://chandrakantabehera.dev/";
const NEXO = "https://nexoplayer.chandrakantabehera.dev/";
const KATHAA = "https://kathaa.app/";
const BRAND = "https://codebitbybit.com/";

const CHECKOUT = "https://rzp.io/rzp/gi2dk7aW";

const courses = [
  { name: "FREE Odia AI Bootcamp", tag: "FREE • LIVE", desc: "Odia re AI sikha — ChatGPT, Gemini, ElevenLabs, Suno. Nije app, website au game banha. No coding needed.", href: BOOTCAMP_PATH, img: POSTER, featured: true, free: true },
  { name: "Full Stack AI App Developer Bootcamp", tag: "LIVE • ₹999 • 20 SEATS", desc: "1 Month Live Bootcamp — Build 3–4 real apps (NexoPlayer, Kathaa & StoryVerse bundle FREE). Design, build, deploy & monetise.", href: FULLSTACK_PATH, checkoutHref: CHECKOUT, img: fullstackBanner, featured: true, free: false },
  { name: "AI Website Workshop", tag: "COMING SOON", desc: "Prompt ru pura website — design, pages au launch. Odia re, step by step.", featured: false, free: false },
  { name: "AI Game Workshop", tag: "COMING SOON", desc: "Character, level au coins sahita nija game tiare kara — AI tools sahita.", featured: false, free: false },
];
const apps = [
  { name: "NexoPlayer", tag: "Audio + Media Hub", img: nexoImg, href: NEXO },
  { name: "Kathaa.app", tag: "History Audio OTT", img: kathaaImg, href: KATHAA },
];

export default function HomePage() {
  return (
    <div data-safe-area-inset-root style={{ boxSizing: "border-box", paddingTop: "var(--safe-area-inset-top)", minHeight: "100vh", background: "#0b1020" }} className="overflow-x-clip">
      <header data-track-area="header" data-safe-area-sticky-top style={{ top: "var(--safe-area-inset-top)" }} className="sticky z-40 bg-[#0b1020]/95 backdrop-blur border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="/" className="flex items-center gap-2 min-w-0">
            <img src={logo} alt="CodeBitByBit logo" width="36" height="36" className="h-9 w-9 rounded-xl object-cover" />
            <span className="leading-none"><span className="font-display block text-[18px] font-extrabold tracking-tight text-white">CodeBitByBit</span><span className="block text-[10px] font-bold tracking-[0.18em] text-amber-300">LEARN • BUILD • LAUNCH</span></span>
          </a>
          <div className="flex items-center gap-2">
            <a href={FULLSTACK_PATH} className="hidden rounded-full border border-white/20 px-3.5 py-2 text-xs font-bold text-amber-300 hover:bg-white/10 sm:inline-flex">Paid Bootcamp ₹999</a>
            <a href={BOOTCAMP_PATH} className="rounded-full bg-white px-4 py-2 text-[13px] font-extrabold text-[#0b1020]">Join FREE</a>
          </div>
        </div>
      </header>

      <section data-track-area="hero" className="hero-bg text-white">
        <div className="mx-auto max-w-6xl px-4 pt-10 pb-10 sm:px-6 sm:pt-16 sm:pb-14 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2"><span className="rounded-full bg-amber-300 px-3 py-1.5 text-xs font-extrabold text-[#211500]">✦ FREE COURSES</span><span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-bold">Odia + English • Beginner Friendly</span></div>
          <h1 className="font-display mt-5 text-[clamp(2.35rem,10vw,4.55rem)] leading-[0.98] font-extrabold text-balance">Learn AI.<br /><span className="text-amber-300">Build real apps.</span></h1>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-7 text-white/85">CodeBitByBit — Odia re AI sikhibara ghar. Free bootcamp, workshops au community — sabu gote jagare.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><a href={BOOTCAMP_PATH} className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-6 py-4 text-[15px] font-extrabold text-white glow-orange transition hover:-translate-y-0.5">FREE Odia AI Bootcamp <ArrowRight size={19} /></a><a href={CHANNEL} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#18a34a] px-6 py-4 text-[15px] font-extrabold text-white transition hover:-translate-y-0.5"><MessageCircle size={19} /> WhatsApp Channel</a><a href={FB} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1877f2] px-6 py-4 text-[15px] font-extrabold text-white transition hover:-translate-y-0.5">Join FB Page <ArrowUpRight size={18} /></a></div>
        </div>
      </section>

      <main className="bg-[var(--surface)]">
        <section data-track-area="courses" id="courses" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-2xl text-center px-1"><span className="inline-flex items-center gap-2 rounded-full bg-[#fff0d5] px-3 py-1.5 text-[11px] font-extrabold tracking-[0.14em] text-[#b45309] uppercase"><Sparkles size={14} /> Our courses</span><h2 className="font-display mt-4 text-[clamp(1.85rem,7vw,3rem)] leading-[1.04] font-extrabold text-[var(--ink)] text-balance">Aama <span className="text-[#ff6b1a]">courses au workshops</span></h2><p className="mt-3 text-[15px] leading-6 text-[var(--muted)]">Free ra bele free — sabu Odia + English re, beginner pain tiare.</p></div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {courses.map(c => (
              <article key={c.name} className={`overflow-hidden rounded-[1.5rem] shadow-xl ${c.featured ? `md:col-span-2 lg:grid lg:grid-cols-[1.15fr_1fr] lg:items-center text-white ${c.free ? "bg-[#0f1424] ring-4 ring-amber-300" : "bg-[#120e29] ring-2 ring-amber-300/80"}` : "border-2 border-dashed border-[var(--line)] bg-[var(--card)]"}`}>
                {c.img && (
                  <div className="bg-[#0b1020]">
                    <img src={c.img} alt={`${c.name} preview`} loading="lazy" width={1024} height={576} className="aspect-video w-full object-contain" />
                  </div>
                )}
                <div className="flex flex-col items-start p-6 sm:p-8">
                  <span className={`rounded-full px-3 py-1 text-[11px] font-extrabold ${c.free ? "bg-emerald-400/15 text-emerald-300" : c.featured ? "bg-amber-300 text-[#211500]" : "bg-[#fff0d5] text-[#9a4a00]"}`}>{c.tag}</span>
                  <h3 className={`font-display mt-3 text-[clamp(1.5rem,5vw,2.15rem)] leading-tight font-extrabold ${c.featured ? "text-white" : "text-[var(--ink)]"}`}>{c.name}</h3>
                  <p className={`mt-2 text-[15px] leading-6 ${c.featured ? "text-white/80" : "text-[var(--muted)]"}`}>{c.desc}</p>
                  {c.href ? (
                    <div className="mt-5 flex flex-wrap gap-3">
                      <a href={c.href} className="inline-flex items-center gap-2 rounded-full bg-[#ff6b1a] px-5 py-3.5 text-sm font-extrabold text-white glow-orange transition hover:-translate-y-0.5">
                        {c.free ? "Open course" : "View Course & Free Preview"} <ArrowRight size={17} />
                      </a>
                      {c.checkoutHref && (
                        <a href={c.checkoutHref} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-5 py-3.5 text-sm font-extrabold text-[#211500] transition hover:-translate-y-0.5">
                          Enroll ₹999 <ArrowUpRight size={17} />
                        </a>
                      )}
                    </div>
                  ) : (
                    <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--surface)] px-4 py-2.5 text-xs font-extrabold text-[var(--muted)]">Join WhatsApp for updates →</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section data-track-area="apps" id="apps" className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
          <div className="mx-auto max-w-2xl text-center px-1"><span className="inline-flex items-center gap-2 rounded-full bg-[#fff0d5] px-3 py-1.5 text-[11px] font-extrabold tracking-[0.14em] text-[#b45309] uppercase"><Smartphone size={14} /> Built by our mentor</span><h2 className="font-display mt-4 text-[clamp(1.7rem,7vw,2.6rem)] leading-[1.05] font-extrabold text-[var(--ink)] text-balance">Real apps. <span className="text-[#e35d00]">Real learning.</span></h2></div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {apps.map(a => <a key={a.name} href={a.href} target="_blank" rel="noopener" className="group overflow-hidden rounded-[1.4rem] border border-[var(--line)] bg-[var(--card)] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><img src={a.img} alt={`${a.name} app`} loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]" /><div className="flex items-center justify-between p-5"><div><p className="text-[11px] font-extrabold uppercase tracking-wider text-[#e35d00]">{a.tag}</p><h3 className="font-display mt-1 text-[20px] font-extrabold text-[var(--ink)]">{a.name}</h3></div><ArrowUpRight size={20} className="text-[var(--muted)]" /></div></a>)}
          </div>
          <div className="mt-6 flex flex-col items-center gap-3 text-center"><p className="text-[13px] text-[var(--muted)]">Workshop re ei bhali app banheba ra rasta sikhiba.</p><div className="flex flex-wrap justify-center gap-3"><a href={BOOTCAMP_PATH} className="inline-flex items-center gap-2 rounded-full bg-[#0f1424] px-5 py-3 text-sm font-extrabold text-white">Join FREE Bootcamp <ArrowRight size={16} /></a><a href={CHANNEL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-[#18a34a] px-5 py-3 text-sm font-extrabold text-white"><MessageCircle size={16} /> WhatsApp Channel</a><a href={FB} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-[#1877f2] px-5 py-3 text-sm font-extrabold text-white">Join FB Page <ArrowUpRight size={16} /></a></div></div>
        </section>
      </main>

      <footer data-track-area="footer" className="bg-[#080c18] text-white"><div className="mx-auto max-w-6xl px-4 py-10 sm:px-6"><div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between"><a href={BRAND} target="_blank" rel="noopener" aria-label="CodeBitByBit — Learn, Build, Launch" className="inline-block"><img src={wordmark} alt="CodeBitByBit — Learn, Build, Launch" loading="lazy" className="h-28 w-auto rounded-2xl" /></a><nav className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm font-semibold"><a href={BOOTCAMP_PATH} className="text-amber-300">FREE AI Bootcamp</a><a href={FULLSTACK_PATH} className="text-amber-300">Full Stack Bootcamp (₹999)</a><a href={PROFILE} target="_blank" rel="noopener" className="text-white/80 hover:text-white">Mentor Profile ↗</a><a href={NEXO} target="_blank" rel="noopener" className="text-white/80 hover:text-white">NexoPlayer ↗</a><a href={KATHAA} target="_blank" rel="noopener" className="text-white/80 hover:text-white">Kathaa.app ↗</a><a href={CHANNEL} target="_blank" rel="noopener" className="text-emerald-300">WhatsApp Channel ↗</a><a href={FB} target="_blank" rel="noopener" className="text-sky-300">Facebook Page ↗</a><a href={BRAND} target="_blank" rel="noopener" className="text-white/80 hover:text-white">CodeBitByBit ↗</a></nav></div><div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/50 sm:flex-row sm:justify-between"><span>© CodeBitByBit • Learn | Build | Launch</span><span>Odia re AI sikha, nije app banha.</span></div></div></footer>
    </div>
  );
}
