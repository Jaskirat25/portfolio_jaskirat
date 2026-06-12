import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "QuickChat",
    tag: "Full Stack · Real-Time · DevOps · AWS",
    description:
      "A production-grade real-time messaging platform built with Node.js and Socket.io — achieving sub-200ms message delivery under concurrent load. Features JWT auth, live presence tracking, typing indicators, and a normalised PostgreSQL schema. Containerised with Docker, deployed to AWS EC2 + RDS, with GitHub Actions CI/CD for zero-downtime deployments.",
    stack: [
      "Node.js",
      "Socket.io",
      "React",
      "PostgreSQL",
      "Docker",
      "AWS",
      "GitHub Actions",
    ],
    github: "https://github.com/Jaskirat25/QuickChat",
    live: "#",
    featured: false,
  },
  {
    title: "Krishi AI",
    tag: "AI · Full Stack · RAG · Computer Vision",
    description:
      "An end-to-end AI platform for crop disease detection and advisory. Fine-tuned MobileNetV2 achieves 93% accuracy across 4 disease categories from farmer-uploaded images. A RAG pipeline over Punjab Agricultural University research papers routes disease context to Gemini API for citation-backed treatment advice. Production-ready with Next.js frontend, FastAPI backend, Docker, and AWS ECS deployment.",
    stack: [
      "Next.js",
      "FastAPI",
      "MobileNetV2",
      "FAISS",
      "LangChain",
      "Gemini API",
      "Docker",
    ],
    github: "https://github.com/Jaskirat25/Krishi-AI",
    live: "#",
    featured: true,
  },
  {
    title: "Heart Attack Predictor",
    tag: "Machine Learning · Deep Learning",
    description:
      "Comparative study between sklearn Logistic Regression and a custom NumPy neural network (forward propagation + manual backpropagation + gradient descent) for binary heart attack prediction. Deep EDA, feature correlation, and evaluation via accuracy, F1-score, and loss convergence plots. Achieved 88.8% accuracy on held-out test data.",
    stack: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/Jaskirat25/Heart-Attack-Predictor",
    live: "",
    featured: false,
  },
];

export const WorkGrid: React.FC = () => {
  return (
    <section id="work" className="content-container">
      <span className="eyebrow">SELECTED WORK</span>
      <h2 className="section-title">Work</h2>
      <div className="work-grid">
        {projects.map((proj, i) => (
          <div
            key={i}
            className={`project-card fade-up stagger-${(i % 3) + 1} ${
              proj.featured ? "featured" : ""
            }`}
          >
            <div>
              <span className="project-tagline">{proj.tag}</span>
              <h3 className="project-title mt-2 mb-4">{proj.title}</h3>
              <p className="project-desc mb-6">{proj.description}</p>
              <div className="project-stack">
                {proj.stack.map((tech) => (
                  <span key={tech} className="stack-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-links">
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


