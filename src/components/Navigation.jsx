import { TreePine } from "lucide-react";

export default function Navigation() {
  return (
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
  );
}
