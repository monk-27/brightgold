
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { FaLocationArrow, FaTimes } from 'react-icons/fa';

export const bars = [
    {
        id: 1,
        title: "Manufacturing Challenges",
        des: "Refining the world's most precious metals is not an easy task, obstacles keep blocking our way, but Bright Gold provides great management specifics. Flotation, amalgamation, cyanidation, and carbon-in-pulp are the four main progression routes used in refining gold. Entire procedures require the grinding of the gold ore to begin, and more than one process may be applied to the same batch of gold ore. Bright Gold uses the best resources and equipment to process gold ore.",
        img: "/Manufacture.svg",
        iconLists: [],
        link: "",
    },
    {
        id: 2,
        title: "Workers Safety",
        des: "The mining industry relies on workers, and their safety is our utmost priority. Workers are excellently trained in their work, also our refinery maintains the highest principles in refining and recuperating metals so that the final products are paramount, that any industry can proffer. Bright Metal Refiners, we are dyed-in-the-wool to deliver the highest level of purity and service for our customers.",
        img: "/Safety.svg",
        iconLists: [],
        link: "",
    },
    {
        id: 3,
        title: "Reputational Damage",
        des: "Modern Practices have improved safety, decreased fatalities, and significantly reduced environmental impact, but being a Gold refining industry we suffer from a reputation being an unsafe industry, that is why Bright Gold Refineries uses best-in-class equipment and techniques that are safe and give the highest quality.",
        img: "/Reputaion.svg",
        iconLists: [],
        link: "",
    },
    {
        id: 4,
        title: "Waste removal / Water management",
        des: "Bright Gold prioritizes customers’ contentment and our mother nature so we blend up all the obligatory components to ensure the quality of gold as well as nature. We stick to the safest, untainted and slightest Pollution grounding mining Method, i.e.; Aqua Regia. We strive to provide the best products while preserving nature.",
        img: "/Management.svg",
        iconLists: [],
        link: "",
    },
    {
        id: 5,
        title: "Preeminent Support",
        des: "At Bright Gold, we believe in serving our customers and as precedence, that is why we offer first-rate support around the clock to hand rounding the finest. Got a message, comment or suggestion? Feel free to reach out to our service experts, we will be happy to assist you.",
        img: "/Support.svg",
        iconLists: [],
        link: "",
    },
];

