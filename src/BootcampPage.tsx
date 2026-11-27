import React, { useEffect, useState } from "react";
import logo from "./assets/img/codebitbybit-logo.png";
import liveImg from "./assets/img/live-workshop.webp";
import dreamImg from "./assets/img/dream.webp";
import imagineImg from "./assets/img/imagine-ai.webp";
import qissaImg from "./assets/img/qissa.webp";
import gameSteps from "./assets/img/game-steps.webp";
import gameChar from "./assets/img/game-character.webp";
import nexoImg from "./assets/img/nexoplayer.webp";
import nexoLogo from "./assets/img/nexoplayer-logo.webp";
import kathaaImg from "./assets/img/kathaa.webp";
import kathaaLogo from "./assets/img/kathaa-logo.webp";
import mentorImg from "./assets/img/mentor.webp";
import fitpulseImg from "./assets/img/fitpulse.webp";
import fitDashImg from "./assets/img/fitness-dashboard.webp";
import cineImg from "./assets/img/cineverse.webp";
import velfyImg from "./assets/img/velfy.webp";
import wordmark from "./assets/img/logo-wordmark.webp";
import girlImg from "./assets/img/girl-coder.webp";
import editorImg from "./assets/img/video-editor.webp";
import runnerImg from "./assets/img/game-runner.webp";
import notesImg from "./assets/img/notenest.webp";
import flutterImg from "./assets/img/flutter-multiplatform.webp";
import pathImg from "./assets/img/learning-path.webp";
import vlogImg from "./assets/img/vlog-editor.webp";
import shringarImg from "./assets/img/shringar.webp";
import { track } from "./tracking";
import PlyrYoutubePlayer from "./PlyrYoutubePlayer";
import { FULLSTACK_PATH } from "./routes";
import { ArrowRight, ArrowUpRight, BadgeCheck, Brain, Check, ChevronRight, Gamepad2, Globe, MessageCircle, Mic, Music, Play, Smartphone, Sparkles, Star, Users, Video, Volume2 } from "lucide-react";

const VIDEO = `${import.meta.env.BASE_URL}media/bootcamp-intro.mp4`;
const POSTER = `${import.meta.env.BASE_URL}media/bootcamp-intro-poster.jpg`;
const FORM = "https://forms.gle/6Nis15gEsEm7nnWu7";
const CHANNEL = "https://whatsapp.com/channel/0029VbDnzsqHrDZpCa9z473T";
const PAY = "https://rzp.io/rzp/FHmmch5";
const PAID_BOOTCAMP_CHECKOUT = "https://rzp.io/rzp/gi2dk7aW";
const YT_WORKSHOP_ID = "yCNGgr1f63U";
const PROFILE = "https://chandrakantabehera.dev/";
const NEXO = "https://nexoplayer.chandrakantabehera.dev/";
const KATHAA = "https://kathaa.app/";
const BRAND = "https://codebitbybit.com/";

const pills = ["Build Mobile App", "Create Website", "Make Game"];
const learn = [
  { icon: Brain, title: "What is AI + LLM?", text: "AI kana? Computer kemiti bujhe — sarala bhasare." },
  { icon: Sparkles, title: "ChatGPT + Gemini + Meta AI + Claude", text: "4 ta popular AI tool ku daily kaamare byabahara kariba." },
  { icon: Mic, title: "ElevenLabs Voice in Odia", text: "Nija Odia voice re audio, story au video banha." },
  { icon: Music, title: "Suno AI Music", text: "Gita, background music au jingle — nije tiare kariba." },
  { icon: Video, title: "Google Flow Video", text: "Idea ru sundar video — prompt lekhiba sikhiba." },
  { icon: Star, title: "Best AI Learning Path", text: "Kouthu arambha kariba, kemiti agaku badhiba — clear rasta." },
];
const steps = [
  { n: "01", t: "Idea", d: "Tumara idea ku Odia re lekha." },
  { n: "02", t: "AI Prompt", d: "AI ku thik bhabe kahiba sikha." },
  { n: "03", t: "Design", d: "Screen, colour au look tiare kara." },
  { n: "04", t: "Build", d: "App / Website / Game banha." },
  { n: "05", t: "Launch", d: "Duniare sabu nku dekhaha." },
];
const showcase = [
  { name: "QISSA", tag: "Story / Drama App", desc: "Kahani, drama au video — sabu gote sundar app re.", img: qissaImg, logo: logo, alt: "QISSA app screens showing story and drama interfaces", link: FORM, label: "Learn to build like this" },
  { name: "NexoPlayer", tag: "Audio + Media Hub", desc: "Audiobook, music, PDF au media — sabu gote jagare.", img: nexoImg, logo: nexoLogo, alt: "NexoPlayer premium video playback screen", link: NEXO, label: "Explore App" },
  { name: "Kathaa.app", tag: "History Audio OTT", desc: "Itihasa kahani ku suniba — TV + phone re audio OTT.", img: kathaaImg, logo: kathaaLogo, alt: "Kathaa.app history story banner — 21 vs 10,000 Saragarhi", link: KATHAA, label: "Explore App" },
];

