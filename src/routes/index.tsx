import { createFileRoute } from "@tanstack/react-router";
import { Download, Mail, MapPin, Github, Linkedin, Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import resumeAsset from "@/assets/resume.pdf.asset.json";
import { WorkGrid } from "../components/WorkGrid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jaskirat — Full-Stack & AI Developer" },
      {
        name: "description",
        content:
          "Portfolio of Jaskirat Singh — Full Stack & AI Engineer building systems that ship to production.",
      },
      { property: "og:title", content: "Jaskirat — Full-Stack & AI Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Jaskirat Singh — Full Stack & AI Engineer building systems that ship to production.",
      },
    ],
  }),
  component: Index,
});

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Milestones", href: "#milestones" },
  { label: "Reach Us", href: "#reach-us" },
];

function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main id="home" className="relative min-h-screen w-full bg-[#070e1a] text-[#E8F0FF] scroll-smooth">
      {/* Background video */}
      <video
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Dark Overlay over Video */}
      <div className="bg-overlay"></div>

      {/* Main Wrapper */}
      <div ref={mainRef} className="relative z-10 w-full flex flex-col">
        
        {/* Navigation */}
        <nav className="main-navbar">
          <div className="nav-container">
            <a href="#home" className="nav-logo">
              Jaskirat<sup className="text-xs">®</sup>
            </a>

            <div className="nav-links-desktop">
              {NAV_LINKS.map((link) => (
                <a key={link.label} href={link.href} className="nav-link-item">
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:Jaskiratsingh251103@gmail.com"
                className="btn-nav-journey"
              >
                Begin Journey
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hamburger-toggle"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#E8F0FF]" />
              ) : (
                <Menu className="w-6 h-6 text-[#E8F0FF]" />
              )}
            </button>
          </div>

          {/* Mobile Nav Dropdown */}
          <div className={`nav-links-mobile ${mobileMenuOpen ? "open" : ""}`}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="nav-link-item text-lg py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:Jaskiratsingh251103@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-nav-journey text-center mt-4 py-3"
            >
              Begin Journey
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero-section content-container">
          <h1 className="hero-title animate-fade-rise">
            The stack is <span className="accent-blue">full</span>.<br />
            The work is <em className="accent-gold italic">real.</em>
          </h1>

          <p className="hero-subtitle animate-fade-rise-delay">
            I'm a Full Stack & AI Engineer — building systems that ship to production. Real-time platforms, intelligent crop advisory, deployed on AWS. I don't just learn things, I build them.
          </p>

          <div className="hero-ctas animate-fade-rise-delay-2">
            <a href="#work" className="btn-cta-journey">
              Begin Journey
            </a>
            <a
              href={resumeAsset.url}
              download="Jaskirat_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-cv"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </section>

        {/* Work Section */}
        <WorkGrid />

        {/* About Section */}
        <section id="about" className="content-container fade-up">
          <div className="about-grid">
            <div className="about-left-col">
              <span className="eyebrow">ABOUT ME</span>
              <h2 className="about-heading">
                The person behind the <em className="accent-gold">code</em>.
              </h2>
            </div>

            <div className="about-right-col">
              <p className="about-bio">
                I'm Jaskirat Singh — a final-year B.Tech CSE student at Chandigarh Group of Colleges Landran (CGPA: 8.0, graduating August 2026), interning as a Data Science Trainee at Enest Technologies, Mohali.
              </p>
              <p className="about-bio">
                I build across the full stack — from real-time backends and AI pipelines to production deployments on AWS. I care about code that actually ships, not just code that works in a notebook.
              </p>
              <p className="about-bio">
                500+ LeetCode problems. 100+ on GeeksForGeeks. Certified in Advanced RAG by DeepLearning.AI. Looking for fresher roles as a Full Stack or AI Engineer in Chandigarh/Mohali.
              </p>

              <div className="skills-wrapper">
                <div className="skill-group">
                  <h4 className="skill-group-label label-languages">Languages</h4>
                  <div className="skill-tags">
                    {["C++", "Java", "JavaScript", "TypeScript", "Python"].map((s) => (
                      <span key={s} className="skill-badge-common badge-languages">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="skill-group">
                  <h4 className="skill-group-label label-frontend">Frontend</h4>
                  <div className="skill-tags">
                    {["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"].map((s) => (
                      <span key={s} className="skill-badge-common badge-frontend">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="skill-group">
                  <h4 className="skill-group-label label-backend">Backend</h4>
                  <div className="skill-tags">
                    {["Node.js", "Express.js", "Flask", "FastAPI"].map((s) => (
                      <span key={s} className="skill-badge-common badge-backend">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="skill-group">
                  <h4 className="skill-group-label label-databases">Databases</h4>
                  <div className="skill-tags">
                    {["MongoDB", "MySQL", "PostgreSQL"].map((s) => (
                      <span key={s} className="skill-badge-common badge-databases">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="skill-group">
                  <h4 className="skill-group-label label-ai">AI / ML</h4>
                  <div className="skill-tags">
                    {["LangChain", "RAG", "MobileNetV2", "FAISS", "Gemini API", "Scikit-learn"].map((s) => (
                      <span key={s} className="skill-badge-common badge-ai">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="skill-group">
                  <h4 className="skill-group-label label-devops">DevOps</h4>
                  <div className="skill-tags">
                    {["Docker", "GitHub Actions", "CI/CD", "AWS (EC2, RDS, ECS)"].map((s) => (
                      <span key={s} className="skill-badge-common badge-devops">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones Section */}
        <section id="milestones" className="content-container">
          <span className="eyebrow">JOURNEY</span>
          <h2 className="section-title">Milestones</h2>
          <div className="milestones-grid">
            <div className="milestone-card fade-up stagger-1">
              <div className="milestone-number">500+</div>
              <h3 className="milestone-title">500+ LeetCode</h3>
              <p className="milestone-desc">
                Built my DSA foundation in C++ before writing a single line of frontend code.
              </p>
            </div>
            <div className="milestone-card fade-up stagger-2">
              <div className="milestone-number">⚡</div>
              <h3 className="milestone-title">Shipped to AWS</h3>
              <p className="milestone-desc">
                QuickChat runs on EC2 + RDS with zero-downtime CI/CD. Production is the only real test.
              </p>
            </div>
            <div className="milestone-card fade-up stagger-3">
              <div className="milestone-number">🎓</div>
              <h3 className="milestone-title">DeepLearning.AI Certified</h3>
              <p className="milestone-desc">
                Advanced RAG — because knowing how retrieval-augmented generation actually works matters.
              </p>
            </div>
          </div>
        </section>

        {/* Reach Us Section */}
        <section id="reach-us" className="content-container fade-up">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2 className="section-title">Let's build something real.</h2>
          <div className="reach-grid">
            <div className="reach-left-col">
              <p className="about-bio mb-8">
                Open to fresher/intern roles in Full Stack or AI Engineering. Based in Chandigarh, India. Reach out anytime.
              </p>
              <div className="space-y-4">
                <a href="#" className="contact-link-item" onClick={(e) => e.preventDefault()}>
                  <div className="contact-icon-box">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>Chandigarh, India</span>
                </a>
                <a href="mailto:Jaskiratsingh251103@gmail.com" className="contact-link-item">
                  <div className="contact-icon-box">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>Jaskiratsingh251103@gmail.com</span>
                </a>
                <a href="https://github.com/Jaskirat25" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                  <div className="contact-icon-box">
                    <Github className="w-5 h-5" />
                  </div>
                  <span>github.com/Jaskirat25</span>
                </a>
                <a href="https://linkedin.com/in/jaskirat-singh-dev" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                  <div className="contact-icon-box">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span>linkedin.com/in/jaskirat-singh-dev</span>
                </a>
              </div>
            </div>

            <div className="reach-right-col">
              <form className="reach-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row-dual">
                  <input
                    type="text"
                    className="reach-input"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    className="reach-input"
                    placeholder="Email"
                    required
                  />
                </div>
                <textarea
                  className="reach-textarea"
                  placeholder="Message"
                  required
                ></textarea>
                <button type="submit" className="btn-form-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer-bar">
          <p className="footer-text">Jaskirat Singh © 2026 · Built with intention.</p>
        </footer>
      </div>
    </main>
  );
}


