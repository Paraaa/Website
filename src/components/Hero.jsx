import FractalTree from "./FractalTree";

export default function Hero({ scrollProgress }) {
  return (
    <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
      <div className="flex-1">
        <h1 className="text-5xl font-serif font-medium mb-4 leading-tight">
          Thoughts on <br />
          <span className="italic text-[#8BA888]">code and growth.</span>
        </h1>
        <p className="text-lg text-[#2D3A3A]/70 max-w-md leading-relaxed">
          A collection of technical essays, skeptical deep-dives, and ideas.
        </p>
      </div>
      <FractalTree progress={scrollProgress} />
    </header>
  );
}
