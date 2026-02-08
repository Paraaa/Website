import Hero from "../components/Hero";
import BlogEntry from "../components/BlogEntry";

export default function Home() {
	// Mock data for blog entries
	const mockPosts = [
		{
			id: "1",
			title: "What is this blog about?",
			excerpt:
				"I am questioning the purpose of this blog and why I call it the digital garden. How I build it and what I want to achived. I will not always post something. There will be weird topics. It is only for me - a place where I can talk about stuff I learned. Stuff I thought about and insides I got.",
			date: "2024-05-15",
			tags: ["Philosophy"],
			readingTime: "8 min",
		},
	];

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
					{mockPosts.map((post) => (
						<BlogEntry key={post.id} post={post} />
					))}
				</div>
			</section>
		</>
	);
}
