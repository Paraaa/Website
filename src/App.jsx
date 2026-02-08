import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Blog from "./pages/Blog";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function App() {
	return (
		<Router>
			<div className="bg-[#F9F7F2] text-[#2D3A3A] selection:bg-[#D2796E]/20">
				<Navigation />
				<main className="max-w-250 mx-auto px-6 pt-16 pb-24">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/blog/:id" element={<Blog />} />
						<Route path="/impressum" element={<Impressum />} />
						<Route path="/datenschutz" element={<Datenschutz />} />
					</Routes>
					<Footer />
				</main>
			</div>
		</Router>
	);
}
