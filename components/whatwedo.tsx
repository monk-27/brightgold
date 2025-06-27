import React from "react";
import { cn } from "@/lib/utils";

const WhatWeDoCard = () => {
    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-3xl border border-white/[0.1] flex flex-col space-y-4",
                "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]"
            )}
            style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            <div className="h-full w-full p-5 lg:p-10 relative">
                <div className="flex flex-col justify-center h-full space-y-6">
                    <div className="font-sans text-xl lg:text-3xl font-bold text-yellow-500 z-10 mb-2 justify-start">
                        What We Do?
                    </div>
                    <div className="font-sans font-extralight text-sm lg:text-base text-white leading-relaxed z-10">
                        <p className="mb-4">
                            It is our privilege to bring you the finest gold from the major
                            mining corporations across the world. Our sources range from the
                            African peninsular regions like Tanzania and Uganda, to the South
                            American heartlands like Peru and Bolivia. We import gold dore bars
                            from some of the world&apos;s largest mining companies, conforming
                            to the DGFT standards set by the Govt. of India. We add to the
                            global precious metals market, offering world-class services
                            tailored for each of the primary, secondary and tertiary sectors.
                            Our clientele now spans from mining companies and jewelers to
                            industrial corporations, commercial banks and governments.
                        </p>
                        <p className="mb-4">
                            At present we are a full-fledged corporation covering Precious
                            Metals Refining services such as:
                        </p>
                        <ul className="list-disc list-inside text-[#C1C2D3] space-y-2">
                            <li>Gold Refining</li>
                            <li>Spent X-Ray and Hypo-Fixer</li>
                            <li>Solution Silver Recycling</li>
                            <li>Gold Plating Electronic Components using the latest technology</li>
                        </ul>
                    </div>
                </div>
                {/* <div className="absolute inset-0">
                    <img
                        src="/b1.svg" // Replace with your gold wave SVG or image path
                        alt="Background Wave"
                        className="w-full h-full object-cover opacity-50"
                    />
                </div> */}
            </div>
        </div>
    );
};

export default WhatWeDoCard;