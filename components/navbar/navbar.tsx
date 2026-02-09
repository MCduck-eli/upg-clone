"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { FiSearch } from "react-icons/fi";
import { FiCreditCard } from "react-icons/fi";
import { FiColumns } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useState } from "react";
import { FiUser } from "react-icons/fi";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="bg-white  fixed w-full z-50 top-0 start-0 md:py-2 py-0">
                <div className="max-w-345 flex flex-wrap items-center md:justify-between flex-row gap-10 mx-auto p-4">
                    <Link
                        href="https://flowbite.com/"
                        className="md:flex hidden items-center space-x-3 relative rtl:space-x-reverse"
                    >
                        <Image
                            src={"/upg-logo.png"}
                            alt="logo"
                            width={150}
                            height={150}
                        />
                    </Link>

                    <Link
                        href="https://flowbite.com/"
                        className="flex md:hidden items-center space-x-3 relative rtl:space-x-reverse"
                    >
                        <Image
                            src={"/upg-logo.png"}
                            alt="logo"
                            width={100}
                            height={100}
                        />
                    </Link>

                    <div className="md:flex hidden md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <div
                            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                            id="navbar-sticky"
                        >
                            <ul className="flex flex-col justify-between p-4 md:p-0 mt-4 font-light border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
                                <li className="flex flex-col items-center text-[12px] justify-start cursor-pointer">
                                    <FiCreditCard size={20} />
                                    <span>UZS/USD</span>
                                </li>
                                <li className="flex flex-col items-center text-[12px] justify-start cursor-pointer">
                                    <FiColumns size={20} />
                                    <span>Compare</span>
                                </li>
                                <li className="flex flex-col items-center text-[12px] justify-start cursor-pointer">
                                    <FiHeart size={20} />
                                    <span>Favorites</span>
                                </li>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <li
                                            className="flex flex-col items-center text-[12px] justify-start cursor-pointer"
                                            onMouseEnter={() => setOpen(true)}
                                            onMouseLeave={() => setOpen(false)}
                                        >
                                            <FiShoppingCart size={20} />
                                            <span>Favorites</span>
                                        </li>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-100 h-30">
                                        <span className="text-muted-foreground flex justify-center items-center">
                                            Your cart is empty.
                                        </span>
                                    </PopoverContent>
                                </Popover>
                                <li className="flex flex-col items-center text-[12px] justify-start cursor-pointer">
                                    <FiMessageCircle size={20} />
                                    <span>Contact</span>
                                </li>
                                <li className="flex flex-col items-center text-[12px] justify-start cursor-pointer">
                                    <FiSun size={20} />
                                    <span>Theme</span>
                                </li>
                                <li className="border h-10 w-12 text-[12px] border-neutral-500/50">
                                    <div className="flex items-center justify-center mt-2 cursor-pointer">
                                        <FiUser size={20} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="relative md:w-100 w-50">
                        <Input placeholder="Search Product" />
                        <FiSearch
                            size={18}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none"
                        />
                    </div>

                    <div className="flex md:hidden flex-row gap-8">
                        <span className="cursor-pointer">
                            <FiSun size={15} />
                        </span>
                        <span className="cursor-pointer">
                            <FiCreditCard size={15} />
                        </span>
                    </div>
                </div>
            </nav>
        </>
    );
}
