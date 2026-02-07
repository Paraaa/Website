import { ArrowRight } from "lucide-react";

export default function BlogPost({ post }) {
  return (
    <article className="group cursor-pointer">
      <div className="flex justify-between items-baseline mb-2 text-xs font-mono opacity-40">
        <span>{post.date}</span>
        <span className="italic">{post.readingTime}</span>
      </div>
      <h2 className="text-3xl font-serif font-medium group-hover:text-[#8BA888] transition-colors mb-3">
        {post.title}
      </h2>
      <p className="text-[#2D3A3A]/80 leading-relaxed mb-4">{post.excerpt}</p>
      <div className="flex items-center gap-3">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] px-2 py-1 bg-[#8BA888]/10 text-[#2D3A3A]/60 rounded-full font-mono"
          >
            #{tag}
          </span>
        ))}
        <ArrowRight
          size={16}
          className="ml-auto text-[#8BA888] transform translate-x-0 group-hover:translate-x-1 transition-transform"
        />
      </div>
    </article>
  );
}
