import { getService } from "@/app/service/service";
import MotionItem from "@/lib/motion";
import IProducts from "@/types/get-products";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa";

async function getProducts(): Promise<IProducts[]> {
    try {
        const components = await getService.getComponents();
        return components;
    } catch (error) {
        console.error("❌ Xato:", error);
        return [];
    }
}

export default async function Components() {
    const components = await getProducts();
    return (
        <div className="flex flex-col w-full md:h-auto h-300 mt-5 mb-8  md:mx-0">
            <div className="flex mb-4 mt-4">
                <h1 className="md:text-4xl text-3xl pl-4">Components</h1>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 h-170 px-4 md:px-0">
                {components?.slice(0, 8).map((items) => (
                    <MotionItem key={items.slug}>
                        <div className="bg-neutral-primary-soft block max-w-sm border border-neutral-500/20 rounded-base shadow-xs ">
                            <div className="md:block hidden relative w-full h-60">
                                <Image
                                    src={items.image.url}
                                    alt="image"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="md:hidden block relative w-full h-40">
                                <Image
                                    src={items.image.url}
                                    alt="image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex justify-center">
                                <button className="flex flex-row mt-6 gap-1">
                                    <span className="text-2xl">
                                        {" "}
                                        {items.title}
                                    </span>
                                    <span className="flex items-center">
                                        <FaArrowRight />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </MotionItem>
                ))}
            </div>
        </div>
    );
}
