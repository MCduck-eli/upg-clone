"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function HeroCarusel() {
    const catalogItems = [
        {
            id: "1",
            image: "/catalog1.png",
        },
        {
            id: "2",
            image: "/catalog2.png",
        },
        {
            id: "3",
            image: "/catalog3.png",
        },
        {
            id: "4",
            image: "/catalog4.png",
        },
        {
            id: "5",
            image: "/catalog5.png",
        },
        {
            id: "6",
            image: "/catalog6.png",
        },
    ];

    return (
        <div className="w-full h-120 rounded-base overflow-hidden mt-3">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                className="h-full"
            >
                {catalogItems.map((images) => (
                    <SwiperSlide className="w-full h-full" key={images.id}>
                        <Image
                            src={images.image}
                            className="object-cover"
                            fill
                            alt="catalog"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
