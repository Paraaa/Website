import blogPostsData from "../data/blogPosts.json";

/**
 * Get all blog posts
 * @returns {Array} Array of all blog posts
 */
export function getAllBlogPosts() {
	return blogPostsData;
}

/**
 * Get a blog post by ID and load its markdown content
 * @param {string} id - The ID of the blog post
 * @returns {Promise<Object|undefined>} The blog post object with content or undefined if not found
 */
export async function getBlogPostById(id) {
	const post = blogPostsData.find((post) => {
		return post.id === id;
	});
	console.log("🚀 ~ getBlogPostById ~ post:", post);
	if (!post) return undefined;
	try {
		// Vite allows importing raw files with ?raw
		const content = await import(`../data/posts/${id}.md?raw`);
		return { ...post, content: content.default };
	} catch (e) {
		// If file not found, fallback to empty content
		return { ...post, content: "" };
	}
}
