import { FiGrid } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FiMonitor } from "react-icons/fi";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function Catalog() {
    const catalogItems = [
        {
            body: "Game Builds",
        },
        {
            body: "Computer components",
        },
        {
            body: "Mouse pads",
        },
        {
            body: "Game controllsers",
        },
        {
            body: "Wi-Fi Router",
        },
        {
            body: "Accessories",
        },
        {
            body: "Monitor",
        },
        {
            body: "Laptops",
        },
        {
            body: "Headphones",
        },
        {
            body: "Keyboards",
        },
        {
            body: "Mice",
        },
        {
            body: "Columns",
        },
    ];

    return (
        <div className="md:flex hidden justify-between w-50 h-auto gap-2">
            <Popover>
                <PopoverTrigger asChild>
                    <div className="flex flex-row text-sm bg-pink-500 py-2 px-4 text-white gap-1 cursor-pointer">
                        <FiGrid size={25} />
                        <span className="flex items-center">Catalog</span>
                    </div>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="flex flex-col gap-6">
                        {catalogItems.map((item) => (
                            <span className="cursor-pointer">{item.body}</span>
                        ))}
                    </div>
                </PopoverContent>
            </Popover>
            <div className="flex flex-row py-2 px-4 gap-1 cursor-pointer text-sm ">
                <FiSettings size={25} />
                <span className="flex items-center">Configuration</span>
            </div>
            <div className="flex flex-row py-2 px-4 gap-1 cursor-pointer text-sm">
                <FiMonitor size={25} />
                <span className="flex items-center">Computer</span>
            </div>
            <div className="text-sm flex flex-row py-2 px-4 cursor-pointer">
                <span className="flex items-center w-17.5">New Items</span>
            </div>
            <div className="text-sm flex flex-row py-2 px-4 cursor-pointer">
                <span className="flex items-center w-45">
                    Discounts on Wi-Fi routers
                </span>
            </div>
            <div className="text-sm flex flex-row mr-4 ml-2  border-b-2 border-pink-500 cursor-pointer">
                <span className="flex items-center w-14">Xyper-X</span>
            </div>
            <div className="text-sm flex flex-row border-b-2 border-pink-500 cursor-pointer">
                <span className="flex items-center w-18">All brands</span>
            </div>
        </div>
    );
}
