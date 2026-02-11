"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

interface MotionItemProps {
    children: React.ReactNode;
}

export default function MotionItem({ children }: MotionItemProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -20 }}
            transition={{
                duration: 1.2,
                ease: [0.42, 0, 0.58, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
