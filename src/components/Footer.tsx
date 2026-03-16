"use client";

import { siteData } from "@/data/site";
import { ArrowUp, Mail, Github, Linkedin, FileText } from "lucide-react";

const footerLinks = [
    { label: "GitHub", icon: Github, key: "github" },
    { label: "LinkedIn", icon: Linkedin, key: "linkedin" },
    { label: "Resume", icon: FileText, key: "resume" },
];

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const emailSocial = siteData.socials.find(
        (s) => s.label.toLowerCase() === "email"
    );
    const emailAddress = emailSocial
        ? emailSocial.href.replace("mailto:", "")
        : "";

    return (
        <footer className="pt-16 pb-10 flex flex-col items-center gap-8 mt-12">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
                Let&apos;s Connect
            </h2>

            {/* Email */}
            {emailAddress && (
                <a
                    href={emailSocial?.href}
                    className="flex items-center gap-2.5 text-slate-600 hover:text-slate-900 transition-colors duration-200 text-base"
                >
                    <Mail size={18} strokeWidth={2} />
                    <span>{emailAddress}</span>
                </a>
            )}

            {/* Social links row */}
            <div className="flex items-center gap-6 sm:gap-8">
                {footerLinks.map((item) => {
                    const social = siteData.socials.find(
                        (s) => s.label.toLowerCase() === item.key
                    );
                    if (!social) return null;
                    const Icon = item.icon;
                    return (
                        <a
                            key={item.key}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors duration-200 text-sm font-medium"
                        >
                            <Icon size={18} strokeWidth={2} />
                            <span>{item.label}</span>
                        </a>
                    );
                })}
            </div>

            {/* Scroll to top button */}
            <button
                onClick={scrollToTop}
                className="mt-4 w-16 h-8 bg-[#4571e0] hover:bg-[#3a5fc7] text-white rounded-full flex items-center justify-center transition-colors duration-200 shadow-sm cursor-pointer"
                aria-label="Scroll to top"
            >
                <ArrowUp size={18} strokeWidth={2.5} />
            </button>
        </footer>
    );
}
