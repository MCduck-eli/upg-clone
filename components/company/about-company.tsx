import Image from "next/image";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import MotionItem from "../motion";

export default function AboutCompany() {
    return (
        <div className="px-2 md:px-0">
            <h2 className="text-3xl mb-2 md:pl-0 pl-2 ">About Company</h2>
            <div className="w-full h-auto border border-neutral-500/20 ">
                <MotionItem>
                    <div className="flex md:justify-between justify-center md:flex-row flex-col ">
                        <div className="relative">
                            <Image
                                src="/about-company.jpg"
                                alt="About Company"
                                width={690}
                                height={400}
                            />
                        </div>
                        <div className="flex md:w-[50%] w-full flex-col px-4 py-4  text-black md:p-8 p-0 mt-5 md:mt-0">
                            <h3 className="text-3xl mb-1">About Company</h3>
                            <p className="text-muted-foreground ">
                                We've been selling computer equipment in
                                Uzbekistan since 2009. We're official partners
                                with many international companies, guaranteeing
                                the quality of our products. <br />
                                Our experienced staff is always ready to help
                                you choose the right equipment. Our showroom
                                offers a wide selection of products. <br /> We
                                offer delivery throughout the republic and
                                support all payment methods for your
                                convenience.
                            </p>
                            <button className="mt-4 py-2.5 px-6 w-35 text-sm cursor-pointer border dark:text-white border-pink-500 text-black hover:bg-pink-500 hover:text-white transition-colors duration-300">
                                Find out more
                            </button>
                        </div>
                    </div>
                </MotionItem>
                <MotionItem>
                    <div className="flex md:hidden flex-col w-full border-y border-neutral-500/20">
                        <div className="flex justify-between cursor-pointer py-8 items-center px-4 border border-neutral-500/20">
                            <h3 className="text-[15px]">
                                <span className="text-pink-500">Leaders</span>{" "}
                                in the gaming market
                            </h3>
                            <MoveRight />
                        </div>
                        <div className="flex justify-between cursor-pointer py-8 items-center px-4 border border-neutral-500/20">
                            <h3 className="text-[15px]">
                                More{" "}
                                <span className="text-pink-500">
                                    500 positive
                                </span>
                                reviews
                            </h3>
                            <MoveRight />
                        </div>
                        <div className="flex justify-between cursor-pointer py-8 items-center px-4 border border-neutral-500/20">
                            <h3 className="text-[15px]">
                                Conducated
                                <span className="text-pink-500">
                                    32 eSports
                                </span>
                                tournament
                            </h3>
                            <MoveRight />
                        </div>
                        <div className="flex justify-between cursor-pointer py-8 items-center px-4 border border-neutral-500/20">
                            <h3 className="text-[15px]">
                                <span className="text-pink-500">
                                    Top bloggers
                                </span>
                                choose us
                            </h3>
                            <MoveRight />
                        </div>
                        <div className="flex justify-between cursor-pointer py-8 items-center px-4 border border-neutral-500/20">
                            <h3 className="text-[15px]">
                                Equipped
                                <span className="text-pink-500">
                                    60 computer clubs
                                </span>
                                turnkey
                            </h3>
                            <MoveRight />
                        </div>
                    </div>
                </MotionItem>
            </div>
        </div>
    );
}
