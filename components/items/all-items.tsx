import { getService } from "@/app/service/service";
import IProducts from "@/types/get-products";
import Image from "next/image";
import StarRate from "./star-rate";
import { Button } from "../ui/button";
import { FiShoppingCart } from "react-icons/fi";

import Link from "next/link";
import MotionItem from "@/lib/motion";
import AddButton from "../add-button/add-button";

async function getProducts(): Promise<IProducts[]> {
    try {
        const products = await getService.GetPosts();
        return products;
    } catch (error) {
        console.error("❌ Xato:", error);
        return [];
    }
}

export default async function AllItems() {
    const products = await getProducts();

    return (
        <div className="flex flex-col w-full h-auto md:mt-8 mt-5 mb-8  md:mx-0">
            <h1 className="md:text-4xl text-3xl mb-5 pl-4 md:pl-0">
                New Items
            </h1>

            <div className="grid md:grid-cols-5 grid-cols-2 gap-3 mx-4">
                {products &&
                    products.map((product) => (
                        <MotionItem key={product.slug}>
                            <div className=" bg-neutral-primary-soft block max-w-sm border border-neutral-500/20 rounded-base shadow-xs">
                                <Link
                                    href={`/cart/${product.slug}`}
                                    key={product.slug}
                                >
                                    <div className="md:block hidden relative w-full h-60">
                                        <Image
                                            src={product.image.url}
                                            alt="image"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <div className="md:hidden block relative w-full h-50">
                                        <Image
                                            src={product.image.url}
                                            alt="image"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6 ">
                                        <h5 className=" text-[15px] tracking-tight text-heading h-15 line-clamp-2">
                                            {product.title}
                                        </h5>
                                        <div className="w-full flex justify-between">
                                            <div className="w-2.5 md:block hidden">
                                                <StarRate />
                                            </div>
                                            <span className="inline-flex  justify-end text-pink-500 bg-pink-500/20 items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm">
                                                <svg
                                                    className="w-3 h-3 me-1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"
                                                    />
                                                </svg>
                                                {product.brend}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="pb-6 px-6 flex flex-col">
                                        <span className="text-[13px]">
                                            Price:
                                        </span>
                                        <span className=" text-pink-500 font-semibold text-[20px]">
                                            {product.price} UZS
                                        </span>
                                    </div>
                                </Link>
                                <div>
                                    <AddButton />
                                </div>
                            </div>
                        </MotionItem>
                    ))}
            </div>
        </div>
    );
}
