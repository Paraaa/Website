import { useParams } from "react-router-dom";
import "../styles/Blog.css";

export default function Blog() {
	const { id } = useParams();

	return (
		<div className="blog-page">
			<h1>Blog Post: {id}</h1>
		</div>
	);
}
