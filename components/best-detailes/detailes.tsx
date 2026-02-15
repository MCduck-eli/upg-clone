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
        <div className="w-full mt-8 mb-8 px-4 md:px-0">
            <h1 className="text-3xl md:text-4xl mb-6">Best Detailes</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {detailes.map((product) => (
                    <MotionItem key={product.slug}>
                        <div className="flex flex-col h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700  shadow-sm overflow-hidden">
                            <Link href={`/best/${product.slug}`}>
                                <div className="relative w-full h-60 ">
                                    <Image
                                        src={product.image.url}
                                        alt={product.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </Link>

                            <div className="flex flex-col grow p-3 md:p-4">
                                <Link href={`/best/${product.slug}`}>
                                    <h5 className="text-sm md:text-base font-medium text-gray-800 dark:text-white line-clamp-2 min-h-10 md:min-h-12">
                                        {product.title}
                                    </h5>
                                </Link>

                                <div className="flex justify-between items-center mt-2">
                                    <div className="hidden md:block w-3">
                                        <StarRate />
                                    </div>

                                    <span className="text-pink-500 bg-pink-500/20 border border-pink-500 text-xs px-2 py-0.5 rounded-md">
                                        {product.brand}
                                    </span>
                                </div>

                                <div className="mt-3">
                                    <p className="text-xs text-gray-500">
                                        Price:
                                    </p>
                                    <p className="text-pink-500 font-semibold text-lg">
                                        {product.price} UZS
                                    </p>
                                </div>

                                <div className="mt-auto pt-4">
                                    <Button className="w-full flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600">
                                        <FiShoppingCart />
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </MotionItem>
                ))}
            </div>
        </div>
    );
}
