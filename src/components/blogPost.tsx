import type { FC } from "react";
import type blogData from "../data/blogData";
import { ArrowRight } from "lucide-react";

const BlogPost: FC<typeof blogData[0]> = ({ date, title, excerpt, slug, delay }) => (
  <article
    className="bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-8 fade-in-up opacity-0 translate-y-5 transition-all duration-500 ease-out"
    style={{ transitionDelay: `${delay}ms` }}
  >
    <p className="text-sm text-slate-400 mb-2">{date}</p>
    <h2 className="text-2xl font-bold mb-3 hover:text-sky-400 transition-colors">
      <a href={slug}>{title}</a>
    </h2>
    <p className="text-slate-400 mb-4 text-justify">{excerpt}</p>
    <a href={slug} className="font-semibold text-sky-400 hover:text-sky-300 flex items-center group">
      Read More
      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
    </a>
  </article>
);

export default BlogPost;