/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";

export const bars = [
    {
        id: 1,
        title: "GOLD REFINING ",
        des: "Bright Gold Refinery brings the purest and finest gold, our gold refining service integrates multiple methodologies. At the time of Gold purchase, impurities worsen the quality of the gold, verifying the trait is essential.We at Bright Gold with our knowledge experts we assist our clients to get the purest form of gold as we extract gold of 995 to 999 fineness. We have utmost love and respect for our mother nature, so we do the best refining while taking care of the environment as well with the pollution reduction through AQUA REGIS process. Recycling precious metals, such as gold ores, scrap gold, silver or even jewellery by using the world’s leading technology and the best machinery in the business. The measure of Karat refers to the amount of gold in an object as compared to another alloy. Gold is more likely to be found in samples with a higher karate. For instance, 24-karat gold is 100% gold. In India, most of the people prefer 22 karat Gold, whereas if we talk about Europeans or USA, they prefer 18 Karat and 14 karat, simultaneously.",
        img: "/servicegoldbar.png",
        iconLists: [],
        link: "",
    },
    {
        id: 2,
        title: "SILVER REFINING ",

        des: "“Sterling Silver” term is very commonly used, however this is one of the ways to define the purity of the silver, this means that it contains silver which is at least 92.5% pure! Our experts at Bright Gold Refinery bring the finest and purest form of Sterling Silver.Discussing the extraction and refining methodologies, Bright Gold hosts the latest technological approach to refine the best silver along with protecting our mother nature. Electrolytic refining can refine silver metal. If silver is found in copper-containing ores, then the electrolytic refining method is used to extract silver in pure form. When silver nitrate dissolves copper, it forms crystals of elemental silver. Silver can be sold in many different forms at this purity level, such as bars, powder, granules, and wire - these are the physical forms of silver after the silver refining process. For silver to be sold in the market, the refining process is usually the last step before it is ready to sale. Typically, it needs to meet a minimum of 99.9% purity and in most cases 99.99% purity and in most of the cases 99.99% purity, and in some cases 99.999% purity, depending upon the end-use.",
        img: "/servicesilverbar.png",
        iconLists: [],
        link: "",
    },

];

