import { Info, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
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
        <div className="mt-4 flex gap-4 text-[10px] font-mono">
          <Link
            to="/impressum"
            className="underline hover:text-[#D2796E] transition-colors"
          >
            Impressum
          </Link>
          <Link
            to="/datenschutz"
            className="underline hover:text-[#D2796E] transition-colors"
          >
            Datenschutz
          </Link>
        </div>
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
  );
}
