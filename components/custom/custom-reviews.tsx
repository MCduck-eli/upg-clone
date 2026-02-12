import { MoveRight } from "lucide-react";
import Image from "next/image";
import MotionItem from "../motion";

export default function CustomReviews() {
    return (
        <div className="w-full md:h-80 h-auto flex flex-col mt-15 px-2  md:px-0 mb-10 md:mb-0">
            <h1 className="text-3xl mb-8">Customer Reviews</h1>
            <div className="flex md:flex-row flex-col gap-4 ">
                <MotionItem>
                    <div className="flex flex-col cursor-pointer hover:bg-neutral-400/60 transition-all p-4 ease-in-out duration-200 justify-center dark:bg-black bg-neutral-300/30 border border-neutral-400/30 md:w-83 w-117 h-40 relative">
                        <span className="text-pink-500 text-2xl">
                            Overall rating
                        </span>
                        <span className="text-6xl font-semibold">95%</span>
                    </div>
                </MotionItem>
                <MotionItem>
                    <div className="flex flex-col cursor-pointer hover:bg-neutral-400/60 transition-all ease-in-out duration-200 justify-center dark:bg-black bg-neutral-300/30 border border-neutral-400/30 md:w-83 w-117 p-4 h-40 relative">
                        <span className="text-pink-500 text-2xl">
                            Yandex.uz
                        </span>
                        <div className="flex justify-between mt-8">
                            <span className="text-4">Lave your feedback</span>
                            <MoveRight />
                        </div>
                    </div>
                </MotionItem>
                <MotionItem>
                    <div className="flex flex-col cursor-pointer hover:bg-neutral-400/60 transition-all ease-in-out duration-200 justify-center dark:bg-black bg-neutral-300/30 border border-neutral-400/30 md:w-83 w-117 p-4 h-40 relative">
                        <div className="relative">
                            <Image
                                src={"rating.svg"}
                                alt="rating"
                                width={150}
                                height={150}
                            />
                        </div>
                        <div className="flex justify-between mt-10">
                            <span className="text-[15px]">
                                93% of customers would buy here again
                            </span>
                            <MoveRight />
                        </div>
                    </div>
                </MotionItem>
                <MotionItem>
                    <div className="flex flex-col cursor-pointer hover:bg-neutral-400/60 transition-all ease-in-out duration-200 justify-center dark:bg-black bg-neutral-300/30 border border-neutral-400/30 md:w-83 w-117 p-4 h-40 relative">
                        <span className="text-pink-400 text-2xl">500+</span>
                        <div className="flex justify-between mt-5">
                            <span className="text-[15px]">
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
