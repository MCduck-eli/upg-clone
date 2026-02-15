"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getService } from "@/app/service/service";
import IProducts from "@/types/get-products";
import Loader from "@/components/loader/loader";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import StarRate from "@/components/items/star-rate";
import Link from "next/link";

export default function ProductPage() {
    const [product, setProduct] = useState<IProducts | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const slug = params.slug;

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setIsLoading(true);
                const products = await getService.GetDetails();
                const found = products.find((p) => p.slug === slug);
                setProduct(found || null);
            } catch (error) {
                console.error(error);
                setProduct(null);
            } finally {
                setIsLoading(false);
            }
        };

        if (slug) fetchProduct();
    }, [slug]);

    if (isLoading) {
        return (
            <div className="w-full flex justify-center items-center h-96">
                <Loader size={50} />
            </div>
        );
    }

    if (!product) {
        return (
            <div className="w-full flex justify-center items-center h-96 text-red-500 text-lg">
                Product not found
            </div>
        );
    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto px-4 py-10 md:py-20">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="relative">
                        <Image
                            src={product.image.url}
                            alt={product.title}
                            width={550}
                            height={550}
                            className="object-cover rounded-2xl md:block hidden"
                        />
                        <Image
                            src={product.image.url}
                            alt={product.title}
                            width={300}
                            height={300}
                            className="object-cover rounded-2xl md:hidden block"
                        />
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                        <h1 className="text-2xl md:text-4xl font-semibold mb-4 dark:text-white text-gray-900">
                            {product.title}
                        </h1>

                        <div className="flex items-center gap-6 mb-4">
                            <p className="text-2xl text-pink-500 font-semibold">
                                {product.price} UZS
                            </p>
                            <StarRate />
                        </div>

                        <span className="mb-6 text-pink-500 bg-pink-500/20 border border-pink-500 px-3 py-1 rounded-md text-sm">
                            {product.brand}
                        </span>

                        <div className="flex flex-col sm:flex-row gap-3 w-full">
                            <Button className="w-full sm:w-auto bg-pink-500 text-lg hover:bg-pink-500/80">
                                Add to Cart
                            </Button>

                            <Link href="/" className="w-full sm:w-auto">
                                <Button
                                    variant="outline"
                                    className="w-full border-pink-500 text-lg"
                                >
                                    Back to home
                                </Button>
                            </Link>
                        </div>

                        <div className="flex flex-row gap-3 mt-8 w-full justify-center md:justify-start">
                            <button className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-xl transition w-1/2 sm:w-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                                </svg>
                                <div className="text-left">
                                    <p className="text-xs text-gray-500 leading-none">
                                        GET IT ON
                                    </p>
                                    <p className="font-medium text-sm">
                                        Google Play
                                    </p>
                                </div>
                            </button>

                            <button className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-xl transition w-1/2 sm:w-auto">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-6 h-6"
                                    viewBox="0 0 305 305"
                                >
                                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                                </svg>
                                <div className="text-left">
                                    <p className="text-xs text-gray-500 leading-none">
                                        Download on the
                                    </p>
                                    <p className="font-medium text-sm">
                                        App Store
                                    </p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
