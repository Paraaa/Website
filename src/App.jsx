import { useState, useEffect, useCallback } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";

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
      <Navigation />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <Hero scrollProgress={scrollProgress} />

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
              <BlogPost key={post.id} post={post} />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
