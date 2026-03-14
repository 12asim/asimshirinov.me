import { siteData } from "@/data/site";
import HeroSubtitle from "./HeroSubtitle";
import PhotoCarousel from "./PhotoCarousel";
import { Mail, Github, Linkedin, FileText, Twitter, Instagram } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
    email: <Mail size={22} strokeWidth={2} />,
    github: <Github size={22} strokeWidth={2} />,
    linkedin: <Linkedin size={22} strokeWidth={2} />,
    resume: <FileText size={22} strokeWidth={2} />,
    x: <Twitter size={22} strokeWidth={2} />,
    instagram: <Instagram size={22} strokeWidth={2} />,
};

export function Hero() {
    return (
        <section className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 sm:ml-6 md:ml-8 select-none">
            <PhotoCarousel />

            <div className="flex flex-col justify-center sm:pt-4 text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-2 flex flex-wrap gap-2 justify-center sm:justify-start">
                    {siteData.name.split(' ').map((word, i) => (
                        <span key={i}>{word}</span>
                    ))}
                </h1>

                <HeroSubtitle />

                <div className="flex flex-wrap gap-4 sm:gap-5 mt-2 justify-center sm:justify-start">
                    {siteData.socials.map((link) => {
                        const icon = iconMap[link.label.toLowerCase()];
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-slate-900 transition-colors duration-200 flex items-center gap-1.5"
                                title={link.label}
                            >
                                {icon || <span className="text-sm font-medium">{link.label}</span>}
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