const galleryTabs = ["All", "Mobile App", "OTT & Video", "Game", "Multi-platform"] as const;
const gallery = [
  { cat: "Mobile App", title: "FitPulse", tag: "Fitness App", desc: "Workout, steps au calories track kara.", img: fitpulseImg },
  { cat: "OTT & Video", title: "CineVerse", tag: "OTT Streaming App", desc: "Movie, series au live TV — gote app re.", img: cineImg },
  { cat: "Mobile App", title: "Velfy", tag: "AI Habit Coach", desc: "Habit, widget, reminder au AI coach.", img: velfyImg },
  { cat: "Game", title: "Runner Game", tag: "Mobile Game", desc: "Character, level au coins sahita game.", img: runnerImg },
  { cat: "Mobile App", title: "NoteNest", tag: "AI Notes App", desc: "Notes, tasks au AI assistant ekathi.", img: notesImg },
  { cat: "OTT & Video", title: "Pro Video Editor", tag: "Video Editing App", desc: "Timeline, music, text au effects.", img: editorImg },
  { cat: "Mobile App", title: "Shringar", tag: "Booking App + CMS", desc: "Customer booking app au owner dashboard.", img: shringarImg },
  { cat: "Multi-platform", title: "One Code, All Devices", tag: "Flutter App", desc: "Android, iOS, Web au Desktop — gote code re.", img: flutterImg },
  { cat: "Mobile App", title: "Fitness Dashboard", tag: "Health App UI", desc: "Daily goal, plan au progress dashboard.", img: fitDashImg },
  { cat: "OTT & Video", title: "Travel Vlog Editor", tag: "Easy Video Editor", desc: "Vlog ku sahaja re edit kara.", img: vlogImg }
];

