"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const photos = [
    { src: "/IMG_9113.JPG", alt: "Asim Shirinov 1" },
    { src: "/IMG_8766.JPG", alt: "Asim Shirinov 2" },
    { src: "/IMG_0156.JPG", alt: "Asim Shirinov 3" },
    // { src: "/IMG_8534.JPG", alt: "Asim Shirinov 4" },
    // { src: "/IMG_8538.JPG", alt: "Asim Shirinov 5" },
    { src: "/IMG_8544.JPG", alt: "Asim Shirinov 6" },
    { src: "/IMG_8596.JPG", alt: "Asim Shirinov 7" },
    { src: "/IMG_9334.JPG", alt: "Asim Shirinov 9" },
    { src: "/IMG_9538.JPG", alt: "Asim Shirinov 10" },
    { src: "/IMG_9721.JPG", alt: "Asim Shirinov 11" },
];

export default function PhotoCarousel() {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    const handleClick = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };

    const currentPhoto = photos[currentPhotoIndex];

    const getNextPhotos = (count: number) => {
        return Array.from({ length: count }, (_, i) => {
            const index = (currentPhotoIndex + i + 1) % photos.length;
            return photos[index];
        });
    };

    const nextPhotos = getNextPhotos(3);

    return (
        <div className="shrink-0 relative">
            <div
                className="relative w-32 h-32 sm:w-48 sm:h-48 cursor-pointer group"
                onClick={handleClick}
            >
                {nextPhotos.map((photo, index) => (
                    <div
                        key={`fan-${index}`}
                        className={`absolute inset-0 w-full h-full rounded-md border border-slate-300 bg-slate-200 overflow-hidden transition-all duration-300 pointer-events-none ${index === 0
                            ? "opacity-0 group-hover:opacity-60 group-hover:rotate-[-6deg] group-hover:-translate-x-1 group-hover:-translate-y-1"
                            : index === 1
                                ? "opacity-0 group-hover:opacity-60 group-hover:rotate-[6deg] group-hover:translate-x-1 group-hover:-translate-y-1"
                                : "opacity-0 group-hover:opacity-60 group-hover:rotate-[-3deg] group-hover:-translate-x-0.5 group-hover:translate-y-1"
                            }`}
                        style={{ zIndex: index + 1 }}
                    >
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 128px, 192px"
                            draggable={false}
                        />
                    </div>
                ))}

                <div className="relative z-10 w-full h-full rounded-md border border-slate-300 bg-slate-200 overflow-hidden transition-all duration-300 shadow-sm">
                    <Image
                        src={currentPhoto.src}
                        alt={currentPhoto.alt}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 640px) 128px, 192px"
                        draggable={false}
                    />
                </div>

                <div className="absolute inset-0 z-20 flex items-center justify-center rounded-md bg-black/0 group-hover:bg-black/10 transition-all duration-200">
                    <ChevronRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40 rounded-full p-0.5 w-6 h-6 sm:w-8 sm:h-8" strokeWidth={2.5} />
                </div>
            </div>
        </div>
    );
}
