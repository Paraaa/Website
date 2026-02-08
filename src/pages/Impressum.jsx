import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#F9F7F2] text-[#2D3A3A]">
      <Navigation />

      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[#8BA888] hover:text-[#2D3A3A] transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Garden
        </Link>

        <article className="prose prose-slate max-w-none">
          <h1>Impressum</h1>

          <div className="space-y-6 text-[#2D3A3A]/80 leading-relaxed">
            <section>
              <p>
                Andrej Schwanke
                <br />
                S&uuml;dring 24
                <br />
                79189 Bad Krozingen
              </p>

              <h2 className="text font-serif font-medium">Kontakt</h2>
              <p>
                Telefon: +49 1575 4166764
                <br />
                E-Mail: andrejschwanke19 [at] gmail.com
              </p>
              <h2 className="text font-serif font-medium">
                Redaktionell verantwortlich
              </h2>
              <p>
                Andrej Schwanke
                <br />
                S&uuml;dring 24
                <br />
                79189 Bad Krozingen
              </p>
            </section>
          </div>
        </article>
        <Footer />
      </main>
    </div>
  );
}