const ProductComponent = () => {
    const [expandedCard, setExpandedCard] = useState<number | null>(null);

    const textVariant = (delay: any) => ({
        hidden: {
            y: 50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay,
            },
        },
    });

    const fadeIn = (
        direction: string,
        type: any,
        delay: any,
        duration: any
    ) => ({
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut",
            },
        },
    });

    return (
        <div className="bg-[#13162D] pt-24 sm:pt-36 py-10 relative">
            <div className="mx-auto px-4 sm:px-6 lg:px-16">
                <div className="grid gap-4">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                        className=""
                    >
                        <div className="flex items-center justify-center px-4 lg:px-52">
                            <motion.div variants={fadeIn("left", "spring", 0.2, 1)}>
                                <img
                                    className="z-20 relative"
                                    src="/1000gmbar.png"
                                    alt="App login screen"
                                />
                            </motion.div>
                            <motion.div variants={textVariant(1.1)}>
                                <img
                                    className="-mt-28 z-20 relative"
                                    src="/minted-coins.png"
                                    alt="app home screen"
                                />
                            </motion.div>
                            <motion.div variants={fadeIn("right", "spring", 0.2, 1)}>
                                <img
                                    className="z-20 relative h-110"
                                    src="/100gmbar.png"
                                    alt="app coin screen"
                                />
                            </motion.div>
                        </div>
                        <motion.p
                            variants={fadeIn("bottom", "spring", 0.2, 1)}
                            className="text-white text-center leading-6 mb-4 mt-6 text-lg"
                        >
                            A place where digital innovation and quality combine! We at Bright
                            Digi Gold are more than simply an organisation; we're a vibrant
                            group of enthusiasts with a mission to add our golden touch to the
                            digital environment.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
            <div className=" py-10">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >
                    <div className="mx-auto px-4 sm:px-6 lg:px-16 relative">
                        <div className="grid sm:grid-cols-2 gap-4 place-items-center">
                            <h1 className="col-span-2 text-3xl sm:text-5xl text-gold01 text-center extrabold leading-tight mb-0 sm:mb-6">
                                1 Kg GOLD BAR
                            </h1>
                            <p className="col-span-2 sm:col-span-1 text-white text-left leading-8 mb-4 mt-6 text-xl">
                                999 Gold is the finest quality of fine (Pure) Gold, as the karate of Gold reduces it means the existence of other metals percentage, & we bring to you the purest form.
                            </p>
                            <motion.div
                                variants={fadeIn("right", "spring", 0.5, 0.5)}
                                className="col-span-2 sm:col-span-1 rounded-2xl"
                            >
                                <img src="/1000gmbar.png" className="mx-auto h-72" alt="1 kg gold bar" />
                            </motion.div>
                            <h1 className="col-span-2 text-3xl sm:text-5xl text-gold01 text-center extrabold leading-tight mb-0 sm:mb-6">
                                100g GOLD BAR
                            </h1>
                            <motion.div
                                variants={fadeIn("left", "spring", 0.5, 0.5)}
                                className="col-span-2 sm:col-span-1 rounded-2xl px-12"
                            >
                                <img src="/100gmbar.png" className="mx-auto h-72" alt="100 gm bar" />
                            </motion.div>
                            <p className="col-span-2 sm:col-span-1 text-white text-left leading-8 mb-4 mt-6 text-xl">
                                The delicacy of 995 indicates that 995 parts of gold are mixed with 5 parts of another metal, which is perfect for your choice of jewelry.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className=" py-10">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >
                    <div className="mx-auto px-4 sm:px-6 lg:px-16 relative">
                        <div className="grid sm:grid-cols-2 gap-4 place-items-center">
                            <h1 className="col-span-2 text-3xl sm:text-5xl text-gold01 text-center extrabold leading-tight mb-0 sm:mb-6">
                                Minted Coins
                            </h1>
                            <p className="col-span-2 sm:col-span-1 text-white text-left leading-8 mb-4 mt-6 text-xl">
                                Minted Coins that we produce are designed to attain and indicate the shapes and designs with perfection to achieve the high quality.
                            </p>
                            <motion.div
                                variants={fadeIn("right", "spring", 0.5, 0.5)}
                                className="col-span-2 sm:col-span-1 rounded-2xl"
                            >
                                <img src="/minted-coins.png" className="mx-auto h-72" alt="1 kg gold bar" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="bg-[#13162D] py-10">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >
                    <div className="mx-auto px-4 sm:px-6 lg:px-16">
                        <h1 className="text-center text-white text-3xl sm:text-5xl extrabold mb-12">
                            Our Services
                        </h1>
                        <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-x-6 gap-y-16">
                            {bars.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    custom={index}
                                    variants={fadeIn("right", "spring", index * 0.25, 0.75)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: false, amount: 0.25 }}
                                    className="relative"
                                >
                                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#13162D] border border-white/[0.1] relative">
                                        {/* Border shine effect */}
                                        <div
                                            className="absolute inset-0 rounded-lg border-4 border-transparent"
                                            style={{
                                                background:
                                                    "linear-gradient(90deg, transparent, #E2CBFF, transparent) border-box",
                                                WebkitMask:
                                                    "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                                                WebkitMaskComposite: "xor",
                                                maskComposite: "exclude",
                                                backgroundSize: "200% 100%", // Double the width for smooth animation
                                                animation: "borderShine 3s linear infinite",
                                            }}
                                        />

                                        <div className="px-6 py-4 relative z-10">
                                            <div className="flex items-center justify-center mb-4">
                                                <img
                                                    src={item.img}
                                                    alt={item.title}
                                                    className="w-full h-40 object-cover rounded-t-lg"
                                                />
                                            </div>
                                            <div className="font-bold text-xl mb-2 text-white">{item.title}</div>
                                            <p
                                                className={`text-[#BEC1DD] text-base transition-all duration-300 ${expandedCard === item.id ? "" : "line-clamp-2"
                                                    }`}
                                            >
                                                {item.des}
                                            </p>
                                        </div>
                                        <div className="flex justify-center items-center px-6 pb-4 relative z-10">
                                            <button
                                                onClick={() => {
                                                    setExpandedCard(expandedCard === item.id ? null : item.id);
                                                }}
                                                className="flex lg:text-xl md:text-xs text-sm text-yellow-500 focus:outline-none"
                                            >
                                                {expandedCard === item.id ? "Read Less" : "Read More"}
                                            </button>
                                            <FaLocationArrow className="ms-3" color="#F1CC13FF" />
                                        </div>
                                    </div>

                                    {/* CSS for border shine animation */}
                                    <style>
                                        {`
                @keyframes borderShine {
                  0% {
                    background-position: -100% 0;
                  }
                  100% {
                    background-position: 100% 0;
                  }
                }
              `}
                                    </style>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProductComponent;