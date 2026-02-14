"use client";

import IProducts from "@/types/get-products";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CartProduct() {
    const [products, setProduct] = useState<IProducts[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedProducts = localStorage.getItem("carts");
        if (storedProducts) {
            try {
                const parsedProducts = JSON.parse(storedProducts);
                setProduct(parsedProducts);
            } catch (error) {
                console.error("Error parsing cart data:", error);
            }
        }
        setIsLoading(false);
    }, []);

    const updateLocalStorage = (updatedProducts: IProducts[]) => {
        if (typeof window !== "undefined") {
            localStorage.setItem("carts", JSON.stringify(updatedProducts));
        }
    };

    const removeProduct = (slug: string) => {
        const updateProduct = products.filter((c) => c.slug !== slug);
        setProduct(updateProduct);
        updateLocalStorage(updateProduct);
    };

    const productIncrement = (slug: string) => {
        const updateProduct = products.map((c) => {
            if (c.slug === slug) {
                return { ...c, quantity: c.quantity ? c.quantity + 1 : 1 };
            }
            return c;
        });
        setProduct(updateProduct);
        updateLocalStorage(updateProduct);
    };

    const productDecrement = (slug: string) => {
        const exiteProduct = products.find((c) => c.slug === slug);

        if (exiteProduct?.quantity === 1) {
            removeProduct(exiteProduct.slug);
        } else {
            const updateProduct = products.map((c) => {
                if (c.slug === slug) {
                    return { ...c, quantity: c.quantity ? c.quantity - 1 : 0 };
                }
                return c;
            });
            setProduct(updateProduct);
            updateLocalStorage(updateProduct);
        }
    };

    useEffect(() => {
        const total = products.reduce((acc, item) => {
            const quantity = item.quantity || 1;
            return acc + item.rating.rate * quantity;
        }, 0);
        setTotal(total);
    }, [products]);

    if (isLoading) {
        return (
            <section className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">
                        Loading cart...
                    </p>
                </div>
            </section>
        );
    }

    return products.length ? (
        <section className="bg-white py-8 antialiased mt-20 md:mt-10 dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-7xl px-4 2xl:px-0">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                    My products
                </h2>

                <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                        {products.map((item) => {
                            const quantity = item.quantity || 1;
                            return (
                                <div className="space-y-6" key={item.slug}>
                                    <div className="rounded-lg border mb-4 border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                        <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                            <div className="shrink-0 md:order-1">
                                                <div className="h-30 w-30 relative">
                                                    <Image
                                                        src={item.image.url}
                                                        alt="cart"
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between md:order-3 md:justify-end">
                                                <div className="flex items-center">
                                                    <button
                                                        type="button"
                                                        id={`decrement-button-${item.slug}`}
                                                        onClick={() =>
                                                            productDecrement(
                                                                item.slug,
                                                            )
                                                        }
                                                        data-input-counter-decrement={`counter-input-${item.slug}`}
                                                        className="inline-flex h-8 w-8 sm:h-6 sm:w-6 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                                    >
                                                        <svg
                                                            className="h-3 w-3 sm:h-2.5 sm:w-2.5 text-gray-900 dark:text-white"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 18 2"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M1 1h16"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <input
                                                        type="text"
                                                        id={`counter-input-${item.slug}`}
                                                        data-input-counter
                                                        className="w-12 sm:w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                                        placeholder=""
                                                        value={quantity}
                                                        readOnly
                                                    />
                                                    <button
                                                        type="button"
                                                        id={`increment-button-${item.slug}`}
                                                        onClick={() =>
                                                            productIncrement(
                                                                item.slug,
                                                            )
                                                        }
                                                        data-input-counter-increment={`counter-input-${item.slug}`}
                                                        className="inline-flex h-8 w-8 sm:h-6 sm:w-6 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                                    >
                                                        <svg
                                                            className="h-3 w-3 sm:h-2.5 sm:w-2.5 text-gray-900 dark:text-white"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 18 18"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M9 1v16M1 9h16"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="text-end md:order-4 md:w-32">
                                                    <p className="text-base font-bold text-gray-900 dark:text-white">
                                                        $
                                                        {(
                                                            item.rating.rate *
                                                            quantity
                                                        ).toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                <a
                                                    href="#"
                                                    className="text-base font-semibold text-gray-900 hover:underline dark:text-white"
                                                >
                                                    {item.title}
                                                </a>

                                                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                                                        onClick={() =>
                                                            removeProduct(
                                                                item.slug,
                                                            )
                                                        }
                                                    >
                                                        <svg
                                                            className="me-1.5 h-5 w-5"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M6 18 17.94 6M18 18 6.06 6"
                                                            />
                                                        </svg>
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
                        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                            <p className="text-xl font-semibold text-gray-900 dark:text-white">
                                Order summary
                            </p>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                            Original price
                                        </dt>
                                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                                            ${total.toFixed(2)}
                                        </dd>
                                    </dl>

                                    <dl className="flex items-center justify-between gap-4">
                                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                                            Shipping
                                        </dt>
                                        <dd className="text-base font-medium text-gray-900 dark:text-white">
                                            $10.00
                                        </dd>
                                    </dl>
                                </div>

                                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                                        Total
                                    </dt>
                                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                                        ${(total + 10).toFixed(2)}
                                    </dd>
                                </dl>
                            </div>

                            <a
                                href="#"
                                className="flex w-full items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"
                            >
                                Proceed to Checkout
                            </a>

                            <div className="flex items-center justify-center gap-2">
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                    {" "}
                                    or{" "}
                                </span>
                                <Link
                                    href="/all-products"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-700 underline hover:no-underline dark:text-blue-500"
                                >
                                    Continue Shopping
                                    <svg
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 12H5m14 0-4 4m4-4-4-4"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) : (
        <section className="bg-white dark:bg-gray-900 mt-20 md:mt-0 min-h-screen">
            <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
                <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                    <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                            />
                        </svg>
                    </p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                        Your cart is empty
                    </h1>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                        Add some products to your cart and they will appear
                        here.
                    </p>

                    <div className="flex items-center justify-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                        <Link href={"/"}>
                            <button className="cursor-pointer w-full px-5 py-3  text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                                Products
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
