import Image from "next/image";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa";
import { MoveRight } from "lucide-react";
import MotionItem from "@/lib/motion";

export default function Config() {
    return (
        <>
            <div className="flex flex-col md:hidden px-4">
                <h3 className="text-3xl mb-2">Service</h3>
                <MotionItem>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col cursor-pointer hover:bg-neutral-400/60 transition-all ease-in-out duration-200 justify-center bg-neutral-300/30 border border-neutral-400/30 w-120 h-60 relative">
                            <div className="flex flex-col justify-center items-center gap-2">
                                <Image
                                    src={"/ser1.svg"}
                                    alt="ser1"
                                    width={110}
                                    height={110}
                                />
                                <span className="text-[20px]">Upgrade</span>
                                <span className="text-[12px]">Help Desk</span>
                                <MoveRight />
                            </div>
                        </div>
                        <div className="flex flex-col cursor-pointer hover:bg-neutral-400/60 transition-all ease-in-out duration-200 justify-center bg-neutral-300/30 border border-neutral-400/30 w-120 h-60 relative">
                            <div className=" flex flex-col justify-center items-center gap-2">
                                <Image
                                    src={"/ser2.png"}
                                    alt="ser2"
                                    width={100}
                                    height={100}
                                />
                                <span>Diagnostics</span>
                                <span>Help Desk</span>
                                <MoveRight />
                            </div>
                        </div>
                    </div>
                </MotionItem>
            </div>
            <div className="h-200 w-full md:block hidden">
                <MotionItem>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col w-300">
                            <h3 className="text-3xl mb-1">Configuration</h3>
                            <p className="text-lg">
                                The UPGrade system unit configurator will help
                                you choose your PC configuration and check
                                component compatibility. Choose, compare
                                specifications, and order additional options to
                                create your dream setup!
                            </p>
                            <Button className="flex flex-row mt-4 py-5.25 bg-pink-500 cursor-pointer hover:bg-pink-500 hover:opacity-90 w-40 hover:gap-4 transition-all ease-in-out duration-300">
                                <span>Find a PC</span>
                                <FaArrowRight />
                            </Button>
                        </div>
                        <div className="relative w-full h-180">
                            <Image
                                src="/desktop-configuration.png"
                                alt="config"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </MotionItem>
            </div>
        </>
    );
}
