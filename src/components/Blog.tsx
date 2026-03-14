import Link from "next/link";
import { siteData } from "@/data/site";

export function Blog() {
    return (
        <section className="flex flex-col gap-10">
            <div className="bg-white border border-slate-200 rounded-md px-6 py-5 sm:px-8 sm:py-6 text-slate-700 text-[15px] sm:text-base">
                Just a few things I’ve written.
            </div>
            <div className="flex flex-col gap-3">
                {siteData.blog.map((post, idx) => (
                    <div
                        key={idx}
                        className="relative bg-white border border-slate-200 rounded-md px-6 py-7 sm:px-8 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                    >
                        <div className="flex-1 min-w-0">
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                                <Link href={`/blog/${post.slug}`} className="blog-title-link">
                                    {post.title}
                                </Link>
                            </h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 shrink-0">
                            <span className="text-xs text-slate-500">
                                {post.date}
                            </span>
                            <span className="text-xs text-slate-300">
                                &bull;
                            </span>
                            <span className="text-xs text-slate-500">
                                {post.readingTime}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
