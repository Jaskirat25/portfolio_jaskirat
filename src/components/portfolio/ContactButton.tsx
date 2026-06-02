import { Download } from "lucide-react";
import resumeAsset from "@/assets/resume.pdf.asset.json";

export function ContactButton() {
  return (
    <a
      href="mailto:Jaskiratsingh251103@gmail.com"
      className="inline-block rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200"
      style={{
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow:
          "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
        outline: "2px solid #fff",
        outlineOffset: "-3px",
      }}
    >
      Contact Me
    </a>
  );
}

export function ResumeButton({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isDark = variant === "dark";
  return (
    <a
      href={resumeAsset.url}
      download="Jaskirat_Singh_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 sm:gap-3 rounded-full font-medium uppercase tracking-widest px-7 py-3 sm:px-9 sm:py-3.5 md:px-11 md:py-4 text-xs sm:text-sm md:text-base border-2 transition-colors duration-200 ${
        isDark
          ? "border-[#D7E2EA] text-[#D7E2EA] hover:bg-[#D7E2EA] hover:text-[#0C0C0C]"
          : "border-[#0C0C0C] text-[#0C0C0C] hover:bg-[#0C0C0C] hover:text-white"
      }`}
    >
      <Download className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
      <span>Download CV</span>
    </a>
  );
}

export function LiveProjectButton() {
  return (
    <button className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-colors">
      Live Project
    </button>
  );
}
