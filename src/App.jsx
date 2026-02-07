import React, { useState, useEffect, useRef, useCallback } from "react";
import { TreePine, Github, ArrowRight, Info, ExternalLink } from "lucide-react";

/**
 * REUSABLE COMPONENT: Fractal Tree
 * A recursive drawing that grows in complexity as the user scrolls.
 */
const FractalTree = ({ progress }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const size = 160;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const drawBranch = (x, y, len, angle, depth) => {
      if (depth === 0) return;

      const x2 = x + Math.cos(angle) * len;
      const y2 = y + Math.sin(angle) * len;

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = `rgba(139, 168, 136, ${0.2 + depth * 0.08})`;
      ctx.lineWidth = depth * 0.5;
      ctx.lineCap = "round";
      ctx.stroke();

      const nextLen = len * 0.75;
      drawBranch(x2, y2, nextLen, angle - 0.4, depth - 1);
      drawBranch(x2, y2, nextLen, angle + 0.4, depth - 1);
    };

    ctx.clearRect(0, 0, size, size);
    const maxDepth = Math.floor(3 + 6 * progress);
    const baseLen = 15 + 20 * progress;
    drawBranch(size / 2, size - 10, baseLen, -Math.PI / 2, maxDepth);
  }, [progress]);

  return (
    <div className="bg-white/40 p-4 rounded-2xl border border-[#8BA888]/20 shadow-sm inline-block text-center">
      <canvas ref={canvasRef} className="w-40 h-40 opacity-80" />
      <div className="text-[10px] uppercase tracking-widest mt-2 font-mono text-[#8BA888]">
        Growth: {Math.round(progress * 100)}%
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const mockPosts = [
    {
      id: "1",
      title: "Why I built a blog with a Fractal Tree",
      excerpt:
        "Exploring the intersection of recursive mathematics and organic UI design. How a simple line-drawing algorithm turned into a digital garden.",
      date: "2024-05-20",
      tags: ["Math", "React"],
      readingTime: "5 min",
    },
    {
      id: "2",
      title: "The Skeptical Developer's Toolkit",
      excerpt:
        "Why questioning every library, abstraction, and 'best practice' leads to more resilient software systems.",
      date: "2024-05-15",
      tags: ["Philosophy"],
      readingTime: "8 min",
    },
  ];

  return (
    <div className="min-h-[200vh] bg-[#F9F7F2] text-[#2D3A3A] selection:bg-[#D2796E]/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#F9F7F2]/80 backdrop-blur-md z-50 border-b border-[#8BA888]/10">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <TreePine className="text-[#8BA888] w-5 h-5" />
            <span>Digital Garden</span>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-[#8BA888] transition-colors">
              Garden
            </a>
            <a href="#" className="hover:text-[#8BA888] transition-colors">
              Essays
            </a>
            <a href="#" className="hover:text-[#8BA888] transition-colors">
              Legal
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-5xl font-serif font-medium mb-4 leading-tight">
              Thoughts on <br />
              <span className="italic text-[#8BA888]">code and growth.</span>
            </h1>
            <p className="text-lg text-[#2D3A3A]/70 max-w-md leading-relaxed">
              A collection of technical essays, skeptical deep-dives, and
              fractal experiments.
            </p>
          </div>
          <FractalTree progress={scrollProgress} />
        </header>

        {/* Content Section */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-[#8BA888]/20" />
            <span className="text-xs font-mono uppercase tracking-widest opacity-50">
              Recent Entries
            </span>
            <div className="h-px flex-1 bg-[#8BA888]/20" />
          </div>

          <div className="flex flex-col gap-16">
            {mockPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="flex justify-between items-baseline mb-2 text-xs font-mono opacity-40">
                  <span>{post.date}</span>
                  <span className="italic">{post.readingTime}</span>
                </div>
                <h2 className="text-3xl font-serif font-medium group-hover:text-[#8BA888] transition-colors mb-3">
                  {post.title}
                </h2>
                <p className="text-[#2D3A3A]/80 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-1 bg-[#8BA888]/10 text-[#2D3A3A]/60 rounded-full font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                  <ArrowRight
                    size={16}
                    className="ml-auto text-[#8BA888] transform translate-x-0 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-32 pt-12 border-t border-[#8BA888]/10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm font-semibold flex items-center gap-2 mb-4">
              <Info size={16} className="text-[#D2796E]" />
              Legal & Contact
            </h3>
            <p className="text-sm text-[#2D3A3A]/60 leading-relaxed">
              Operating from Germany. This garden adheres to all local digital
              regulations including TMG and DSGVO.
            </p>
            <button className="mt-4 text-[10px] font-mono underline hover:text-[#D2796E] transition-colors">
              View Impressum & Privacy
            </button>
          </div>
          <div className="flex flex-col items-end justify-end gap-4">
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-inherit"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-inherit"
              >
                <ExternalLink size={20} />
              </a>
            </div>
            <span className="text-[10px] font-mono opacity-40">
              © {new Date().getFullYear()} — Built with skepticism.
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