function BuildGallery() {
  const [tab, setTab] = useState<(typeof galleryTabs)[number]>("All");
  const [showAll, setShowAll] = useState(false);
  const items = tab === "All" ? gallery : gallery.filter(g => g.cat === tab);
  const hideExtra = tab === "All" && !showAll;
  return (
    <section data-track-area="build_gallery" id="gallery" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16">
      <SectionHead kicker="What you can build • Tume ki banai paribe" title={<>Idea ru app — <span className="text-[#ff6b1a]">AI sahita.</span></>} sub="Fitness app, OTT, notes app, video editor, game — emiti project idea ku AI tools re kemiti build kariba, workshop re step by step dekhiba." />
      <div aria-label="Project type" className="no-scrollbar -mx-4 mt-7 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
        {galleryTabs.map(t => <button key={t} type="button" aria-pressed={tab === t} onClick={() => setTab(t)} className={`shrink-0 rounded-full px-4 py-2 text-sm font-extrabold transition ${tab === t ? "bg-[var(--ink)] text-white shadow-md" : "border border-[var(--line)] bg-[var(--card)] text-[var(--muted)] hover:text-[var(--ink)]"}`}>{t}</button>)}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
        {items.map((g, i) => <article key={g.title} className={`group overflow-hidden rounded-[1.25rem] border border-[var(--line)] bg-[var(--card)] shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${hideExtra && i >= 6 ? "hidden md:block" : ""}`}><div className="overflow-hidden bg-[#0b1020]"><img src={g.img} alt={`${g.title} — ${g.tag} sample design`} loading="lazy" width={512} height={512} className="aspect-square w-full object-cover transition duration-500 group-hover:scale-[1.04]" /></div><div className="p-3 sm:p-4"><p className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#e35d00]">{g.tag}</p><h3 className="font-display mt-0.5 text-[17px] leading-tight font-extrabold text-[var(--ink)] sm:text-lg">{g.title}</h3><p className="mt-1 text-[12.5px] leading-5 text-[var(--muted)]">{g.desc}</p></div></article>)}
      </div>
      {hideExtra && <button type="button" onClick={() => setShowAll(true)} className="mx-auto mt-4 flex items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--card)] px-5 py-2.5 text-sm font-extrabold text-[var(--ink)] md:hidden">See all {gallery.length} projects <ChevronRight size={16} /></button>}
      <div className="mt-6 flex flex-col items-center gap-3 text-center"><p className="text-[12.5px] text-[var(--muted)]">Sample project designs — workshop re emiti idea ku AI sahita build karibara rasta sikhiba.</p><PrimaryCta label="Mu bhi banaibi — Fill Form" /></div>
    </section>
  );
}

function PrimaryCta({ label = "Fill Form — FREE", className = "" }: { label?: string; className?: string }) {
  return <a href={FORM} target="_blank" rel="noopener" className={`inline-flex items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-5 py-3.5 text-[15px] font-extrabold text-white glow-orange transition hover:-translate-y-0.5 ${className}`}>{label}<ArrowRight size={19} /></a>;
}
function WhatsAppBtn({ href, label, dark = false }: { href: string; label: string; dark?: boolean }) {
  return <a href={href} target="_blank" rel="noopener" className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[15px] font-extrabold transition hover:-translate-y-0.5 ${dark ? "bg-[#18a34a] text-white" : "bg-white text-[#0b7a3c] border border-[#b9efc9]"}`}><MessageCircle size={19} />{label}</a>;
}
function FeaturedVideo() {
  const [Player, setPlayer] = useState<React.ComponentType<{ video: string; poster: string }> | null>(null);
  useEffect(() => {
    import("./HeroPlayer").then(m => setPlayer(() => m.default)).catch(() => {});
  }, []);
  return (
    <div className="relative">
      <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-[#ff6b1a]/40 via-amber-300/20 to-amber-300/30 blur-2xl" />
      <div className="relative overflow-hidden rounded-[1.8rem] border-4 border-white/25 bg-black shadow-2xl" onContextMenu={e => e.preventDefault()}>
        {Player ? (
          <Player video={VIDEO} poster={POSTER} />
        ) : (
          <div className="relative aspect-video w-full bg-black">
            <img src={POSTER} alt="FREE Odia AI Bootcamp intro video" loading="eager" decoding="async" className="block aspect-video w-full object-cover" />
            <span className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white/95 px-5 py-3 text-[13px] font-extrabold text-[#0f1424] shadow-xl"><Volume2 size={18} className="text-[var(--orange)]" /> Watch with sound</span>
          </div>
        )}
      </div>
      <div className="relative mt-3 flex flex-wrap items-center justify-between gap-2">
        <span className="rounded-2xl bg-white px-3 py-2 text-[#0f1424] shadow-xl"><span className="block text-[11px] font-extrabold tracking-wider text-orange-600">NO CODING NEEDED</span><span className="font-display block text-[15px] font-extrabold leading-4">Phone ru arambha kara</span></span>
        <span className="flex items-center gap-2 rounded-2xl bg-[#0b1020]/90 px-3 py-2 text-white shadow-xl ring-1 ring-white/15"><Gamepad2 className="text-amber-300" size={20} /><span className="leading-tight"><span className="block text-[11px] text-white/70">Learn • Build • Launch</span><span className="block text-[13px] font-extrabold">App + Game + Website</span></span></span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <a href="#watch-free-workshop" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-amber-300/50 bg-amber-300/15 px-4 py-2.5 text-xs font-extrabold text-amber-200 transition hover:bg-amber-300/25">
          <Play size={14} className="fill-current" /> Watch Free Workshop Video
        </a>
        <a href={FULLSTACK_PATH} className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-amber-300 px-4 py-2.5 text-xs font-extrabold text-[#211500] shadow-md transition hover:-translate-y-0.5">
          Paid Bootcamp ₹999 <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}
function SectionHead({ kicker, title, sub }: { kicker: string; title: React.ReactNode; sub?: string }) {
  return <div className="mx-auto max-w-2xl text-center px-1"><span className="inline-flex items-center gap-2 rounded-full bg-[#fff0d5] px-3 py-1.5 text-[11px] font-extrabold tracking-[0.14em] text-[#b45309] uppercase"><Sparkles size={14} />{kicker}</span><h2 className="font-display mt-4 text-[clamp(1.85rem,7vw,3rem)] leading-[1.04] font-extrabold text-[var(--ink)] text-balance">{title}</h2>{sub && <p className="mt-3 text-[15px] leading-6 text-[var(--muted)]">{sub}</p>}</div>;
}

export default function BootcampPage() {
  return (
    <div data-safe-area-inset-root style={{ boxSizing: "border-box", paddingTop: "var(--safe-area-inset-top)", minHeight: "100vh", background: "#0b1020" }} className="overflow-x-clip pb-[86px] sm:pb-0">
      {/* TOP BAR */}
      <header data-track-area="header" data-safe-area-sticky-top style={{ top: "var(--safe-area-inset-top)" }} className="sticky z-40 bg-[#0b1020]/95 backdrop-blur border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href={BRAND} target="_blank" rel="noopener" className="flex items-center gap-2 min-w-0">
            <img src={logo} alt="CodeBitByBit logo" width="36" height="36" className="h-9 w-9 rounded-xl object-cover" />
            <span className="leading-none"><span className="font-display block text-[18px] font-extrabold tracking-tight text-white">CodeBitByBit</span><span className="block text-[10px] font-bold tracking-[0.18em] text-amber-300">LEARN • BUILD • LAUNCH</span></span>
          </a>
          <div className="flex items-center gap-2"><span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-3 py-1.5 text-xs font-bold text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-400" />100% FREE</span><a href={FULLSTACK_PATH} className="hidden sm:inline-flex rounded-full border border-amber-300/40 px-3 py-1.5 text-xs font-bold text-amber-300 hover:bg-white/10">Paid Bootcamp ₹999</a><a href={FORM} target="_blank" rel="noopener" className="rounded-full bg-white px-4 py-2 text-[13px] font-extrabold text-[#0b1020]">Join FREE</a></div>
        </div>
      </header>

      {/* 1 HERO */}
      <section data-track-area="hero" className="hero-bg text-white">
        <div className="mx-auto max-w-6xl px-4 pt-6 pb-8 sm:px-6 sm:pt-10 sm:pb-12">
          <div className="grid items-center gap-7 lg:grid-cols-[1.05fr_.95fr]">
            <div className="order-2 lg:order-1">
              <div className="inline-flex flex-wrap items-center gap-2"><span className="rounded-full bg-amber-300 px-3 py-1.5 text-xs font-extrabold text-[#211500]">✦ FREE AI BOOTCAMP</span><span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-bold">Odia + English • Beginner Friendly</span></div>
              <h1 className="font-display mt-5 text-[clamp(2.35rem,10vw,4.55rem)] leading-[0.98] font-extrabold text-balance">Odia re <span className="text-amber-300">AI Sikha,</span><br />Nije App Banaha!</h1>
              <p className="mt-4 text-[17px] leading-7 text-white/85 max-w-xl">FREE AI Bootcamp — Learn AI. Build App. Make Game. In Odia. <span className="font-odia text-white">Tumara idea, AI sahajya re, bastaba app heba.</span></p>
              <div className="mt-5 flex flex-wrap gap-2">{pills.map(p => <span key={p} className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[13px] font-bold"><Check size={15} className="text-amber-300" />{p}</span>)}</div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><PrimaryCta className="w-full sm:w-auto" /><WhatsAppBtn href={CHANNEL} label="Join WhatsApp Channel" /></div>
              <div className="mt-5 flex items-start gap-2 text-[13px] leading-5 text-white/80"><BadgeCheck className="mt-0.5 shrink-0 text-emerald-300" size={18} /><span><b className="text-white">100% FREE Workshop.</b> No coding needed. Phone is enough to start. Step by step, Odia re bujhiba.</span></div>
              <div className="mt-6 flex items-center gap-3"><div className="flex -space-x-2"><span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#232a44] bg-amber-300 text-xs font-extrabold text-black">AI</span><span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#232a44] bg-orange-500 text-xs font-extrabold">OD</span><span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#232a44] bg-[#ff6b1a] text-xs font-extrabold">BB</span></div><p className="text-[13px] leading-4 text-white/75">Beginner mananka pain<br /><b className="text-white">tiare heichi bootcamp.</b></p></div>
            </div>
            <div className="order-1 lg:order-2">
              <FeaturedVideo />
            </div>
          </div>
        </div>
        <div className="bg-white/10 py-3 overflow-hidden"><div className="mx-auto flex max-w-6xl items-center justify-center gap-5 overflow-x-auto no-scrollbar whitespace-nowrap px-4 text-[13px] font-bold text-white/90"><span>✦ ODIA RE SIKHA</span><span>✦ STEP BY STEP</span><span>✦ AI TOOLS</span><span>✦ REAL APPS</span><span>✦ COMMUNITY</span></div></div>
      </section>

      <main className="bg-[var(--surface)]">
        {/* WATCH FREE WORKSHOP (PLYR YOUTUBE) */}
        <section data-track-area="watch_free_workshop" id="watch-free-workshop" className="mx-auto max-w-5xl scroll-mt-24 px-4 pt-12 sm:px-6 sm:pt-16">
          <SectionHead kicker="Watch the Free Workshop • Odia" title={<>Watch making apps with AI <span className="text-[#ff6b1a]">in Odia — FREE</span></>} sub="Pura free workshop video dekha — au jadi 1-month live Full Stack AI Bootcamp join karibaku chahucha, tale enroll kara." />
          <div className="mt-7 rounded-[1.8rem] border border-[var(--line)] bg-[#0b1020] p-3 shadow-2xl sm:p-5">
            <PlyrYoutubePlayer videoId={YT_WORKSHOP_ID} title="Watch Free Odia AI Workshop" />
            <div className="mt-4 flex flex-col items-center justify-between gap-4 rounded-2xl bg-white/5 p-4 text-white sm:flex-row">
              <div className="text-center sm:text-left">
                <p className="font-display text-lg font-extrabold text-amber-300">Want the 1-Month Full Stack AI Bootcamp? (₹999)</p>
                <p className="text-xs text-white/75">Build 3–4 real apps + NexoPlayer, Kathaa & StoryVerse bundle. Details sent to your email after payment verification.</p>
              </div>
              <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                <a href={PAID_BOOTCAMP_CHECKOUT} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-5 py-3 text-sm font-extrabold text-white glow-orange transition hover:-translate-y-0.5">Enroll in Paid Bootcamp ₹999 <ArrowRight size={16} /></a>
                <a href={FULLSTACK_PATH} className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/25 px-4 py-3 text-sm font-bold text-white hover:bg-white/10">View Course Page</a>
              </div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <WhatsAppBtn href={CHANNEL} label="Join WhatsApp Channel" dark />
            <PrimaryCta label="Fill Free Form" />
          </div>
        </section>

        {/* 2 LEARN */}
        <section data-track-area="learn" id="learn" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16">
          <SectionHead kicker="What you will learn" title={<>Tume kana kana <span className="text-[#ff6b1a]">sikhiba?</span></>} sub="Bhaya nahi. Sabu sarala Odia + English re, ekathi ekathi, udaharan sahita." />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learn.map((c) => <article key={c.title} className="rounded-[1.4rem] border border-[var(--line)] bg-[var(--card)] p-5 glow-card"><div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff0d5] text-[#e35d00]"><c.icon size={22} /></div><h3 className="font-display mt-4 text-[19px] font-extrabold leading-6 text-[var(--ink)]">{c.title}</h3><p className="mt-1.5 text-[14px] leading-6 text-[var(--muted)]">{c.text}</p></article>)}
          </div>
          <div className="mt-6 grid overflow-hidden rounded-[1.6rem] bg-[#141a2e] text-white shadow-xl md:grid-cols-2">
            <img src={liveImg} alt="FREE AI Bootcamp LIVE workshop with learners" loading="lazy" className="aspect-[1199/1312] w-full object-cover md:h-full md:aspect-auto" />
            <div className="p-6 sm:p-8"><span className="rounded-full bg-red-500 px-3 py-1 text-xs font-extrabold">● LIVE • INTERACTIVE</span><h3 className="font-display mt-4 text-[clamp(1.6rem,6vw,2.3rem)] leading-tight font-extrabold">Dekha, sikha,<br />sange sange <span className="text-amber-300">banha.</span></h3><p className="mt-3 text-[15px] leading-6 text-white/80">Theory kebala nahi. Live demo, real prompt, real output. Tume nije try kariba — au bhul hele guide miliba.</p><div className="mt-5 flex flex-wrap gap-3"><PrimaryCta label="Join FREE Bootcamp" /><a href="#join" className="inline-flex items-center gap-1 rounded-full border border-white/30 px-4 py-3 text-sm font-bold">How to join <ChevronRight size={16} /></a></div></div>
          </div>
        </section>

        {/* DREAM BREAK */}
        <section data-track-area="dream" className="mx-auto max-w-6xl px-4 pb-12 sm:px-6"><div className="grid items-center gap-6 overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-[#ffb400] to-[#ff6b1a] p-5 text-[#221300] sm:p-8 md:grid-cols-[.9fr_1.1fr]"><img src={dreamImg} loading="lazy" alt="Girl thinking about her AI dream and future app idea" className="aspect-[16/10] w-full rounded-[1.2rem] object-cover shadow-lg" /><div><p className="text-xs font-extrabold tracking-[0.18em]">TUMARA SWAPNA • YOUR DREAM</p><h3 className="font-display mt-2 text-[clamp(1.7rem,7vw,2.6rem)] leading-[1.05] font-extrabold">Swapna dekhila?<br />Ebe tiare kariba.</h3><p className="mt-3 text-[15px] leading-6 font-medium">Bada app banheba pain bada degree darkar nahi. Darkar — thik guide, thik tool, au gote chhota first step.</p><a href={FORM} target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0f1424] px-5 py-3 text-sm font-extrabold text-white">Take first step — FREE <ArrowRight size={17} /></a></div></div></section>

        {/* 3 AI TOOLS TO APP */}
        <section data-track-area="ai_tools" id="tools" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-14 sm:px-6 sm:pb-20">
          <SectionHead kicker="AI Tools to App" title={<>AI Tools ru Mobile App,<br />Game, Website <span className="text-[#e35d00]">Sabu Baniba.</span></>} sub="Idea manare achi? AI sehi idea ku design, voice, music, video au app re badalei deba." />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <img src={imagineImg} loading="lazy" alt="ImagineAI app screens showing AI tools turned into a mobile app" className="aspect-[4/3] w-full rounded-[1.4rem] object-cover shadow-lg" />
            <img src={qissaImg} loading="lazy" alt="QISSA app screens built with AI tools" className="aspect-[4/3] w-full rounded-[1.4rem] object-cover shadow-lg" />
            <div className="grid grid-cols-2 gap-4"><img src={gameSteps} loading="lazy" alt="Game development workshop steps from idea to build" className="aspect-square w-full rounded-[1.4rem] object-cover shadow-lg" /><img src={gameChar} loading="lazy" alt="3D game character created for game building" className="aspect-square w-full rounded-[1.4rem] object-cover shadow-lg" /></div>
          </div>
          <div className="mt-5 overflow-hidden rounded-[1.6rem] border border-[var(--line)] bg-[var(--card)] p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3"><h3 className="font-display text-xl font-extrabold text-[var(--ink)]">Simple Flow — 5 Steps</h3><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold text-emerald-700">Beginner Friendly</span></div>
            <div className="mt-5 grid items-center gap-5 md:grid-cols-[minmax(0,300px)_1fr]"><img src={pathImg} loading="lazy" width={512} height={512} alt="AI learning path from idea to launch" className="aspect-square w-full max-w-[300px] justify-self-center rounded-2xl object-cover shadow-lg" /><ol className="grid gap-3 sm:grid-cols-2">{steps.map((s, i) => <li key={s.t} className={`flex gap-3 rounded-2xl bg-[var(--surface)] p-4 ${i === 4 ? "sm:col-span-2" : ""}`}><span className="font-display grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#ff6b1a] text-lg font-extrabold text-white">{s.n}</span><div><h4 className="font-display text-lg leading-tight font-extrabold text-[var(--ink)]">{s.t}</h4><p className="mt-0.5 text-[13px] leading-5 text-[var(--muted)]">{s.d}</p></div></li>)}</ol></div>
            <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#0f1424] p-5 text-white sm:flex-row sm:items-center"><div><p className="font-display text-lg font-extrabold">Idea achi? Ebe action nia.</p><p className="text-sm text-white/70">Form bhara — workshop re dekhiba kemiti idea app hue.</p></div><PrimaryCta /></div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[["Smartphone", "Mobile App", "Phone re chaliba bhala app."], ["Globe", "Website", "Nija naam re website."], ["Gamepad2", "Game", "Kheliba bhala game tiare kara."]].map(([icon, t, d]) => { const Icon = icon === "Smartphone" ? Smartphone : icon === "Globe" ? Globe : Gamepad2; return <div key={t} className="flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#fff1e6] text-[#e35d00]"><Icon size={22} /></span><div><h4 className="font-display font-extrabold text-[var(--ink)]">{t}</h4><p className="text-[13px] text-[var(--muted)]">{d}</p></div></div>; })}
          </div>
        </section>

        <BuildGallery />

        {/* 4 SHOWCASE */}
        <section data-track-area="showcase" id="showcase" className="bg-[#0b1020] py-14 text-white sm:py-20 scroll-mt-24"><div className="mx-auto max-w-6xl px-4 sm:px-6"><div className="mx-auto max-w-2xl text-center"><span className="rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-extrabold tracking-[0.14em] text-amber-300">SHOWCASE</span><h2 className="font-display mt-4 text-[clamp(1.9rem,7vw,3rem)] leading-[1.05] font-extrabold">Emiti app tume <span className="text-amber-300">sikhiba.</span></h2><p className="mt-3 text-white/70">Real apps. Real idea. Workshop re tume ei bhali app banheba ra rasta dekhiba.</p></div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">{showcase.map(s => <article key={s.name} className="overflow-hidden rounded-[1.5rem] bg-white text-[#0f1424] shadow-2xl"><img src={s.img} alt={s.alt} loading="lazy" className="aspect-[16/10] w-full object-cover" /><div className="p-5"><span className="rounded-full bg-[#fff0d5] px-3 py-1 text-[11px] font-extrabold text-[#9a4a00]">{s.tag}</span><h3 className="font-display mt-3 flex items-center gap-2 text-[24px] font-extrabold"><img src={s.logo} alt="" className="h-8 w-8 rounded-lg bg-[#0b1020] object-cover" />{s.name}</h3><p className="mt-1 text-[14px] leading-6 text-slate-600">{s.desc}</p><a href={s.link} target="_blank" rel="noopener" className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0f1424] px-4 py-3 text-sm font-extrabold text-white"> {s.label} <ArrowUpRight size={17} /></a></div></article>)}</div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-center text-[13px] text-white/70"><span>AI → App</span><span className="text-amber-300">•</span><span>AI → Website</span><span className="text-amber-300">•</span><span>AI → Game</span><span className="text-amber-300">•</span><span>AI → Audio + Video</span></div>
        </div></section>

        {/* 5 MENTOR */}
        <section data-track-area="mentor" id="mentor" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16"><div className="grid items-center gap-7 overflow-hidden rounded-[1.8rem] border border-[var(--line)] bg-[var(--card)] p-5 sm:p-8 lg:grid-cols-[.85fr_1.15fr]"><div className="relative"><img src={mentorImg} alt="Chandrakanta Behera, mentor of the FREE Odia AI Bootcamp" loading="lazy" className="aspect-square w-full rounded-[1.4rem] object-cover lg:aspect-[4/4.2]" /><div className="absolute -bottom-3 left-4 rounded-2xl bg-white px-4 py-3 shadow-xl"><p className="text-[11px] font-extrabold tracking-wider text-orange-600">YOUR GUIDE</p><p className="font-display text-lg font-extrabold text-[#0f1424]">Odia re, step by step</p></div></div><div><span className="rounded-full bg-[#fff1e6] px-3 py-1.5 text-xs font-extrabold text-[#e35d00]">YOUR MENTOR</span><h2 className="font-display mt-4 text-[clamp(1.8rem,7vw,2.8rem)] leading-[1.05] font-extrabold text-[var(--ink)]">Chandrakanta Behera</h2><p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">Builder of <b className="text-[var(--ink)]">Kathaa, NexoPlayer, CodeBitByBit.</b> Teaches in Odia + English, step by step. Kothin katha ku sarala kariba — sei hi aama style.</p><div className="mt-5 grid gap-2 sm:grid-cols-3">{[["Kathaa", "History Audio OTT", KATHAA], ["NexoPlayer", "Audio + Media Hub", NEXO], ["CodeBitByBit", "Learn • Build • Launch", BRAND]].map(([a, b, href]) => <a key={a} href={href} target="_blank" rel="noopener" className="rounded-2xl bg-[var(--surface)] p-3 transition hover:-translate-y-0.5"><p className="font-display flex items-center gap-1 font-extrabold text-[var(--ink)]">{a}<ArrowUpRight size={14} /></p><p className="text-xs text-[var(--muted)]">{b}</p></a>)}</div><a href={PROFILE} target="_blank" rel="noopener" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0f1424] px-5 py-3.5 text-sm font-extrabold text-white">View Profile <ArrowUpRight size={17} /></a></div></div></section>

        {/* 6 JOIN */}
        <section data-track-area="join" id="join" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-12 sm:px-6 sm:pb-16">
          <SectionHead kicker="How to join • Kemiti join kariba" title={<>3 ta sahaja step.<br /><span className="text-[#ff6b1a]">Bas etiki.</span></>} sub="Form ta main. Channel + Group — tume connected rahiba pain, update au doubt pain." />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <article className="relative overflow-hidden rounded-[1.6rem] bg-[#0f1424] p-6 text-white shadow-xl ring-4 ring-amber-300"><span className="absolute right-4 top-4 rounded-full bg-amber-300 px-3 py-1 text-[11px] font-extrabold text-black">★ MAIN STEP</span><span className="font-display text-5xl font-extrabold text-amber-300">1</span><h3 className="font-display mt-3 text-[22px] font-extrabold">Fill Google Form</h3><p className="mt-2 text-[14px] leading-6 text-white/75">“Do you want to make apps with AI?” — Form re ei prashna ra uttara dia. 2 minute re sesa.</p><a href={FORM} target="_blank" rel="noopener" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff6b1a] px-4 py-3.5 text-sm font-extrabold">Fill Form — FREE <ArrowRight size={17} /></a></article>
            <article className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--card)] p-6"><span className="font-display text-5xl font-extrabold text-emerald-500">2</span><h3 className="font-display mt-3 text-[22px] font-extrabold text-[var(--ink)]">Join WhatsApp Channel</h3><p className="mt-2 text-[14px] leading-6 text-[var(--muted)]">Update, date, link au nua workshop khabar — sabu channel re paiba. Miss kariba nahi.</p><a href={CHANNEL} target="_blank" rel="noopener" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#18a34a] px-4 py-3.5 text-sm font-extrabold text-white"><MessageCircle size={17} /> Join Channel</a></article>
            <article className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--card)] p-6"><span className="font-display text-5xl font-extrabold text-[#e35d00]">3</span><h3 className="font-display mt-3 text-[22px] font-extrabold text-[var(--ink)]">Get Group Invite in Channel</h3><p className="mt-2 text-[14px] leading-6 text-[var(--muted)]">Spam-free community pain, WhatsApp Group link channel bhitare share hue — doubts & live links sabu sethire miliba.</p><a href="#watch-free-workshop" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0f1424] px-4 py-3.5 text-sm font-extrabold text-white"><Play size={17} /> Watch Free Workshop</a></article>
          </div>

          <div className="mt-5 overflow-hidden rounded-[1.6rem] border-2 border-dashed border-[#ff6b1a] bg-[#fffaf0] p-5 sm:p-7">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div className="max-w-2xl"><span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-extrabold text-[#b45309]"><Check size={15} /> FORM RE GOTE TICK • ONE FORM ONLY</span><h3 className="font-display mt-3 text-[clamp(1.45rem,6vw,2.1rem)] leading-tight font-extrabold text-[#221300]">Form re tick kara:<br />“Do you want QISSA source code also?”</h3><p className="mt-3 text-[15px] leading-6 text-[#6b4d2a]">2 ta form bhariba darkar nahi. Gote form re sabu.</p></div><a href={FORM} target="_blank" rel="noopener" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#0f1424] px-6 py-4 text-sm font-extrabold text-white">Open Google Form <ArrowUpRight size={17} /></a></div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2"><div className="rounded-2xl bg-white p-4 shadow-sm"><p className="font-display text-lg font-extrabold text-emerald-600">If NO ✓</p><p className="mt-1 text-[14px] leading-6 text-slate-600">Tume kebala workshop re join haba. Bas. Free bootcamp ra sabu update paiba.</p></div><div className="rounded-2xl bg-white p-4 shadow-sm"><p className="font-display text-lg font-extrabold text-[#e35d00]">If YES → Payment</p><p className="mt-1 text-[14px] leading-6 text-slate-600">Form pare tume payment page ku jiba. Workshop ta ebe bhi FREE. Pack kebala optional.</p></div></div>
          </div>
        </section>

        {/* 7 UPSELL - secondary */}
        <section data-track-area="qissa_pack" className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 sm:pb-16"><div className="rounded-[1.4rem] border-2 border-amber-300 bg-[#fffdf5] p-5 sm:p-6"><div className="flex flex-wrap items-center justify-between gap-3"><span className="rounded-full bg-amber-100 px-3 py-1.5 text-[11px] font-extrabold tracking-wider text-amber-900">OPTIONAL — SECONDARY</span><span className="text-xs font-bold text-slate-500">Not the main workshop</span></div><div className="mt-4 grid gap-5 sm:grid-cols-[1fr_1.15fr]"><img src={qissaImg} loading="lazy" alt="QISSA app screens included in optional source code pack" className="aspect-[16/10] w-full rounded-2xl object-cover" /><div><h3 className="font-display text-[clamp(1.35rem,6vw,1.9rem)] leading-tight font-extrabold text-[#221300]">Want QISSA App Source Code + Asset Pack? <span className="text-[#e35d00]">₹499</span></h3><ul className="mt-3 space-y-2 text-[13.5px] leading-5 text-slate-700">{["QISSA mobile application source code", "Complete UI screens and layouts", "Application graphics and asset pack", "Onboarding, Home, Explore and Video Player screens", "Rewards, Premium and Profile interfaces"].map(x => <li key={x} className="flex gap-2"><span className="tick !h-5 !w-5 text-[12px]">✓</span><span>{x}</span></li>)}</ul><a href={PAY} target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-[#0f1424] shadow-md ring-1 ring-amber-300">Buy QISSA Pack ₹499 <ArrowUpRight size={16} /></a></div></div><p className="mt-4 border-t border-amber-200 pt-3 text-[11.5px] leading-5 text-slate-500">Workshop is FREE. This pack is completely optional. Delivery within 7 business days after workshop. Personal student-use license. You can modify and monetise your own app. Reselling original source not allowed. Digital purchase non-refundable, subject to applicable consumer rights. Learning proof-of-concept, not full production OTT.</p></div></section>

        {/* 8 STAY CONNECTED */}
        <section data-track-area="stay_connected" id="community" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-14 sm:px-6"><div className="relative grid items-center gap-4 overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-[#0b1020] via-[#1a2036] to-[#7a2e08] p-6 text-center text-white sm:p-10 md:grid-cols-[1fr_260px] md:text-left"><div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#ff6b1a]/30 blur-3xl" /><img src={girlImg} alt="Student building an app with AI on a laptop" loading="lazy" width={512} height={512} className="relative order-first mx-auto h-44 w-44 object-contain drop-shadow-2xl sm:h-56 sm:w-56 md:order-last md:h-64 md:w-64" /><div className="relative"><h2 className="font-display mx-auto mt-0 md:mx-0 max-w-2xl text-[clamp(1.8rem,7vw,2.9rem)] leading-[1.05] font-extrabold">Miss kariba nahi.<br />Connected ruha.</h2><p className="mx-auto mt-3 max-w-xl text-[15px] leading-6 text-white/85 md:mx-0">Join our WhatsApp Channel so you don't miss upcoming workshops where we build apps like QISSA live. Private community group link is shared inside the channel.</p><div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row md:justify-start"><a href={CHANNEL} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#18a34a] px-6 py-4 text-[15px] font-extrabold text-white"><MessageCircle size={19} /> Join WhatsApp Channel</a></div><p className="mt-5 text-[13px] text-white/70">Pahile form bhara, tapare WhatsApp Channel re join kara — group invite & sabu khabar sethire paiba.</p></div></div></section>
      </main>

      {/* 9 FOOTER */}
      <footer data-track-area="footer" className="bg-[#080c18] text-white"><div className="mx-auto max-w-6xl px-4 py-10 sm:px-6"><div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between"><div><a href={BRAND} target="_blank" rel="noopener" aria-label="CodeBitByBit — Learn, Build, Launch" className="inline-block"><img src={wordmark} alt="CodeBitByBit — Learn, Build, Launch" loading="lazy" className="h-28 w-auto rounded-2xl" /></a><p className="mt-3 max-w-sm text-sm leading-6 text-white/65">Learn | Build | Launch — Odia re AI sikha, nije app banha. Beginner mananka pain, step by step.</p></div><nav className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm font-semibold"><a href={PROFILE} target="_blank" rel="noopener" className="text-white/80 hover:text-white">Mentor Profile ↗</a><a href={NEXO} target="_blank" rel="noopener" className="text-white/80 hover:text-white">NexoPlayer ↗</a><a href={KATHAA} target="_blank" rel="noopener" className="text-white/80 hover:text-white">Kathaa.app ↗</a><a href={BRAND} target="_blank" rel="noopener" className="text-white/80 hover:text-white">CodeBitByBit ↗</a><a href={FORM} target="_blank" rel="noopener" className="text-amber-300">Fill Form — FREE ↗</a><a href={CHANNEL} target="_blank" rel="noopener" className="text-emerald-300">WhatsApp Channel ↗</a></nav></div><div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/50 sm:flex-row sm:justify-between"><span>© CodeBitByBit • FREE AI Bootcamp</span><span>No fake urgency. Workshop is FREE. Optional pack only.</span></div></div></footer>

      {/* STICKY MOBILE CTA */}
      <div data-track-area="sticky_mobile_cta" className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0b1020]/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur sm:hidden">
        <div className="flex gap-2"><a href={FORM} target="_blank" rel="noopener" className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#ff6b1a] px-4 py-3.5 text-[15px] font-extrabold text-white">Fill Form — FREE <ArrowRight size={18} /></a><a href={CHANNEL} target="_blank" rel="noopener" aria-label="Join WhatsApp Channel" className="grid w-12 place-items-center rounded-full bg-[#18a34a] text-white"><MessageCircle size={22} /></a></div>
        <p className="mt-1.5 text-center text-[11px] font-semibold text-white/60">100% FREE • No coding needed • Channel + Group for updates</p>
      </div>
    </div>
  );
}
