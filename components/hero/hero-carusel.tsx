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
        <div className="w-full md:h-120 h-50 rounded-base overflow-hidden md:mt-3 -mt-12.5 ">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                breakpoints={{
                    0: { navigation: false },
                    768: { navigation: true },
                }}
                className="h-full"
            >
                {catalogItems &&
                    catalogItems.map((images) => (
                        <SwiperSlide className="w-full h-full" key={images.id}>
                            <Image
                                src={images.image}
                                className="object-cover md:block hidden"
                                fill
                                alt="catalog"
                            />

                            <Image
                                src={images.image}
                                className="md:hidden block"
                                width={1000}
                                height={900}
                                alt="catalog"
                            />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}
