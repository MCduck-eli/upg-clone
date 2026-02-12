"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";

export default function HeroCarusel() {
    const items = [
        { id: "1", light: "/catalog1.png", dark: "/dark-catalog1.png" },
        { id: "2", light: "/catalog2.png", dark: "/dark-catalog2.png" },
        { id: "3", light: "/catalog3.png", dark: "/dark-catalog3.png" },
        { id: "4", light: "/catalog4.png", dark: "/dark-catalog4.png" },
        { id: "5", light: "/catalog5.png", dark: "/dark-catalog5.png" },
        { id: "6", light: "/catalog6.png", dark: "/dark-catalog6.png" },
    ];

    return (
        <div className="w-full md:h-120 h-65 rounded-base overflow-hidden md:mt-3 -mt-12">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                navigation={{
                    enabled: true,
                }}
                breakpoints={{
                    0: {
                        navigation: { enabled: false },
                    },
                    768: {
                        navigation: { enabled: true },
                    },
                }}
                className="h-full"
            >
                {items.map((item) => (
                    <SwiperSlide
                        key={item.id}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={item.light}
                            alt="catalog"
                            fill
                            className="object-cover dark:hidden"
                            priority
                        />

                        <Image
                            src={item.dark}
                            alt="catalog dark"
                            fill
                            className="object-cover hidden dark:block"
                            priority
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
