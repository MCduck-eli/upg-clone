import { Loader2 } from "lucide-react";

export default function Loader() {
    return (
        <div className="w-full flex justify-center items-center">
            <Loader2 size={24} className="animate-spin text-neutral-500" />
        </div>
    );
}
