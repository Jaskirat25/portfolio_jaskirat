import { FadeIn } from "./FadeIn";

const SERVICES = [
  { n: "01", name: "Full-Stack Web Development", d: "End-to-end web apps with React, Next.js, Node.js and PostgreSQL — fast, scalable, and built for production." },
  { n: "02", name: "AI & RAG Systems", d: "Retrieval-augmented generation pipelines with LangChain, FAISS, and LLM APIs — grounded, citation-backed AI products." },
  { n: "03", name: "Machine Learning", d: "Custom ML and deep learning models with Scikit-learn and PyTorch — from EDA and feature engineering to deployment." },
  { n: "04", name: "Real-Time Systems", d: "Low-latency real-time platforms with Socket.io, JWT auth, and normalized PostgreSQL schemas for high-concurrency loads." },
  { n: "05", name: "Backend & APIs", d: "Robust REST and streaming APIs with Node.js, Express, FastAPI and Flask — designed for reliability and clean integration." },
];

export function ServicesSection() {
  return (
    <section
      id="skills"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 1 }}
      >
        Services
      </h2>
      <div className="max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? "1px solid rgba(12,12,12,0.15)" : "none",
                borderBottom: "1px solid rgba(12,12,12,0.15)",
              }}
            >
              <span
                className="font-black flex-shrink-0"
                style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 0.9 }}
              >
                {s.n}
              </span>
              <div className="flex flex-col gap-3 sm:gap-4 pt-2">
                <h3
                  className="font-medium uppercase"
                  style={{ color: "#0C0C0C", fontSize: "clamp(1rem, 2.2vw, 2.1rem)", lineHeight: 1.1 }}
                >
                  {s.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ color: "#0C0C0C", opacity: 0.6, fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {s.d}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
