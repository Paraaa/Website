import Hero from "../components/Hero";
import BlogEntry from "../components/BlogEntry";
import { getAllBlogPosts } from "../utils/utils";

export default function Home() {
	const posts = getAllBlogPosts();

	return (
		<>
			<Hero />

			<section>
				<div className="flex items-center gap-4 mb-12">
					<div className="h-px flex-1 bg-[#8BA888]/20" />
					<span className="text-xs font-mono uppercase tracking-widest opacity-50">
						Recent Entries
					</span>
					<div className="h-px flex-1 bg-[#8BA888]/20" />
				</div>
				<div className="flex flex-col gap-16">
					{posts.map((post) => (
						<BlogEntry key={post.id} post={post} />
					))}
				</div>
			</section>
		</>
	);
}
