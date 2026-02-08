"use client";

import React from "react";

export default function StarRate() {
    return (
        <div className="flex flex-row-reverse justify-end items-center space-x-1 space-x-reverse">
            {[1, 2, 3, 4, 5].map((star) => (
                <React.Fragment key={star}>
                    <input
                        id={`hs-ratings-readonly-${star}`}
                        type="radio"
                        name="hs-ratings-readonly"
                        value={star}
                        className="peer w-4 h-4 bg-transparent border-0 text-transparent cursor-pointer appearance-none checked:bg-none focus:outline-none"
                    />
                    <label
                        htmlFor={`hs-ratings-readonly-${star}`}
                        className="peer-checked:text-yellow-400 text-gray-300 pointer-events-none dark:peer-checked:text-yellow-500"
                    >
                        <svg
                            className="w-3 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                        >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    </label>
                </React.Fragment>
            ))}
        </div>
    );
}