const FundamentalAspects = () => {
    const [expandedCard, setExpandedCard] = useState(null);
    const [selectedCard, setSelectedCard] = useState<any>(null);

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

    const fadeIn = (direction: any, type: any, delay: any, duration: any) => ({
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

    const modalVariants = {
        hidden: {
            y: "100vh",
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.5,
            },
        },
        exit: {
            y: "100vh",
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: "easeIn",
            },
        },
    };

    const handleOpenModal = (item: any) => {
        setSelectedCard(item);
    };

    const handleCloseModal = () => {
        setSelectedCard(null);
    };

    return (
        <div>
            <div className="bg-[#13162D] py-10">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >
                    <div className="mx-auto px-4 sm:px-6 lg:px-16">
                        <h1 className="text-center text-white text-3xl sm:text-5xl font-extrabold mb-12">
                            Fundamental Aspects
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {bars.slice(0, 3).map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    custom={index}
                                    variants={fadeIn("right", "spring", index * 0.25, 0.75)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: false, amount: 0.25 }}
                                    className="relative"
                                >
                                    <div className="py-10 max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#13162D] border border-white/[0.1] relative">
                                        <div
                                            className="absolute inset-0 rounded-lg border-4 border-transparent"
                                            style={{
                                                background:
                                                    "linear-gradient(90deg, transparent, #EFCE13FF, transparent) border-box",
                                                WebkitMask:
                                                    "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                                                WebkitMaskComposite: "xor",
                                                maskComposite: "exclude",
                                                backgroundSize: "200% 100%",
                                                animation: "borderShine 3s linear infinite",
                                            }}
                                        />
                                        <div className="px-6 py-4 relative z-10">
                                            <div className="flex items-center justify-center mb-4">
                                                <img
                                                    src={item.img}
                                                    alt={item.title}
                                                    className="w-20 h-20 object-cover rounded-t-lg"
                                                />
                                            </div>
                                            <div className="font-bold text-xl mb-2 text-white text-center">
                                                {item.title}
                                            </div>
                                            <p
                                                className={`text-[#e3d837] text-base transition-all duration-300 ${expandedCard === item.id ? "" : "line-clamp-2"
                                                    }`}
                                            >
                                                {item.des}
                                            </p>
                                        </div>
                                        <div className="flex justify-center items-center px-6 pb-4 relative z-10">
                                            <button
                                                onClick={() => handleOpenModal(item)}
                                                className="flex lg:text-xl md:text-xs text-sm text-yellow-500 focus:outline-none"
                                            >
                                                Read More
                                            </button>
                                            <FaLocationArrow className="ms-3" color="#F7D40FFF" />
                                        </div>
                                    </div>
                                    <style>
                                        {`
                                            @keyframes borderShine {
                                                0% { background-position: -100% 0; }
                                                100% { background-position: 100% 0; }
                                            }
                                        `}
                                    </style>
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {bars.slice(3, 5).map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        custom={index + 3}
                                        variants={fadeIn("right", "spring", (index + 3) * 0.25, 0.75)}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: false, amount: 0.25 }}
                                        className="relative"
                                    >
                                        <div className="py-10 max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#13162D] border border-white/[0.1] relative">
                                            <div
                                                className="absolute inset-0 rounded-lg border-4 border-transparent"
                                                style={{
                                                    background:
                                                        "linear-gradient(90deg, transparent, #EFCE13FF, transparent) border-box",
                                                    WebkitMask:
                                                        "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                                                    WebkitMaskComposite: "xor",
                                                    maskComposite: "exclude",
                                                    backgroundSize: "200% 100%",
                                                    animation: "borderShine 3s linear infinite",
                                                }}
                                            />
                                            <div className="px-6 py-4 relative z-10">
                                                <div className="flex items-center justify-center mb-4">
                                                    <img
                                                        src={item.img}
                                                        alt={item.title}
                                                        className="w-20 h-20 object-cover rounded-t-lg"
                                                    />
                                                </div>
                                                <div className="font-bold text-lg mb-2 text-white text-center">
                                                    {item.title}
                                                </div>
                                                <p
                                                    className={`text-[#BEC1DD] text-base transition-all duration-300 ${expandedCard === item.id ? "" : "line-clamp-2"
                                                        }`}
                                                >
                                                    {item.des}
                                                </p>
                                            </div>
                                            <div className="flex justify-center items-center px-6 pb-4 relative z-10">
                                                <button
                                                    onClick={() => handleOpenModal(item)}
                                                    className="flex lg:text-xl md:text-xs text-sm text-yellow-500 focus:outline-none"
                                                >
                                                    Read More
                                                </button>
                                                <FaLocationArrow className="ms-3" color="#ECDD0CFF" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedCard && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-[#13162D] rounded-lg max-w-lg w-full mx-4 relative border border-white/[0.1]"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div
                                className="absolute inset-0 rounded-lg border-4 border-transparent"
                                style={{
                                    background:
                                        "linear-gradient(90deg, transparent, #EFCE13FF, transparent) border-box",
                                    WebkitMask:
                                        "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                    backgroundSize: "200% 100%",
                                    animation: "borderShine 3s linear infinite",
                                }}
                            />
                            <div className="relative z-10 p-6">
                                <button
                                    onClick={handleCloseModal}
                                    className="absolute top-4 right-4 text-yellow-500 hover:text-yellow-400"
                                >
                                    <FaTimes size={24} />
                                </button>
                                <div className="flex items-center justify-center mb-4">
                                    <img
                                        src={selectedCard.img}
                                        alt={selectedCard.title}
                                        className="w-24 h-24 object-cover rounded-t-lg"
                                    />
                                </div>
                                <h2 className="text-2xl font-bold text-white text-center mb-4">
                                    {selectedCard.title}
                                </h2>
                                <p className="text-[#e3d837] text-base">
                                    {selectedCard.des}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FundamentalAspects;
