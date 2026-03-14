"use client";

import { siteData } from "@/data/site";
import { ArrowUp } from "lucide-react";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="pt-8 pb-4 flex flex-col items-center gap-6 mt-8">
            <div className="w-full h-px bg-slate-200" />
            <div className="max-w-full flex items-center justify-between w-full">
                <p className="text-sm text-slate-500">
                    {siteData.footerText}
                </p>

                <button
                    onClick={scrollToTop}
                    className="p-1.5 text-slate-400 hover:text-slate-800 hover:border-slate-300 border border-transparent rounded-md transition-all flex items-center justify-center shrink-0"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={18} strokeWidth={2} />
                </button>
            </div>
        </footer>
    );
}
