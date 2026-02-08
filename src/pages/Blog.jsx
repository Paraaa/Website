import { useParams } from "react-router-dom";
import BackToGarden from "../components/BackToGarden";
import { getBlogPostById } from "../utils/utils";
import "../styles/Blog.css";

export default function Blog() {
	const { id } = useParams();
	const post = getBlogPostById(id);

	if (!post) {
		return (
			<>
				<BackToGarden />
				<div className="blog-container">
					<h2>Blog post not found</h2>
				</div>
			</>
		);
	}

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
				<p className="blog-content">{post.content}</p>
			</article>
		</>
	);
}
