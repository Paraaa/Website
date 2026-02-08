import { useEffect, useRef } from "react";

/**
 * REUSABLE COMPONENT: Fractal Tree
 * A recursive drawing that grows in complexity as the user scrolls.
 * Now includes randomization for unique trees on each reload and animation for growth.
 */
export default function FractalTree() {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const dpr = window.devicePixelRatio || 1;
		const size = 500; // Large canvas for detail
		canvas.width = size * dpr;
		canvas.height = size * dpr;
		ctx.scale(dpr, dpr);

		const maxDepth = Math.floor(10 + Math.random() * 4); // Random depth between 10 and 14
		const baseLen = 60; // Base length of the initial branch

		// Pre-generate the entire tree structure with fixed random values
		const generateTreeStructure = (x, y, len, angle, depth) => {
			if (depth <= 0) return [];

			const x2 = x + Math.cos(angle) * len;
			const y2 = y + Math.sin(angle) * len;

			const branches = [
				{
					x1: x,
					y1: y,
					x2: x2,
					y2: y2,
					depth: depth,
				},
			];

			if (depth > 1) {
				const nextLen = len * (0.7 + Math.random() * 0.3);
				const leftAngle = angle - 0.4 + (Math.random() - 0.5) * 0.6;
				const rightAngle = angle + 0.4 + (Math.random() - 0.5) * 0.6;

				branches.push(
					...generateTreeStructure(
						x2,
						y2,
						nextLen,
						leftAngle,
						depth - 1
					)
				);
				branches.push(
					...generateTreeStructure(
						x2,
						y2,
						nextLen,
						rightAngle,
						depth - 1
					)
				);
			}

			return branches;
		};
		const getRandomOpacity = () => Math.random() * (0.8 - 0.6) + 0.6; // Random opacity between 0.6 and 0.8

		// Generate three trees with different positions and depths
		const trees = [
			{
				branches: generateTreeStructure(
					size / 2 - 60,
					size - 60,
					baseLen * 0.9,
					-Math.PI / 2,
					maxDepth
				),
				opacity: getRandomOpacity(),
			},
			{
				branches: generateTreeStructure(
					size / 2,
					size - 80,
					baseLen,
					-Math.PI / 2,
					maxDepth
				),
				opacity: getRandomOpacity(),
			},
			{
				branches: generateTreeStructure(
					size / 2 + 70,
					size - 50,
					baseLen * 0.85,
					-Math.PI / 2,
					maxDepth
				),
				opacity: getRandomOpacity(),
			},
		];

		// Color gradient from brown (root) to green (leaves)
		const getColor = (depth, maxDepth, opacity) => {
			const ratio = depth / maxDepth;
			const r = Math.floor(35 + ratio * 66); // 35 -> 101 (green to brown)
			const g = Math.floor(155 - ratio * 88); // 155 -> 67 (green to brown)
			const b = Math.floor(48 - ratio * 15); // 48 -> 33 (green to brown)
			const alpha = (0.7 + ratio * 0.3) * opacity;
			return `rgba(${r}, ${g}, ${b}, ${alpha})`;
		};

		let currentDepth = 0; // Start with depth 0

		const animate = () => {
			ctx.clearRect(0, 0, size, size); // Clear the canvas

			// Draw all three trees
			trees.forEach((tree) => {
				tree.branches.forEach((branch) => {
					if (branch.depth >= maxDepth - currentDepth) {
						ctx.beginPath();
						ctx.moveTo(branch.x1, branch.y1);
						ctx.lineTo(branch.x2, branch.y2);
						ctx.strokeStyle = getColor(
							branch.depth,
							maxDepth,
							tree.opacity
						);
						ctx.lineWidth = branch.depth * 0.8;
						ctx.lineCap = "round";
						ctx.stroke();
					}
				});
			});

			if (currentDepth < maxDepth) {
				currentDepth += 0.12;
				requestAnimationFrame(animate);
			}
		};

		animate();
	}, []);

	return (
		<div className="w-full flex items-center justify-center">
			<canvas ref={canvasRef} className="max-w-full opacity-50" />
		</div>
	);
}
