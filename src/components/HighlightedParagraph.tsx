import React from "react";

export interface ParagraphPart {
    text: string;
    href?: string;
}

interface HighlightedParagraphProps {
    parts: ParagraphPart[];
    highlights?: string[];
    className?: string;
}

export function HighlightedParagraph({ parts, highlights = [], className = "" }: HighlightedParagraphProps) {
    return (
        <p className={className}>
            {parts.map((part, index) => {
                if (part.href) {
                    return (
                        <a
                            key={index}
                            href={part.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block font-semibold text-slate-900 bg-blue-100/50 hover:bg-blue-200/50 px-1 py-0.5 rounded-sm transition-all duration-200 ease-out hover:scale-103 no-underline"
                        >
                            {part.text}
                        </a>
                    );
                }

                if (!highlights || highlights.length === 0) {
                    return <span key={index}>{part.text}</span>;
                }

                const sortedHighlights = [...highlights].sort((a, b) => b.length - a.length);
                const escapeRegExp = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                const pattern = new RegExp(`(${sortedHighlights.map(escapeRegExp).join('|')})`, 'gi');
                const textChunks = part.text.split(pattern);

                return (
                    <span key={index}>
                        {textChunks.map((chunk, i) => {
                            const isHighlight = highlights.some(h => h.toLowerCase() === chunk.toLowerCase());
                            if (isHighlight) {
                                return (
                                    <strong key={i} className="inline-block font-semibold text-slate-900 bg-blue-100/50 hover:bg-blue-200/50 px-1 py-0.5 rounded-sm transition-all duration-200 ease-out hover:scale-105">
                                        {chunk}
                                    </strong>
                                );
                            }
                            return <span key={i}>{chunk}</span>;
                        })}
                    </span>
                );
            })}
        </p>
    );
}
