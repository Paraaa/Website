import { useEffect, useRef } from "react";

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

		const maxDepth = 9;
		const baseLen = 60; // Base length of the initial branch
		const padding = 7; // Padding from canvas edges

		// Pre-generate the entire tree structure with fixed random values
		const generateTreeStructure = (x, y, len, angle, depth) => {
			if (depth <= 0) return [];

			const x2 = x + Math.cos(angle) * len;
			const y2 = y + Math.sin(angle) * len;

			// Check if the branch endpoint is within canvas bounds
			if (
				x2 < padding ||
				x2 > size - padding ||
				y2 < padding ||
				y2 > size - padding
			) {
				return []; // Don't create branches outside the canvas
			}

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

		// Easing function for smooth animation - ease out for more natural growth
		const easeOutCubic = (t) => {
			return 1 - Math.pow(1 - t, 3);
		};

		// Smoother easing for individual branch growth
		const easeOutQuart = (t) => {
			return 1 - Math.pow(1 - t, 4);
		};

		const animationDuration = 3000; // Total animation duration in ms
		const startTime = Date.now();

		const animate = () => {
			ctx.clearRect(0, 0, size, size); // Clear the canvas

			// Calculate animation progress (0 to 1)
			const elapsed = Date.now() - startTime;
			const progress = Math.min(elapsed / animationDuration, 1);

			// Apply easing function to progress
			const easedProgress = easeOutCubic(progress);
			const currentDepth = easedProgress * (maxDepth + 1);

			// Draw all three trees
			trees.forEach((tree) => {
				tree.branches.forEach((branch) => {
					// Calculate at what point this branch should start growing
					const branchStart = maxDepth - branch.depth;
					const branchEnd = branchStart + 1;

					if (currentDepth >= branchStart) {
						// Calculate how much of this branch to draw (0 to 1)
						const rawProgress = Math.min(
							Math.max(
								(currentDepth - branchStart) /
									(branchEnd - branchStart),
								0
							),
							1
						);

						// Apply smooth easing to branch extension
						const branchProgress = easeOutQuart(rawProgress);

						if (branchProgress > 0) {
							// Draw partial or full branch
							const drawX2 =
								branch.x1 +
								(branch.x2 - branch.x1) * branchProgress;
							const drawY2 =
								branch.y1 +
								(branch.y2 - branch.y1) * branchProgress;

							ctx.beginPath();
							ctx.moveTo(branch.x1, branch.y1);
							ctx.lineTo(drawX2, drawY2);
							ctx.strokeStyle = getColor(
								branch.depth,
								maxDepth,
								tree.opacity
							);
							ctx.lineWidth = branch.depth * 0.8;
							ctx.lineCap = "round";
							ctx.stroke();
						}
					}
				});
			});

			if (progress < 1) {
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
