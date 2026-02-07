import { useEffect, useRef } from "react";

/**
 * REUSABLE COMPONENT: Fractal Tree
 * A recursive drawing that grows in complexity as the user scrolls.
 */
export default function FractalTree({ progress }) {
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
}
