import { siteData } from "@/data/site";
import React from "react";
import { HighlightedParagraph } from "./HighlightedParagraph";

export function About() {
    return (
        <section>
            <div className="bg-white border border-slate-200 rounded-md p-6 sm:p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
                {siteData.aboutParagraphs.map((paragraph, idx) => (
                    <HighlightedParagraph
                        key={idx}
                        parts={paragraph}
                        highlights={siteData.aboutHighlights}
                        className="mb-5 last:mb-0 leading-[1.7] text-slate-700 text-[15px] sm:text-base"
                    />
                ))}
            </div>
        </section>
    );
}
