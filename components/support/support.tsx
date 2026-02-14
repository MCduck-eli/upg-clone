import MotionItem from "@/lib/motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Support() {
    return (
        <div className="w-full h-auto flex-col mt-8 px-2 md:px-0">
            <h1 className="text-4xl mb-4">Support</h1>
            <div className="flex md:flex-row flex-col gap-4">
                <div className="flex flex-col cursor-pointer hover:bg-neutral-400/60 transition-all ease-in-out duration-200 justify-center dark:bg-black bg-neutral-300/30 border border-neutral-400/30 md:w-120 w-117 h-60 relative">
                    <MotionItem>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <Image
                                src={"/usd.png"}
                                alt="usd"
                                width={50}
                                height={50}
                            />
                            <span>Payment method</span>
                            <span>All about paying for purchases</span>
                            <MoveRight />
                        </div>
                    </MotionItem>
                </div>
                <div className="flex flex-col cursor-pointer hover:bg-neutral-400/60 transition-all ease-in-out duration-200 justify-center dark:bg-black bg-neutral-300/30 border border-neutral-400/30 md:w-120 w-117 h-60 relative">
                    <MotionItem>
                        <div className=" flex flex-col justify-center items-center gap-2">
                            <Image
                                src={"/faq.png"}
                                alt="FAQ"
                                width={70}
                                height={70}
                            />
                            <span>FAQ</span>
                            <span>All about frequently asked questions</span>
                            <MoveRight />
                        </div>
                    </MotionItem>
                </div>
                <div className="flex flex-col cursor-pointer hover:bg-neutral-400/60 transition-all ease-in-out duration-200 justify-center dark:bg-black bg-neutral-300/30 border border-neutral-400/30 md:w-120 w-117 h-60 relative">
                    <MotionItem>
                        <div className=" flex flex-col justify-center items-center gap-2">
                            <Image
                                src={"/delivery.png"}
                                alt="delivery"
                                width={50}
                                height={50}
                            />
                            <span>Delivery</span>
                            <span>Delivery information</span>
                            <MoveRight />
                        </div>
                    </MotionItem>
                </div>
            </div>
        </div>
    );
}
