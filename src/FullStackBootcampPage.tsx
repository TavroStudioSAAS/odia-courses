import React from "react";
import logo from "./assets/img/codebitbybit-logo.png";
import wordmark from "./assets/img/logo-wordmark.webp";
import bannerImg from "./assets/img/fullstack-bootcamp-banner.jpg";
import storyverseImg from "./assets/img/storyverse-screens.jpg";
import nexoLogo from "./assets/img/nexoplayer-logo.webp";
import kathaaLogo from "./assets/img/kathaa-logo.webp";
import mentorImg from "./assets/img/mentor.webp";
import PlyrYoutubePlayer from "./PlyrYoutubePlayer";
import { BOOTCAMP_PATH } from "./routes";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Calendar,
  Check,
  Clock,
  Code2,
  Gift,
  Headphones,
  Infinity as InfinityIcon,
  Layers,
  Mail,
  MessageCircle,
  Play,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const CHECKOUT = "https://rzp.io/rzp/gi2dk7aW";
const CHANNEL = "https://whatsapp.com/channel/0029VbDnzsqHrDZpCa9z473T";
const GROUP = "https://chat.whatsapp.com/DKlZz84PfZeGFtBIreYzbP";
const FORM = "https://forms.gle/6Nis15gEsEm7nnWu7";
const PROFILE = "https://chandrakantabehera.dev/";
const NEXO = "https://nexoplayer.chandrakantabehera.dev/";
const KATHAA = "https://kathaa.app/";
const BRAND = "https://codebitbybit.com/";
const YT_VIDEO_ID = "yCNGgr1f63U";

const bundle = [
  {
    name: "NexoPlayer",
    benefit: "Lifetime Access",
    mrp: "₹2,499",
    badge: "FREE",
    img: nexoLogo,
  },
  {
    name: "Kathaa",
    benefit: "1 Year Premium",
    mrp: "₹699",
    badge: "FREE",
    img: kathaaLogo,
  },
  {
    name: "StoryVerse",
    benefit: "Source Code",
    mrp: "₹999",
    badge: "FREE",
    img: logo,
  },
  {
    name: "1:1 Mentor Support",
    benefit: "Live Doubt & Guidance",
    mrp: "",
    badge: "Included",
    icon: Headphones,
  },
];

const features = [
  { icon: Calendar, title: "1 Month Live Bootcamp", desc: "Starts This Saturday — structured live sessions." },
  { icon: Clock, title: "4 Hours / Week", desc: "Sat & Sun, 7–9 PM — easy to attend alongside college or job." },
  { icon: Users, title: "Private Community Group", desc: "Direct peer & mentor support in our private group." },
  { icon: InfinityIcon, title: "Lifetime Course Recordings", desc: "Rewatch every class anytime at your own pace." },
  { icon: Layers, title: "Projects, Code & Resources", desc: "Build 3–4 real apps with full source code & assets." },
  { icon: Rocket, title: "Build, Deploy & Monetise", desc: "Take real apps from idea to Razorpay checkout & launch." },
];

const storyverseScreens = [
  "1. Splash",
  "2. Onboarding",
  "3. Home",
  "4. Explore (Categories)",
  "5. Search & Results",
  "6. Book Details",
  "7. Cart",
  "8. Checkout",
  "9. Razorpay Payment",
  "10. Payment Success",
  "11. Payment Failed / Pending",
  "12. My Library",
  "13. Immersive Reader",
  "14. Profile & Orders",
];

