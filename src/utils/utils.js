import blogPostsData from "../data/blogPosts.json";

/**
 * Get all blog posts
 * @returns {Array} Array of all blog posts
 */
export function getAllBlogPosts() {
	return blogPostsData;
}

/**
 * Get a blog post by ID
 * @param {string} id - The ID of the blog post
 * @returns {Object|undefined} The blog post object or undefined if not found
 */
export function getBlogPostById(id) {
	return blogPostsData.find((post) => post.id === id);
}
