import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BackToGarden() {
	return (
		<Link
			to="/"
			className="inline-flex items-center gap-2 text-sm text-[#8BA888] hover:text-[#2D3A3A] transition-colors mb-18 mt-10"
		>
			<ArrowLeft size={16} />
			Back to Garden
		</Link>
	);
}
