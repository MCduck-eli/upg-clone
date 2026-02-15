import { getService } from "@/app/service/service";
import IProducts from "@/types/get-products";
import { Button } from "../ui/button";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import StarRate from "../items/star-rate";

import Link from "next/link";
import MotionItem from "@/lib/motion";

async function getProducts(): Promise<IProducts[]> {
    try {
        const detailes = await getService.GetDetails();
        return detailes;
    } catch (error) {
        console.error("❌ Xato:", error);
        return [];
    }
}
export default async function Detailes() {
    const detailes = await getProducts();
    return (
        <div className="flex flex-col w-full h-auto mt-8 mb-8  md:mx-0">
            <h1 className="md:text-4xl text-3xl mb-5 pl-4 md:pl-0">
                Best Detailes
            </h1>
            <div className="grid md:grid-cols-5 grid-cols-2 gap-3 mx-4">
                {detailes &&
                    detailes.map((product) => (
                        <MotionItem key={product.slug}>
                            <div
                                key={product.slug}
                                className="bg-neutral-primary-soft block max-w-sm border border-neutral-500/20 rounded-base shadow-xs md:h-auto h-120"
                            >
                                <Link href={`/best/${product.slug}`}>
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
                                    <div className="md:p-6 p-2">
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
                                                    width="24"
                                                    height="24"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"
                                                    />
                                                </svg>
                                                {product.brand}
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
                                <div className="pb-6 px-6 flex flex-col">
                                    <Button className="flex flex-row mt-4 py-5.25 bg-pink-500 cursor-pointer hover:bg-pink-500 hover:opacity-90">
                                        <FiShoppingCart /> Add to Card
                                    </Button>
                                </div>
                            </div>
                        </MotionItem>
                    ))}
            </div>
        </div>
    );
}
