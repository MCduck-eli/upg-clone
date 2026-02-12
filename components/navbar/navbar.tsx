"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import {
    FiSearch,
    FiCreditCard,
    FiColumns,
    FiHeart,
    FiShoppingCart,
    FiMessageCircle,
    FiUser,
} from "react-icons/fi";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useState } from "react";
import { ModeToggle } from "../mode-toggle/mode-toggle";
import { SignInButton, useAuth, UserButton } from "@clerk/clerk-react";
import Loader from "../loader/loader";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { isSignedIn, isLoaded } = useAuth();

    return (
        <nav className="fixed w-full z-50 top-0 left-0 md:py-2 py-0 bg-background text-foreground border-b border-border transition-colors">
            <div className="max-w-345 flex flex-wrap items-center justify-between gap-4 mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3">
                    <Image
                        src="/upg-logo.png"
                        alt="logo"
                        width={150}
                        height={150}
                        className="dark:hidden block"
                    />
                    <Image
                        src="/logo-dark.png"
                        alt="logo"
                        width={150}
                        height={150}
                        className="dark:block hidden"
                    />
                </Link>

                <div className="relative flex-1 md:flex-none ">
                    <Input placeholder="Search Product" className="md:w-120" />
                    <FiSearch
                        size={18}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none"
                    />
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <ul className="flex items-center gap-6 font-light">
                        <li className="flex flex-col items-center text-[12px] cursor-pointer">
                            <FiCreditCard size={20} className="mb-1" />
                            <span>UZS/USD</span>
                        </li>
                        <li className="flex flex-col items-center text-[12px] cursor-pointer">
                            <FiColumns size={20} className="mb-1" />
                            <span>Compare</span>
                        </li>
                        <li className="flex flex-col items-center text-[12px] cursor-pointer">
                            <FiHeart size={20} className="mb-1" />
                            <span>Favorites</span>
                        </li>

                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <li
                                    className="flex flex-col items-center text-[12px] cursor-pointer"
                                    onMouseEnter={() => setOpen(true)}
                                    onMouseLeave={() => setOpen(false)}
                                >
                                    <FiShoppingCart
                                        size={20}
                                        className="mb-1"
                                    />
                                    <span>Cart</span>
                                </li>
                            </PopoverTrigger>
                            <PopoverContent className="w-60">
                                <span className="text-muted-foreground flex justify-center items-center">
                                    Your cart is empty.
                                </span>
                            </PopoverContent>
                        </Popover>

                        <li className="flex flex-col items-center text-[12px] cursor-pointer">
                            <FiMessageCircle size={20} className="mb-1" />
                            <span>Contact</span>
                        </li>

                        <li className="flex flex-col items-center text-[12px] cursor-pointer">
                            <ModeToggle />
                            <span className="relative bottom-1.5">Theme</span>
                        </li>

                        {!isLoaded && <Loader />}

                        {isLoaded && !isSignedIn && (
                            <SignInButton mode="modal">
                                <li className="border h-10 w-12 flex items-center justify-center border-neutral-500/50">
                                    <FiUser size={20} />
                                </li>
                            </SignInButton>
                        )}

                        {isLoaded && isSignedIn && (
                            <li className="flex items-center justify-center ">
                                <UserButton afterSignOutUrl="/" />
                            </li>
                        )}
                    </ul>
                </div>

                <div className="flex md:hidden items-center gap-4">
                    <ModeToggle />
                    <FiCreditCard size={20} />
                </div>
            </div>
        </nav>
    );
}
