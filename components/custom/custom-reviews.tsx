import MotionItem from "@/lib/motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function CustomReviews() {
    return (
        <div className="w-full h-auto flex flex-col mt-15 px-4 md:px-0 mb-10">
            <h1 className="text-3xl mb-8">Customer Reviews</h1>

            {/* GRID LAYOUT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <MotionItem>
                    <div
                        className="h-40 p-4 rounded-xl cursor-pointer
                        hover:bg-neutral-400/60 transition-all duration-200
                        dark:bg-black bg-neutral-300/30
                        border border-neutral-400/30
                        flex flex-col justify-center"
                    >
                        <span className="text-pink-500 text-2xl">
                            Overall rating
                        </span>
                        <span className="text-6xl font-semibold">95%</span>
                    </div>
                </MotionItem>

                <MotionItem>
                    <div
                        className="h-40 p-4 rounded-xl cursor-pointer
                        hover:bg-neutral-400/60 transition-all duration-200
                        dark:bg-black bg-neutral-300/30
                        border border-neutral-400/30
                        flex flex-col justify-center"
                    >
                        <span className="text-pink-500 text-2xl">
                            Yandex.uz
                        </span>

                        <div className="flex justify-between items-center mt-6">
                            <span className="text-sm">Leave your feedback</span>
                            <MoveRight />
                        </div>
                    </div>
                </MotionItem>

                <MotionItem>
                    <div
                        className="h-40 p-4 rounded-xl cursor-pointer
                        hover:bg-neutral-400/60 transition-all duration-200
                        dark:bg-black bg-neutral-300/30
                        border border-neutral-400/30
                        flex flex-col justify-center"
                    >
                        <Image
                            src="/rating.svg"
                            alt="rating"
                            width={120}
                            height={120}
                        />

                        <div className="flex justify-between items-center mt-4">
                            <span className="text-sm">
                                93% of customers would buy here again
                            </span>
                            <MoveRight />
                        </div>
                    </div>
                </MotionItem>

                <MotionItem>
                    <div
                        className="h-40 p-4 rounded-xl cursor-pointer
                        hover:bg-neutral-400/60 transition-all duration-200
                        dark:bg-black bg-neutral-300/30
                        border border-neutral-400/30
                        flex flex-col justify-center"
                    >
                        <span className="text-pink-400 text-2xl">500+</span>

                        <div className="flex justify-between items-center mt-4">
                            <span className="text-sm">
                                Positive ratings throughout the entire period of
                                work
                            </span>
                            <MoveRight />
                        </div>
                    </div>
                </MotionItem>
            </div>
        </div>
    );
}
