import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
    return (
        <>
            <input
                type={type}
                data-slot="input"
                placeholder=""
                className={cn(
                    "border border-neutral-500/40 px-2 py-1 pr-10 w-full",
                    className,
                )}
                {...props}
            />
        </>
    );
}

export { Input };
