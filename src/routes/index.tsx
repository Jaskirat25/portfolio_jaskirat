import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jaskirat — Full-Stack & AI Developer" },
      {
        name: "description",
        content:
          "Portfolio of Jaskirat Singh — designing tools for deep thinkers, bold creators, and quiet rebels.",
      },
      { property: "og:title", content: "Jaskirat — Full-Stack & AI Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Jaskirat Singh — designing tools for deep thinkers, bold creators, and quiet rebels.",
      },
    ],
  }),
  component: Index,
});

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const NAV_LINKS = [
  { label: "Home", active: true },
  { label: "Work", active: false },
  { label: "About", active: false },
  { label: "Journal", active: false },
  { label: "Reach Us", active: false },
];

function Index() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[hsl(201,100%,13%)] text-white">
      {/* Fullscreen background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster=""
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Navigation */}
      <nav className="relative z-10 flex flex-row justify-between items-center px-6 sm:px-8 py-6 max-w-7xl mx-auto">
        <a
          href="/"
          className="text-2xl sm:text-3xl tracking-tight text-white"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Jaskirat<sup className="text-xs">®</sup>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={`#${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-sm transition-colors ${
                link.active
                  ? "text-white"
                  : "text-[hsl(240,4%,66%)] hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:Jaskiratsingh251103@gmail.com"
          className="liquid-glass rounded-full px-5 sm:px-6 py-2.5 text-xs sm:text-sm text-white hover:scale-[1.03]"
        >
          Begin Journey
        </a>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-20 sm:pt-28 pb-24 sm:pb-40 py-[90px]">
        <h1
          className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal text-white"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Where{" "}
          <em className="not-italic text-[hsl(240,4%,66%)]">dreams</em> rise{" "}
          <em className="not-italic text-[hsl(240,4%,66%)]">
            through the silence.
          </em>
        </h1>

        <p className="animate-fade-rise-delay text-[hsl(240,4%,66%)] text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          I'm designing tools for deep thinkers, bold creators, and quiet
          rebels. Amid the chaos, I build digital spaces for sharp focus and
          inspired work.
        </p>

        <div className="animate-fade-rise-delay-2 mt-12 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#work"
            className="liquid-glass rounded-full px-10 sm:px-14 py-4 sm:py-5 text-sm sm:text-base text-white hover:scale-[1.03] cursor-pointer"
          >
            Begin Journey
          </a>
          <a
            href={resumeAsset.url}
            download="Jaskirat_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass inline-flex items-center gap-3 rounded-full px-8 sm:px-10 py-4 sm:py-5 text-sm sm:text-base text-white hover:scale-[1.03] cursor-pointer"
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
            Download CV
          </a>
        </div>
      </section>
    </main>
  );
}
