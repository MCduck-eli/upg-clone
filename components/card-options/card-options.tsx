import { MoveRight } from "lucide-react";

const card = [
    {
        id: 1,
        title: "Leaders",
        description: "in the gaming market",
    },
    {
        id: 2,
        body: "More",
        title: "500 positive",
        description: "reviews",
    },
    {
        id: 3,
        body: "Conducted",
        title: "32 eSports",
        description: "tournament",
    },
    {
        id: 4,
        title: "Top bloggers",
        description: "choose us",
    },
    {
        id: 5,
        body: "Equipment",
        title: "60 computers clubas",
        description: "turnkey",
    },
];

export default function CardOptions() {
    return (
        <div className="w-full h-50  duration-200 md:flex hidden flex-row  items-center justify-around cursor-pointer">
            {card.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col relative justify-center items-center hover:bg-neutral-300/30 transition-all ease-in-out border border-neutral-400/30  p-2 w-full h-full "
                >
                    <div className="absolute top-6">
                        <span>{item.body}</span>
                        <h3 className="text-pink-500">{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                    <div className="absolute bottom-8">
                        <MoveRight />
                    </div>
                </div>
            ))}
        </div>
    );
}
