import { useParams } from "react-router-dom";
import BackToGarden from "../components/BackToGarden";
import "../styles/Blog.css";

export default function Blog() {
	const { id } = useParams();

	const post = {
		id: "1",
		title: "What is this blog about?",
		excerpt:
			"I am questioning the purpose of this blog and why I call it the digital garden. How I build it and what I want to achived. I will not always post something. There will be weird topics. It is only for me - a place where I can talk about stuff I learned. Stuff I thought about and insides I got.",
		date: "2024-05-15",
		tags: ["Philosophy"],
		readingTime: "8 min",
	};

	return (
		<>
			<BackToGarden />
			<article>
				<div className="blog-container">
					<span>{post.date}</span>
					<span className="italic">{post.readingTime}</span>
				</div>
				<h2 className="blog-title">{post.title}</h2>
				<div className="flex items-center gap-3">
					{post.tags.map((tag) => (
						<span key={tag} className="blog-tag">
							#{tag}
						</span>
					))}
				</div>
				<p className="blog-text">{post.excerpt}</p>
			</article>
		</>
	);
}
