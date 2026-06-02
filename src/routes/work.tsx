import { createFileRoute } from "@tanstack/react-router";
import { WorkGrid } from "../components/WorkGrid";

// Navigation links shared with other pages
const NAV_LINKS = [
  { label: "Home", href: "/", active: false },
  { label: "Work", href: "/work", active: true },
  { label: "About", href: "/about", active: false },
  { label: "Journal", href: "/journal", active: false },
  { label: "Reach Us", href: "/reach-us", active: false },
];

export const Route = createFileRoute("/work")({
  component: WorkPage,
});

function Nav() {
  return (
    <nav className="relative z-10 flex flex-row justify-between items-center px-6 sm:px-8 py-6 max-w-7xl mx-auto">
      <a href="/" className="text-2xl sm:text-3xl tracking-tight text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
        Jaskirat<sup className="text-xs">®</sup>
      </a>
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a key={link.label} href={link.href} className={`text-sm ${link.active ? "text-white" : "text-[hsl(240,4%,66%)] hover:text-white"}`}> {link.label} </a>
        ))}
      </div>
      <a href="mailto:Jaskiratsingh251103@gmail.com" className="liquid-glass rounded-full px-5 sm:px-6 py-2.5 text-xs sm:text-sm text-white hover:scale-[1.03]">
        Begin Journey
      </a>
    </nav>
  );
}

function WorkPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[hsl(201,100%,13%)] text-white">
      {/* Reuse background video */}
      <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline preload="auto">
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4" type="video/mp4" />
      </video>
      <Nav />
      <WorkGrid />
    </main>
  );
}


