import Image from "next/image";
import { FiMessageCircle } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

export default function FooterPage() {
    return (
        <div className="w-full dark:bg-black bg-neutral-400/20  md:h-100 h-auto">
            <div className="container max-w-346 md:mx-auto md:mt-10 mt-5 border-b border-pink-500 mx-2 w-auto">
                <div className="flex md:flex-row flex-col w-full gap-2 mb-10">
                    <div className="relative mb-4 md:mb-0 md:block hidden">
                        <Image
                            src="/upg-logo.png"
                            alt="logo"
                            width={200}
                            height={200}
                            className="dark:hidden block"
                        />
                        <Image
                            src="/logo-dark.png"
                            alt="logo"
                            width={200}
                            height={200}
                            className="dark:block hidden"
                        />
                    </div>

                    <div className="relative mb-4 md:mb-0 md:hidden block">
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
                    </div>

                    <div className="mx-40 md:flex flex-row hidden  gap-20">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold">Company</h1>
                            <span className="cursor-pointer hover:text-neutral-600">
                                Contact
                            </span>
                            <span className="cursor-pointer hover:text-neutral-600">
                                About Us
                            </span>
                            <span className="cursor-pointer hover:text-neutral-600">
                                About Us
                            </span>
                            <span className="cursor-pointer hover:text-neutral-600">
                                Why Us
                            </span>
                            <span className="cursor-pointer hover:text-neutral-600">
                                Public offer
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold">Service</h1>
                            <span className="cursor-pointer hover:text-neutral-600">
                                Upgrade
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold">Support</h1>
                            <span className="cursor-pointer hover:text-neutral-600">
                                Delivery
                            </span>
                            <span className="cursor-pointer hover:text-neutral-600">
                                Method area
                            </span>
                            <span className="cursor-pointer hover:text-neutral-600">
                                FAQ
                            </span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold">Projects</h1>
                            <span className="cursor-pointer hover:text-neutral-600">
                                Bloggers
                            </span>
                            <span className="cursor-pointer hover:text-neutral-600">
                                Gaming clubs
                            </span>
                            <span className="cursor-pointer hover:text-neutral-600">
                                eSports
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span className="mb-5 flex flex-row">
                            <div className="flex items-center">
                                <FiMessageCircle />
                            </div>
                            Phones
                        </span>
                        <span className="flex flex-col">
                            <p>+99890000000 </p> +99XXXXXXX
                        </span>
                        <span className="mb-5 flex flex-row">
                            <div className="flex items-center">
                                <FiMapPin />
                            </div>
                            Phones
                        </span>
                        <span className="flex flex-col">
                            Tashkent, st. Navoi 37 Malika Shopping Center Shop
                            24
                        </span>
                        <span className=" flex flex-row mt-5">
                            <div className="flex items-center">
                                <FiMapPin />
                            </div>
                            Opening hours
                        </span>
                        <span>Every day from 10:00 to 20:00</span>
                    </div>
                </div>
            </div>
            <div className="container max-w-7xl mx-auto mt-2 md:flex hidden justify-between">
                <div className="flex flex-row gap-1">
                    <Image
                        src={"/insta-log.png"}
                        alt="instagram"
                        width={40}
                        height={10}
                    />
                    <span className="flex flex-col text-pink-500">
                        <p>Instagram</p>
                        <p>187 thousand subscribers</p>
                    </span>
                </div>
                <div className="flex flex-row gap-1">
                    <Image
                        src={"/youtube-log.png"}
                        alt="instagram"
                        width={40}
                        height={10}
                    />
                    <span className="flex flex-col text-pink-500">
                        <p>YouTube</p>
                        <p>121 thousand subscribers</p>
                    </span>
                </div>
                <div className="flex flex-row gap-1">
                    <Image
                        src={"/tg-log.png"}
                        alt="instagram"
                        width={40}
                        height={10}
                    />
                    <span className="flex flex-col text-pink-500">
                        <p>Telegram</p>
                        <p>23.4 thousand subscribers</p>
                    </span>
                </div>
                <div className="flex flex-row gap-1">
                    <Image
                        src={"/tiktok-log.png"}
                        alt="instagram"
                        width={40}
                        height={10}
                    />
                    <span className="flex flex-col text-pink-500">
                        <p>Tiktok</p>
                        <p>30 thousand subscribers</p>
                    </span>
                </div>
            </div>
        </div>
    );
}
