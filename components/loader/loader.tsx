import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface LoadingProps {
    size?: number;
}

export default function Loader({ size }: LoadingProps) {
    return (
        <div className="w-full flex justify-center items-center">
            <Loader2 size={size} className={cn("animate-spin text-pink-500")} />
        </div>
    );
}
