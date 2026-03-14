"use client";

import { Typewriter } from "react-simple-typewriter";
import { siteData } from "@/data/site";

export default function HeroSubtitle() {
    return (
        <div className="h-7 sm:h-8 mb-4 sm:mb-5 text-base sm:text-lg text-slate-500">
            <Typewriter
                words={siteData.typewriter}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={75}
                delaySpeed={2000}
            />
        </div>
    );
}
