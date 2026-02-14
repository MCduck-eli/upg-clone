"use client";

import { FiShoppingCart } from "react-icons/fi";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import IProducts from "@/types/get-products";

export default function AddButton() {
    const [product, setProduct] = useState<IProducts | null>(null);
    const [isClient, setIsClient] = useState(false);
    const [showNotification, setShowNotification] = useState<{
        message: string;
        type: "success" | "error";
    } | null>(null);

    useEffect(() => {
        if (showNotification) {
            const timer = setTimeout(() => {
                setShowNotification(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showNotification]);

    const handleClick = () => {
        if (!isClient || !product) return;

        try {
            const stored = localStorage.getItem("carts");
            let products: IProducts[] = [];

            if (stored) {
                try {
                    products = JSON.parse(stored);
                    if (!Array.isArray(products)) {
                        products = [];
                    }
                } catch (error) {
                    console.error("Error parsing cart data:", error);
                    products = [];
                }
            }

            const isExistProduct = products.find(
                (c) => c.slug === product.slug,
            );

            if (isExistProduct) {
                const updatedData = products.map((c) => {
                    if (c.slug === product.slug) {
                        return {
                            ...c,
                            quantity: (c.quantity || 1) + 1,
                        };
                    }
                    return c;
                });

                localStorage.setItem("carts", JSON.stringify(updatedData));
            } else {
                const data = [...products, { ...product, quantity: 1 }];
                localStorage.setItem("carts", JSON.stringify(data));
            }

            setShowNotification({
                message: "✅ Product added to your bag!",
                type: "success",
            });
        } catch (error) {
            console.error("Error adding to cart:", error);
            setShowNotification({
                message: "❌ Failed to add product to cart",
                type: "error",
            });
        }
    };
    return (
        <div className="pb-6 px-6 flex flex-col ">
            <Button className="flex flex-row mt-4 py-5.25 bg-pink-500 cursor-pointer hover:bg-pink-500 hover:opacity-90">
                <FiShoppingCart /> Add to Card
            </Button>
        </div>
    );
}
