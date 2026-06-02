import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LiveProjectButton } from "./ContactButton";

const PROJECTS = [
  {
    n: "01",
    name: "QuickChat",
    category: "Real-Time Platform",
    img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    img3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
  },
  {
    n: "02",
    name: "Krishi AI",
    category: "AI / RAG System",
    img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    img3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
  },
  {
    n: "03",
    name: "Heart Attack Prediction",
    category: "Machine Learning",
    img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    img3: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative -mt-10 sm:-mt-12 md:-mt-14 z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <h2
        className="hero-heading font-black uppercase tracking-tight leading-none text-center mb-16 sm:mb-20 md:mb-24"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Project
      </h2>
      <div>
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.n} project={p} index={i} totalCards={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  totalCards: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="h-[85vh] sticky top-24 md:top-32" style={{ top: `${96 + index * 28}px` }}>
      <motion.div
        style={{ scale }}
        className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 h-full flex flex-col gap-4 sm:gap-6"
      >
        <div
          className="rounded-[28px] sm:rounded-[36px] md:rounded-[44px] p-4 sm:p-6 md:p-8 flex flex-col gap-6 h-full"
          style={{ backgroundColor: "#0C0C0C" }}
        >
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
              <span
                className="hero-heading font-black leading-none"
                style={{ fontSize: "clamp(3rem, 8vw, 110px)" }}
              >
                {project.n}
              </span>
              <div className="flex flex-col gap-1">
                <span
                  className="text-[#D7E2EA] opacity-60 uppercase tracking-widest font-light"
                  style={{ fontSize: "clamp(0.7rem, 1vw, 0.95rem)" }}
                >
                  {project.category}
                </span>
                <h3
                  className="text-[#D7E2EA] font-medium uppercase leading-none"
                  style={{ fontSize: "clamp(1.1rem, 2.2vw, 2.2rem)" }}
                >
                  {project.name}
                </h3>
              </div>
            </div>
            <LiveProjectButton />
          </div>
          <div className="flex-1 grid grid-cols-5 gap-3 sm:gap-4 md:gap-5 min-h-0">
            <div className="col-span-2 flex flex-col gap-3 sm:gap-4 md:gap-5">
              <img
                src={project.img1}
                alt={`${project.name} preview 1`}
                className="w-full object-cover rounded-[28px] sm:rounded-[36px] md:rounded-[44px]"
                style={{ height: "clamp(130px, 16vw, 230px)" }}
              />
              <img
                src={project.img2}
                alt={`${project.name} preview 2`}
                className="w-full object-cover rounded-[28px] sm:rounded-[36px] md:rounded-[44px]"
                style={{ height: "clamp(160px, 22vw, 340px)" }}
              />
            </div>
            <div className="col-span-3">
              <img
                src={project.img3}
                alt={`${project.name} hero`}
                className="w-full h-full object-cover rounded-[28px] sm:rounded-[36px] md:rounded-[44px]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
