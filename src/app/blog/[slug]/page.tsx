import type { Metadata } from "next";
import { siteData } from "@/data/site";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { HighlightedParagraph } from "@/components/HighlightedParagraph";

export async function generateStaticParams() {
    return siteData.blog.map((post) => ({
        slug: post.slug,
    }));
}

/** Build a plain-text description from the first paragraph of the post. */
function getPostDescription(post: (typeof siteData.blog)[number]): string {
    const firstParagraph = post.content[0];
    if (!Array.isArray(firstParagraph)) return "";
    const raw = firstParagraph.map((part) => part.text).join("");
    return raw.length > 158 ? raw.slice(0, 155) + "…" : raw;
}

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const slug = (await params).slug;
    const post = siteData.blog.find((p) => p.slug === slug);
    if (!post) return {};

    const title = `${post.title} — Asim Shirinov`;
    const description = getPostDescription(post);
    const url = `https://asimshirinov.me/blog/${slug}`;

    return {
        title,
        description,
        alternates: { canonical: `/blog/${slug}` },
        openGraph: {
            title,
            description,
            url,
            siteName: "Asim Shirinov",
            type: "article",
        },
        twitter: {
            card: "summary",
            title,
            description,
        },
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const post = siteData.blog.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="flex flex-col gap-8">
            <header className="relative flex items-center justify-center py-2">
                <div className="absolute left-0 top-1/2 -translate-y-1/2">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center text-slate-600 hover:text-slate-900 bg-white border border-slate-200 hover:bg-slate-50 rounded-md p-1.5 shadow-sm transition-colors"
                        aria-label="Back to home"
                    >
                        <ArrowLeft size={16} strokeWidth={2} />
                    </Link>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center px-16">
                    {post.title}
                </h1>
            </header>

            <div className="prose prose-slate prose-a:text-blue-600 hover:prose-a:text-blue-700 max-w-none text-slate-700 whitespace-pre-wrap leading-relaxed">
                {Array.isArray(post.content) ? (
                    post.content.map((paragraph, idx) => (
                        <HighlightedParagraph
                            key={idx}
                            parts={paragraph as any}
                            className="mb-5 last:mb-0"
                        />
                    ))
                ) : (
                    post.content
                )}
            </div>
        </article>
    );
}
