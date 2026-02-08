import "../styles/Blog.css";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogEntry({ post }) {
	return (
		<article className="group cursor-pointer">
			<div className="blog-container">
				<span>{post.date}</span>
				<span className="italic">{post.readingTime}</span>
			</div>
			<h2 className="blog-title">{post.title}</h2>
			<p className="blog-excerpt">{post.excerpt}</p>
			<div className="flex items-center gap-3">
				{post.tags.map((tag) => (
					<span key={tag} className="blog-tag">
						#{tag}
					</span>
				))}
				<Link to={`/blog/${post.id}`}>
					<ArrowRight size={16} className="blog-arrow" />
				</Link>
			</div>
		</article>
	);
}