function EnrollBtn({ label = "Enroll in Paid Bootcamp — ₹999", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={CHECKOUT}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[var(--orange)] px-6 py-4 text-[15px] font-extrabold text-white glow-orange transition hover:-translate-y-0.5 ${className}`}
    >
      {label}
      <ArrowRight size={18} />
    </a>
  );
}

export default function FullStackBootcampPage() {
  return (
    <div
      data-safe-area-inset-root
      style={{ boxSizing: "border-box", paddingTop: "var(--safe-area-inset-top)", minHeight: "100vh", background: "#0b1020" }}
      className="overflow-x-clip pb-[90px] sm:pb-0"
    >
      {/* HEADER */}
      <header
        data-track-area="header"
        data-safe-area-sticky-top
        style={{ top: "var(--safe-area-inset-top)" }}
        className="sticky z-40 border-b border-white/10 bg-[#0b1020]/95 backdrop-blur"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <a href="/" className="flex min-w-0 items-center gap-2">
            <img src={logo} alt="CodeBitByBit logo" width="36" height="36" className="h-9 w-9 rounded-xl object-cover" />
            <span className="leading-none">
              <span className="font-display block text-[18px] font-extrabold tracking-tight text-white">CodeBitByBit</span>
              <span className="block text-[10px] font-bold tracking-[0.18em] text-amber-300">LEARN • BUILD • LAUNCH</span>
            </span>
          </a>
          <div className="flex items-center gap-2">
            <a
              href={BOOTCAMP_PATH}
              className="hidden rounded-full border border-white/20 px-3.5 py-2 text-xs font-bold text-white/90 hover:bg-white/10 sm:inline-flex"
            >
              Free Bootcamp
            </a>
            <a
              href={CHECKOUT}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-amber-300 px-4 py-2 text-[13px] font-extrabold text-[#1f1300] shadow-md"
            >
              Enroll ₹999
            </a>
          </div>
        </div>
      </header>

      {/* HERO + RIGHT SIDEBAR */}
      <section data-track-area="hero" className="hero-bg text-white">
        <div className="mx-auto max-w-6xl px-4 pt-7 pb-10 sm:px-6 sm:pt-12 sm:pb-14">
          <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            {/* LEFT CONTENT */}
            <div>
              <div className="inline-flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-red-500 px-3 py-1.5 text-xs font-extrabold text-white">
                  ● LIVE ONLINE BOOTCAMP
                </span>
                <span className="rounded-full bg-amber-300 px-3 py-1.5 text-xs font-extrabold text-[#211500]">
                  Starts This Saturday
                </span>
                <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-bold">
                  Limited to 20 Students Only
                </span>
              </div>

              <h1 className="font-display mt-5 text-[clamp(2.2rem,8vw,3.9rem)] leading-[1.02] font-extrabold text-balance">
                Full Stack <span className="text-amber-300">AI App Developer</span> Bootcamp
              </h1>
              <p className="mt-3 text-[17px] leading-7 text-white/85 max-w-2xl">
                Design • Build • Launch • Monetise Real Apps with AI. First watch the free Odia workshop below, then join the 1-month live bootcamp to build 3–4 real apps.
              </p>

              {/* FREE WORKSHOP VIDEO FIRST — BIG PLYR YOUTUBE PLAYER */}
              <div id="watch-workshop" className="mt-6 scroll-mt-24 rounded-[1.6rem] border border-amber-300/35 bg-[#0f1424] p-3 shadow-2xl sm:p-4">
                <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2 px-1">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-300/15 px-3 py-1 text-xs font-extrabold text-amber-300">
                    <Play size={13} className="fill-current" /> WATCH FREE WORKSHOP IN ODIA
                  </span>
                  <span className="text-xs font-semibold text-white/65">Step-by-step live app building</span>
                </div>
                <PlyrYoutubePlayer
                  videoId={YT_VIDEO_ID}
                  title="Watch making real apps with AI in Odia — Free Workshop"
                />
                <div className="mt-3.5 flex flex-wrap items-center gap-2.5">
                  <EnrollBtn className="flex-1 sm:flex-none" />
                  <a
                    href={CHANNEL}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 rounded-full bg-[#18a34a] px-4 py-3.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5"
                  >
                    <MessageCircle size={16} />
                    WhatsApp Channel
                  </a>
                  <a
                    href={GROUP}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-3.5 text-sm font-extrabold text-white transition hover:bg-white/20"
                  >
                    <Users size={16} />
                    WhatsApp Group
                  </a>
                  <a
                    href={FORM}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-3.5 text-sm font-bold text-white/90 transition hover:bg-white/10"
                  >
                    Free Form <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR — STICKY PURCHASE CARD */}
            <aside
              data-track-area="course_sidebar"
              className="rounded-[1.75rem] border-2 border-amber-300/80 bg-[#0f1424] p-6 text-white shadow-2xl lg:sticky lg:top-24"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-300/15 px-3 py-1 text-xs font-extrabold text-amber-300">
                  <Gift size={14} /> Exclusive Launch Bundle
                </span>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-extrabold text-emerald-300">
                  Save ₹13,197
                </span>
              </div>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-display text-5xl font-extrabold text-amber-300">₹999</span>
                <span className="text-lg font-bold text-white/45 line-through">₹14,196+</span>
              </div>
              <p className="mt-1 text-xs font-semibold text-white/70">
                One-time enrollment • Limited to 20 students only
              </p>

              <div className="mt-5 space-y-2.5">
                <EnrollBtn className="w-full" />
                <a
                  href="#watch-workshop"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-white/15"
                >
                  <Play size={16} /> Watch Free Odia Workshop First
                </a>
              </div>

              <div className="mt-4 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-3.5 text-xs leading-5 text-emerald-100">
                <p className="flex items-center gap-1.5 font-extrabold text-emerald-300">
                  <Mail size={14} /> What happens after you buy?
                </p>
                <p className="mt-1 text-white/85">
                  After payment verification, you will receive the course access, live class schedule, private group link & bundle details directly in your email.
                </p>
              </div>

              <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-4 text-sm text-white/85">
                {[
                  "1 Month Live Bootcamp (Sat & Sun, 7–9 PM)",
                  "Build 3–4 Real Apps with AI",
                  "NexoPlayer Lifetime Access (₹2,499 FREE)",
                  "Kathaa 1 Year Premium (₹699 FREE)",
                  "StoryVerse Full Source Code (₹999 FREE)",
                  "1:1 Mentor Support + Lifetime Recordings",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-amber-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/10 pt-4">
                <a
                  href={CHANNEL}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-[#18a34a] px-3 py-2.5 text-xs font-extrabold text-white"
                >
                  <MessageCircle size={15} /> Channel
                </a>
                <a
                  href={GROUP}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-3 py-2.5 text-xs font-extrabold text-white"
                >
                  <Users size={15} /> Group
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <main className="bg-[var(--surface)]">
        {/* EXCLUSIVE LAUNCH BUNDLE */}
        <section data-track-area="bundle" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="rounded-[1.8rem] border border-[var(--line)] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fff0d5] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-[#b45309]">
                  <Sparkles size={13} /> Exclusive Launch Bundle
                </span>
                <h2 className="font-display mt-2 text-[clamp(1.6rem,6vw,2.3rem)] font-extrabold text-[var(--ink)]">
                  Free Bonuses Worth ₹4,197+ Included
                </h2>
              </div>
              <EnrollBtn label="Claim Bundle + Enroll ₹999" />
            </div>

            <div className="mt-6 overflow-hidden rounded-[1.4rem] border border-[var(--line)] bg-[#0b1020] shadow-lg">
              <img
                src={bannerImg}
                alt="Full Stack AI App Developer Bootcamp — Exclusive Launch Bundle ₹999"
                loading="lazy"
                width={1024}
                height={576}
                className="aspect-video w-full object-contain"
              />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {bundle.map((b) => (
                <div
                  key={b.name}
                  className="flex items-center gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4"
                >
                  {b.img ? (
                    <img src={b.img} alt={b.name} className="h-12 w-12 shrink-0 rounded-xl bg-[#0b1020] object-cover" />
                  ) : (
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#fff0d5] text-[#e35d00]">
                      {b.icon && <b.icon size={22} />}
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="font-display text-[17px] font-extrabold leading-tight text-[var(--ink)]">{b.name}</p>
                    <p className="text-xs font-semibold text-[var(--muted)]">{b.benefit}</p>
                    <div className="mt-1 flex items-center gap-2">
                      {b.mrp && <span className="text-xs text-[var(--muted)] line-through">{b.mrp}</span>}
                      <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-extrabold text-emerald-700">
                        {b.badge}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STORYVERSE SHOWCASE — WHAT YOU WILL BUILD */}
        <section data-track-area="storyverse" className="bg-[#0b1020] py-14 text-white sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-extrabold tracking-[0.14em] text-amber-300 uppercase">
                <Code2 size={14} /> Flagship App You Will Build
              </span>
              <h2 className="font-display mt-4 text-[clamp(1.85rem,7vw,3rem)] leading-[1.05] font-extrabold">
                StoryVerse — <span className="text-amber-300">14 Complete App Screens</span>
              </h2>
              <p className="mt-3 text-white/75">
                Build a full digital bookstore & immersive reading app with Cart, Razorpay Checkout, Payment Success/Failed states, Library & Reader — plus its full source code included FREE.
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-white/15 bg-[#0f1424] p-2 shadow-2xl sm:p-3">
              <img
                src={storyverseImg}
                alt="StoryVerse 14 app screens including Splash, Onboarding, Home, Explore, Cart, Checkout, Razorpay Payment, Library and Immersive Reader"
                loading="lazy"
                width={1024}
                height={682}
                className="aspect-[3/2] w-full rounded-[1.2rem] object-contain"
              />
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {storyverseScreens.map((screen) => (
                <span
                  key={screen}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90"
                >
                  {screen}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* BOOTCAMP SCHEDULE & FEATURES */}
        <section data-track-area="features" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fff0d5] px-3 py-1.5 text-[11px] font-extrabold tracking-[0.14em] text-[#b45309] uppercase">
              <BadgeCheck size={14} /> Bootcamp Structure
            </span>
            <h2 className="font-display mt-4 text-[clamp(1.8rem,7vw,2.8rem)] leading-[1.05] font-extrabold text-[var(--ink)]">
              1 Month Live. <span className="text-[#ff6b1a]">Real Results.</span>
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <article key={f.title} className="rounded-[1.4rem] border border-[var(--line)] bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff0d5] text-[#e35d00]">
                  <f.icon size={22} />
                </div>
                <h3 className="font-display mt-4 text-[19px] font-extrabold text-[var(--ink)]">{f.title}</h3>
                <p className="mt-1.5 text-[14px] leading-6 text-[var(--muted)]">{f.desc}</p>
              </article>
            ))}
          </div>

          {/* MENTOR + FINAL ENROLL BOX */}
          <div className="mt-10 grid items-center gap-6 rounded-[1.8rem] border-2 border-amber-300 bg-[#0f1424] p-6 text-white shadow-2xl sm:p-8 lg:grid-cols-[1fr_auto]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <img
                src={mentorImg}
                alt="Chandrakanta Behera — Mentor"
                loading="lazy"
                className="h-20 w-20 shrink-0 rounded-2xl object-cover ring-2 ring-amber-300"
              />
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-amber-300">
                  Mentor: Chandrakanta Behera
                </p>
                <h3 className="font-display mt-1 text-2xl font-extrabold">
                  Enroll in Paid Bootcamp — ₹999
                </h3>
                <p className="mt-1 text-sm text-white/75">
                  Limited to 20 students. After payment verification, onboarding & access details are sent straight to your email.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <EnrollBtn />
              <span className="flex items-center justify-center gap-1.5 text-xs text-emerald-300">
                <ShieldCheck size={14} /> Secure Razorpay Checkout
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer data-track-area="footer" className="bg-[#080c18] text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <a href={BRAND} target="_blank" rel="noopener" aria-label="CodeBitByBit — Learn, Build, Launch" className="inline-block">
                <img src={wordmark} alt="CodeBitByBit — Learn, Build, Launch" loading="lazy" className="h-28 w-auto rounded-2xl" />
              </a>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/65">
                Learn | Build | Launch — Odia re AI sikha, real apps build & monetise kara.
              </p>
            </div>
            <nav className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm font-semibold">
              <a href={BOOTCAMP_PATH} className="text-amber-300">FREE AI Bootcamp</a>
              <a href={CHECKOUT} target="_blank" rel="noopener" className="text-amber-300">Enroll Paid (₹999) ↗</a>
              <a href={PROFILE} target="_blank" rel="noopener" className="text-white/80 hover:text-white">Mentor Profile ↗</a>
              <a href={NEXO} target="_blank" rel="noopener" className="text-white/80 hover:text-white">NexoPlayer ↗</a>
              <a href={KATHAA} target="_blank" rel="noopener" className="text-white/80 hover:text-white">Kathaa.app ↗</a>
              <a href={CHANNEL} target="_blank" rel="noopener" className="text-emerald-300">WhatsApp Channel ↗</a>
            </nav>
          </div>
          <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/50 sm:flex-row sm:justify-between">
            <span>© CodeBitByBit • Full Stack AI App Developer Bootcamp</span>
            <span>Access & onboarding details sent to your email after payment verification.</span>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div
        data-track-area="sticky_mobile_cta"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0b1020]/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur sm:hidden"
      >
        <div className="flex gap-2">
          <a
            href={CHECKOUT}
            target="_blank"
            rel="noopener"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#ff6b1a] px-4 py-3.5 text-[15px] font-extrabold text-white"
          >
            Enroll in Paid Bootcamp ₹999 <ArrowRight size={18} />
          </a>
          <a
            href={CHANNEL}
            target="_blank"
            rel="noopener"
            aria-label="Join WhatsApp Channel"
            className="grid w-12 place-items-center rounded-full bg-[#18a34a] text-white"
          >
            <MessageCircle size={22} />
          </a>
        </div>
        <p className="mt-1.5 text-center text-[11px] font-semibold text-white/60">
          20 seats only • Details sent via email after payment
        </p>
      </div>
    </div>
  );
}
