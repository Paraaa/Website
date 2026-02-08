import { Github, Linkedin, ExternalLink, Copyright } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-32 pt-12 border-t border-[#8BA888]/10 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <p className="text-sm text-[#2D3A3A]/60 leading-relaxed italic">
          No tracking, no analytics, no cookies
        </p>
        <p className="text-sm text-[#2D3A3A]/60 leading-relaxed italic ">
          — Just a simple digital garden.
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
            href="https://github.com/Paraaa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-inherit"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/andrej-schwanke-b3a51724b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow text-inherit"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <span className="text-[12px] font-mono opacity-40">
          <Copyright size={12} className="inline-block mr-1" />
          {new Date().getFullYear()} — Built with skepticism.
        </span>
      </div>
    </footer>
  );
}
