import MotionItem from "@/lib/motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Support() {
    return (
        <div className="w-full h-auto flex-col mt-8 px-4 md:px-0">
            <h1 className="text-4xl mb-4">Support</h1>

            <div className="flex md:flex-row flex-col gap-4">
                <div
                    className="w-full md:flex-1 h-60 cursor-pointer 
                    hover:bg-neutral-400/60 transition-all duration-200 
                    dark:bg-black bg-neutral-300/30 
                    border border-neutral-400/30 
                    rounded-xl flex justify-center items-center"
                >
                    <MotionItem>
                        <div className="flex flex-col justify-center items-center gap-2 text-center px-4">
                            <Image
                                src="/usd.png"
                                alt="usd"
                                width={50}
                                height={50}
                            />
                            <span className="font-semibold">
                                Payment method
                            </span>
                            <span className="text-sm text-gray-500">
                                All about paying for purchases
                            </span>
                            <MoveRight />
                        </div>
                    </MotionItem>
                </div>

                <div
                    className="w-full md:flex-1 h-60 cursor-pointer 
                    hover:bg-neutral-400/60 transition-all duration-200 
                    dark:bg-black bg-neutral-300/30 
                    border border-neutral-400/30 
                    rounded-xl flex justify-center items-center"
                >
                    <MotionItem>
                        <div className="flex flex-col justify-center items-center gap-2 text-center px-4">
                            <Image
                                src="/faq.png"
                                alt="FAQ"
                                width={70}
                                height={70}
                            />
                            <span className="font-semibold">FAQ</span>
                            <span className="text-sm text-gray-500">
                                All about frequently asked questions
                            </span>
                            <MoveRight />
                        </div>
                    </MotionItem>
                </div>

                <div
                    className="w-full md:flex-1 h-60 cursor-pointer 
                    hover:bg-neutral-400/60 transition-all duration-200 
                    dark:bg-black bg-neutral-300/30 
                    border border-neutral-400/30 
                    rounded-xl flex justify-center items-center"
                >
                    <MotionItem>
                        <div className="flex flex-col justify-center items-center gap-2 text-center px-4">
                            <Image
                                src="/delivery.png"
                                alt="delivery"
                                width={50}
                                height={50}
                            />
                            <span className="font-semibold">Delivery</span>
                            <span className="text-sm text-gray-500">
                                Delivery information
                            </span>
                            <MoveRight />
                        </div>
                    </MotionItem>
                </div>
            </div>
        </div>
    );
}
