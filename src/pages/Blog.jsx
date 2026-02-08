import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import BackToGarden from "../components/BackToGarden";
import { getBlogPostById } from "../utils/utils";
import "../styles/Blog.css";

export default function Blog() {
	const { id } = useParams();
	const [post, setPost] = useState(null);

	useEffect(() => {
		getBlogPostById(id).then((result) => {
			setPost(result);
		});
	}, [id]);

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
					{post.tags &&
						post.tags.map((tag) => (
							<span key={tag} className="blog-tag">
								#{tag}
							</span>
						))}
				</div>
				<div className="blog-content">
					<ReactMarkdown>{post.content}</ReactMarkdown>
				</div>
			</article>
		</>
	);
}
