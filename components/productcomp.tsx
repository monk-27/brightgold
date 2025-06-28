
// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaLocationArrow } from "react-icons/fa6";
// import { FaTimes } from "react-icons/fa";

// export const bars = [
//     {
//         id: 1,
//         title: "GOLD REFINING",
//         des: "Bright Gold Refinery brings the purest and finest gold, our gold refining service integrates multiple methodologies. At the time of Gold purchase, impurities worsen the quality of the gold, verifying the trait is essential. We at Bright Gold with our knowledge experts we assist our clients to get the purest form of gold as we extract gold of 995 to 999 fineness. We have utmost love and respect for our mother nature, so we do the best refining while taking care of the environment as well with the pollution reduction through AQUA REGIS process. Recycling precious metals, such as gold ores, scrap gold, silver or even jewellery by using the world’s leading technology and the best machinery in the business. The measure of Karat refers to the amount of gold in an object as compared to another alloy. Gold is more likely to be found in samples with a higher karate. For instance, 24-karat gold is 100% gold. In India, most of the people prefer 22 karat Gold, whereas if we talk about Europeans or USA, they prefer 18 Karat and 14 karat, simultaneously.",
//         img: "/Gold Banner.jpg",
//         iconLists: [],
//         link: "",
//     },
//     {
//         id: 2,
//         title: "SILVER REFINING",
//         des: "“Sterling Silver” term is very commonly used, however this is one of the ways to define the purity of the silver, this means that it contains silver which is at least 92.5% pure! Our experts at Bright Gold Refinery bring the finest and purest form of Sterling Silver. Discussing the extraction and refining methodologies, Bright Gold hosts the latest technological approach to refine the best silver along with protecting our mother nature. Electrolytic refining can refine silver metal. If silver is found in copper-containing ores, then the electrolytic refining method is used to extract silver in pure form. When silver nitrate dissolves copper, it forms crystals of elemental silver. Silver can be sold in many different forms at this purity level, such as bars, powder, granules, and wire - these are the physical forms of silver after the silver refining process. For silver to be sold in the market, the refining process is usually the last step before it is ready to sale. Typically, it needs to meet a minimum of 99.9% purity and in most cases 99.99% purity and in most of the cases 99.99% purity, and in some cases 99.999% purity, depending upon the end-use.",
//         img: "/Silver Banner.jpg",
//         iconLists: [],
//         link: "",
//     },
// ];

// const ProductComponent = () => {
//     const [selectedCard, setSelectedCard] = useState<any>(null);

//     const textVariant = (delay: any) => ({
//         hidden: { y: 50, opacity: 0 },
//         show: { y: 0, opacity: 1, transition: { type: "spring", duration: 1.25, delay } },
//     });

//     const fadeIn = (direction: any, type: any, delay: any, duration: any) => ({
//         hidden: {
//             x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
//             y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
//             opacity: 0,
//         },
//         show: { x: 0, y: 0, opacity: 1, transition: { type, delay, duration, ease: "easeOut" } },
//     });

//     const modalVariants = {
//         hidden: { y: "100vh", opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: { type: "spring", stiffness: 100, damping: 20, duration: 0.5 },
//         },
//         exit: { y: "100vh", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
//     };

//     const handleOpenModal = (item: any) => {
//         setSelectedCard(item);
//     };

//     const handleCloseModal = () => {
//         setSelectedCard(null);
//     };

//     return (
//         <div className="bg-[#13162D] pt-24 sm:pt-36 py-10 relative ">
//             <div className="mt-12 sm:mt-6">
//                 <div className="grid gap-4">
//                     <motion.div
//                         initial="hidden"
//                         whileInView="show"
//                         viewport={{ once: false, amount: 0.25 }}
//                         className=""
//                     >
//                         <div className="flex items-center justify-center mt-6">
//                             <motion.div variants={textVariant(1.1)} className="relative">
//                                 <img className="w-full h-auto object-cover" src="/banners.jpg" alt="minted coins" />
//                             </motion.div>
//                         </div>
//                         <motion.p
//                             variants={fadeIn("bottom", "spring", 0.2, 1)}
//                             className="text-yellow-500 text-center leading-6 mb-4 mt-6 text-lg mx-auto max-w-5xl"
//                         >
//                             A place where craftsmanship and purity combine! We at Bright Gold are more than just an organization, we are a passionate group of experts dedicated to delivering the finest gold bars.
//                         </motion.p>
//                     </motion.div>
//                 </div>
//             </div>
//             <div className="py-10">
//                 <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }}>
//                     <div className="mx-auto px-4 sm:px-6 lg:px-16 relative">
//                         <div className="grid sm:grid-cols-2 gap-4 place-items-center">
//                             <h1 className="col-span-2 text-3xl sm:text-5xl text-yellow-500 text-center font-extrabold leading-tight mb-0 sm:mb-6">
//                                 1 Kg GOLD BAR (999)
//                             </h1>
//                             <p className="col-span-2 sm:col-span-1 text-white text-left leading-8 mb-4 mt-6 text-xl">
//                                 999 Gold is the finest quality of fine (Pure) Gold, as the karate of Gold reduces it means the existence of other metals percentage, & we bring to you the purest form.
//                             </p>
//                             <motion.div variants={fadeIn("right", "spring", 0.5, 0.5)} className="col-span-2 sm:col-span-1 rounded-2xl">
//                                 <img src="/1kg999.png" className="mx-auto h-72" alt="1 kg gold bar" />
//                             </motion.div>
//                             <h1 className="col-span-2 text-3xl sm:text-5xl text-yellow-500 text-center font-extrabold leading-tight mb-0 sm:mb-6">
//                                 1kg GOLD BAR (995)
//                             </h1>
//                             <motion.div variants={fadeIn("left", "spring", 0.5, 0.5)} className="col-span-2 sm:col-span-1 rounded-2xl px-12">
//                                 <img src="/9951kg.png" className="mx-auto h-72" alt="100 gm gold bar" />
//                             </motion.div>
//                             <p className="col-span-2 sm:col-span-1 text-white text-left leading-8 mb-4 mt-6 text-xl">
//                                 The delicacy of 995 indicates that 995 parts of gold are mixed with 5 parts of another metal, which is perfect for your choice of jewellery.
//                             </p>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//             <div className="py-10">
//                 <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }}>
//                     <div className="mx-auto px-4 sm:px-6 lg:px-16 relative">
//                         <div className="grid sm:grid-cols-2 gap-4 place-items-center">
//                             <h1 className="col-span-2 text-3xl sm:text-5xl text-yellow-500 text-center font-extrabold leading-tight mb-0 sm:mb-6">
//                                 100 Gm GOLD BAR (999)
//                             </h1>
//                             <p className="col-span-2 sm:col-span-1 text-white text-left leading-8 mb-4 mt-6 text-xl">
//                                 Our 100 gm gold bar represents the finest quality of 999 pure gold. As the karat of gold decreases, the presence of other metals increases, but we bring you the purest form, crafted to perfection.
//                             </p>
//                             <motion.div variants={fadeIn("right", "spring", 0.5, 0.5)} className="col-span-2 sm:col-span-1 rounded-2xl">
//                                 <img src="/999100.png" className="mx-auto h-72" alt="1 kg gold bar" />
//                             </motion.div>
//                             <h1 className="col-span-2 text-3xl sm:text-5xl text-yellow-500 text-center font-extrabold leading-tight mb-0 sm:mb-6">
//                                 100 Gm GOLD BAR (995)
//                             </h1>
//                             <motion.div variants={fadeIn("left", "spring", 0.5, 0.5)} className="col-span-2 sm:col-span-1 rounded-2xl px-12">
//                                 <img src="/995100gm.png" className="mx-auto h-72" alt="100 gm gold bar" />
//                             </motion.div>
//                             <p className="col-span-2 sm:col-span-1 text-white text-left leading-8 mb-4 mt-6 text-xl">
//                                 The 100 gm gold bar, crafted with 995 purity, blends 995 parts of gold with just 5 parts of another metal, making it the ideal choice for exquisite jewellery.
//                             </p>
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>

//             <div className="bg-[#13162D] py-10">
//                 <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }}>
//                     <div className="mx-auto px-4 sm:px-6 lg:px-16">
//                         <h1 className="text-center text-white text-3xl sm:text-5xl font-extrabold mb-12">
//                             Our Services
//                         </h1>
//                         <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-x-6 gap-y-12">
//                             {bars.map((item, index) => (
//                                 <motion.div
//                                     key={item.id}
//                                     custom={index}
//                                     variants={fadeIn("right", "spring", index * 0.25, 0.75)}
//                                     initial="hidden"
//                                     whileInView="show"
//                                     viewport={{ once: false, amount: 0.25 }}
//                                     className="relative w-full sm:w-[calc(50%-1.5rem)] max-w-sm"
//                                 >
//                                     <div className="rounded-lg overflow-hidden shadow-lg bg-[#13162D] border border-white/[0.1] relative">
//                                         <div
//                                             className="absolute inset-0 rounded-lg border-4 border-transparent"
//                                             style={{
//                                                 background: "linear-gradient(90deg, transparent, #E2CBFF, transparent) border-box",
//                                                 WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
//                                                 WebkitMaskComposite: "xor",
//                                                 maskComposite: "exclude",
//                                                 backgroundSize: "200% 100%",
//                                                 animation: "borderShine 3s linear infinite",
//                                             }}
//                                         />
//                                         <div className="px-4 py-4 sm:px-2 relative z-10">
//                                             <div className="flex items-center justify-center mb-4">
//                                                 <img
//                                                     src={item.img}
//                                                     alt={item.title}
//                                                     className="w-full h-32 sm:h-40 object-cover rounded-t-lg"
//                                                 />
//                                             </div>
//                                             <div className="font-bold text-lg sm:text-xl mb-2 text-white">{item.title}</div>
//                                             <p className="text-[#BEC1DD] text-sm sm:text-base line-clamp-2">{item.des}</p>
//                                         </div>
//                                         <div className="flex justify-center items-center px-4 pb-4 sm:px-6 relative z-10">
//                                             <button
//                                                 onClick={() => handleOpenModal(item)}
//                                                 className="flex text-sm sm:text-lg text-yellow-500 focus:outline-none"
//                                             >
//                                                 Read More
//                                             </button>
//                                             <FaLocationArrow className="ml-3" color="#F1CC13FF" />
//                                         </div>
//                                     </div>
//                                     <style>
//                                         {`
//                       @keyframes borderShine {
//                         0% { background-position: -100% 0; }
//                         100% { background-position: 100% 0; }
//                       }
//                     `}
//                                     </style>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </motion.div>
//             </div>
//             <AnimatePresence>
//                 {selectedCard && (
//                     <motion.div
//                         className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-x-hidden "
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                     >
//                         <motion.div
//                             className="bg-[#13162D] rounded-lg w-full  sm:max-w-sm mx-auto p-4 sm:p-6 relative border border-white/[0.1] min-w-0"
//                             variants={modalVariants}
//                             initial="hidden"
//                             animate="visible"
//                             exit="exit"
//                         >
//                             <div
//                                 className="absolute inset-0 rounded-lg border-4 border-transparent"
//                                 style={{
//                                     background: "linear-gradient(90deg, transparent, #E2CBFF, transparent) border-box",
//                                     WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
//                                     WebkitMaskComposite: "xor",
//                                     maskComposite: "exclude",
//                                     backgroundSize: "200% 100%",
//                                     animation: "borderShine 3s linear infinite",
//                                 }}
//                             />
//                             <div className="relative z-10">
//                                 <button
//                                     onClick={handleCloseModal}
//                                     className="absolute top-2 right-2 text-yellow-500 hover:text-yellow-400"
//                                 >
//                                     <FaTimes size={20} />
//                                 </button>
//                                 <div className="flex items-center justify-center mb-4">
//                                     <img
//                                         src={selectedCard.img}
//                                         alt={selectedCard.title}
//                                         className="w-full h-24 sm:h-40 object-cover rounded-t-lg"
//                                     />
//                                 </div>
//                                 <h2 className="text-lg sm:text-2xl font-bold text-white text-center mb-4">
//                                     {selectedCard.title}
//                                 </h2>
//                                 <p className="text-[#BEC1DD] text-xs sm:text-base">
//                                     {selectedCard.des}
//                                 </p>
//                             </div>
//                         </motion.div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </div>
//     );
// };

// export default ProductComponent;
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

export const bars = [
    {
        id: 1,
        title: "GOLD REFINING",
        des: "Bright Gold Refinery brings the purest and finest gold, our gold refining service integrates multiple methodologies. At the time of Gold purchase, impurities worsen the quality of the gold, verifying the trait is essential. We at Bright Gold with our knowledge experts we assist our clients to get the purest form of gold as we extract gold of 995 to 999 fineness. We have utmost love and respect for our mother nature, so we do the best refining while taking care of the environment as well with the pollution reduction through AQUA REGIS process. Recycling precious metals, such as gold ores, scrap gold, silver or even jewellery by using the world’s leading technology and the best machinery in the business. The measure of Karat refers to the amount of gold in an object as compared to another alloy. Gold is more likely to be found in samples with a higher karate. For instance, 24-karat gold is 100% gold. In India, most of the people prefer 22 karat Gold, whereas if we talk about Europeans or USA, they prefer 18 Karat and 14 karat, simultaneously.",
        img: "/Gold Banner.jpg",
        iconLists: [],
        link: "",
    },
    {
        id: 2,
        title: "SILVER REFINING",
        des: "“Sterling Silver” term is very commonly used, however this is one of the ways to define the purity of the silver, this means that it contains silver which is at least 92.5% pure! Our experts at Bright Gold Refinery bring the finest and purest form of Sterling Silver. Discussing the extraction and refining methodologies, Bright Gold hosts the latest technological approach to refine the best silver along with protecting our mother nature. Electrolytic refining can refine silver metal. If silver is found in copper-containing ores, then the electrolytic refining method is used to extract silver in pure form. When silver nitrate dissolves copper, it forms crystals of elemental silver. Silver can be sold in many different forms at this purity level, such as bars, powder, granules, and wire - these are the physical forms of silver after the silver refining process. For silver to be sold in the market, the refining process is usually the last step before it is ready to sale. Typically, it needs to meet a minimum of 99.9% purity and in most cases 99.99% purity and in most of the cases 99.99% purity, and in some cases 99.999% purity, depending upon the end-use.",
        img: "/Silver Banner.jpg",
        iconLists: [],
        link: "",
    },
];

const ProductComponent = () => {
    const [selectedCard, setSelectedCard] = useState<any>(null);

    const textVariant = (delay: any) => ({
        hidden: { y: 50, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { type: "spring", duration: 1.25, delay } },
    });

    const fadeIn = (direction: any, type: any, delay: any, duration: any) => ({
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: { x: 0, y: 0, opacity: 1, transition: { type, delay, duration, ease: "easeOut" } },
    });

    const modalVariants = {
        hidden: {
            x: window.innerWidth < 640 ? "100vw" : 0,
            y: window.innerWidth >= 640 ? "100vh" : 0,
            opacity: 0,
        },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: window.innerWidth < 640 ? "tween" : "spring",
                stiffness: window.innerWidth >= 640 ? 100 : undefined,
                damping: window.innerWidth >= 640 ? 20 : undefined,
                duration: window.innerWidth < 640 ? 0.3 : 0.5,
                ease: window.innerWidth < 640 ? "easeOut" : undefined,
            },
        },
        exit: {
            x: window.innerWidth < 640 ? "100vw" : 0,
            y: window.innerWidth >= 640 ? "100vh" : 0,
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: "easeIn"
            },
        },
    };

    const drawerVariants = {
        hidden: { x: "100%" },
        visible: { x: 0, transition: { type: "tween", duration: 0.3, ease: "easeOut" } },
        exit: { x: "100%", transition: { duration: 0.3, ease: "easeIn" } },
    };

    const handleOpenModal = (item: any) => {
        setSelectedCard(item);
    };

    const handleCloseModal = () => {
        setSelectedCard(null);
    };

    return (
        <div className="bg-[#13162D] pt-24 sm:pt-36 py-10 relative overflow-x-hidden">
            <header className="fixed top-0 left-0 w-full bg-[#13162D] z-50 p-4">
                <h1 className="text-yellow-500 text-center text-2xl font-bold">Bright Gold Refinery</h1>
            </header>
            <div className="mt-20 sm:mt-6">
                <div className="grid gap-4">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.25 }}
                        className=""
                    >
                        <div className="flex items-center justify-center mt-6">
                            <motion.div variants={textVariant(1.1)} className="relative">
                                <img className="w-full h-auto object-cover" src="/banners.jpg" alt="minted coins" />
                            </motion.div>
                        </div>
                        <motion.p
                            variants={fadeIn("bottom", "spring", 0.2, 1)}
                            className="text-yellow-500 text-center leading-6 mb-4 mt-6 text-lg mx-auto max-w-5xl"
                        >
                            A place where craftsmanship and purity combine! We at Bright Gold are more than just an organization, we are a passionate group of experts dedicated to delivering the finest gold bars.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
            <div className="py-10">
                <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }}>
                    <div className="mx-auto px-4 sm:px-6 lg:px-16 relative">
                        <div className="grid sm:grid-cols-2 gap-4 place-items-center">
                            <h1 className="col-span-2 text-3xl sm:text-5xl text-yellow-500 text-center font-extrabold leading-tight mb-0 sm:mb-6">
                                1 Kg GOLD BAR (999)
                            </h1>
                            <p className="col-span-2 sm:col-span-1 text-white text-left leading-8 mb-4 mt-6 text-xl">
                                999 Gold is the finest quality of fine (Pure) Gold, as the karate of Gold reduces it means the existence of other metals percentage, & we bring to you the purest form.
                            </p>
                            <motion.div variants={fadeIn("right", "spring", 0.5, 0.5)} className="col-span-2 sm:col-span-1 rounded-2xl">
                                <img src="/1kg999.png" className="mx-auto h-72" alt="1 kg gold bar" />
                            </motion.div>
                            <h1 className="col-span-2 text-3xl sm:text-5xl text-yellow-500 text-center font-extrabold leading-tight mb-0 sm:mb-6">
                                1kg GOLD BAR (995)
                            </h1>
                            <motion.div variants={fadeIn("left", "spring", 0.5, 0.5)} className="col-span-2 sm:col-span-1 rounded-2xl px-12">
                                <img src="/9951kg.png" className="mx-auto h-72" alt="100 gm gold bar" />
                            </motion.div>
                            <p className="col-span-2 sm:col-span-1 text-white text-left leading-8 mb-4 mt-6 text-xl">
                                The delicacy of 995 indicates that 995 parts of gold are mixed with 5 parts of another metal, which is perfect for your choice of jewellery.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="py-10">
                <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }}>
                    <div className="mx-auto px-4 sm:px-6 lg:px-16 relative">
                        <div className="grid sm:grid-cols-2 gap-4 place-items-center">
                            <h1 className="col-span-2 text-3xl sm:text-5xl text-yellow-500 text-center font-extrabold leading-tight mb-0 sm:mb-6">
                                100 Gm GOLD BAR (999)
                            </h1>
                            <p className="col-span-2 sm:col-span-1 text-white text-left leading-8 mb-4 mt-6 text-xl">
                                Our 100 gm gold bar represents the finest quality of 999 pure gold. As the karat of gold decreases, the presence of other metals increases, but we bring you the purest form, crafted to perfection.
                            </p>
                            <motion.div variants={fadeIn("right", "spring", 0.5, 0.5)} className="col-span-2 sm:col-span-1 rounded-2xl">
                                <img src="/999100.png" className="mx-auto h-72" alt="1 kg gold bar" />
                            </motion.div>
                            <h1 className="col-span-2 text-3xl sm:text-5xl text-yellow-500 text-center font-extrabold leading-tight mb-0 sm:mb-6">
                                100 Gm GOLD BAR (995)
                            </h1>
                            <motion.div variants={fadeIn("left", "spring", 0.5, 0.5)} className="col-span-2 sm:col-span-1 rounded-2xl px-12">
                                <img src="/995100gm.png" className="mx-auto h-72" alt="100 gm gold bar" />
                            </motion.div>
                            <p className="col-span-2 sm:col-span-1 text-white text-left leading-8 mb-4 mt-6 text-xl">
                                The 100 gm gold bar, crafted with 995 purity, blends 995 parts of gold with just 5 parts of another metal, making it the ideal choice for exquisite jewellery.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="bg-[#13162D] py-10">
                <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }}>
                    <div className="mx-auto px-4 sm:px-6 lg:px-16">
                        <h1 className="text-center text-white text-3xl sm:text-5xl font-extrabold mb-12">
                            Our Services
                        </h1>
                        <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-x-6 gap-y-12">
                            {bars.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    custom={index}
                                    variants={fadeIn("right", "spring", index * 0.25, 0.75)}
                                    initial="hidden"
                                    whileInView="show"
                                    viewport={{ once: false, amount: 0.25 }}
                                    className="relative w-full sm:w-[calc(50%-1.5rem)] max-w-sm"
                                >
                                    <div className="rounded-lg overflow-hidden shadow-lg bg-[#13162D] border border-white/[0.1] relative">
                                        <div
                                            className="absolute inset-0 rounded-lg border-4 border-transparent"
                                            style={{
                                                background: "linear-gradient(90deg, transparent, #E2CBFF, transparent) border-box",
                                                WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                                                WebkitMaskComposite: "xor",
                                                maskComposite: "exclude",
                                                backgroundSize: "200% 100%",
                                                animation: "borderShine 3s linear infinite",
                                            }}
                                        />
                                        <div className="px-4 py-4 sm:px-2 relative z-10">
                                            <div className="flex items-center justify-center mb-4">
                                                <img
                                                    src={item.img}
                                                    alt={item.title}
                                                    className="w-full h-32 sm:h-40 object-cover rounded-t-lg"
                                                />
                                            </div>
                                            <div className="font-bold text-lg sm:text-xl mb-2 text-white">{item.title}</div>
                                            <p className="text-[#BEC1DD] text-sm sm:text-base line-clamp-2">{item.des}</p>
                                        </div>
                                        <div className="flex justify-center items-center px-4 pb-4 sm:px-6 relative z-10">
                                            <button
                                                onClick={() => handleOpenModal(item)}
                                                className="flex text-sm sm:text-lg text-yellow-500 focus:outline-none"
                                            >
                                                Read More
                                            </button>
                                            <FaLocationArrow className="ml-3" color="#F1CC13FF" />
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
                    </div>
                </motion.div>
            </div>
            <AnimatePresence>
                {selectedCard && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleCloseModal}
                        />
                        <motion.div
                            className="fixed top-0 right-0 h-full w-full sm:hidden bg-[#13162D] z-50 p-4 border-l border-white/[0.1]"
                            variants={drawerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div
                                className="absolute inset-0 border-4 border-transparent"
                                style={{
                                    background: "linear-gradient(90deg, transparent, #E2CBFF, transparent) border-box",
                                    WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                                    WebkitMaskComposite: "xor",
                                    maskComposite: "exclude",
                                    backgroundSize: "200% 100%",
                                    animation: "borderShine 3s linear infinite",
                                }}
                            />
                            <div className="relative z-10">
                                <button
                                    onClick={handleCloseModal}
                                    className="absolute top-2 right-2 text-yellow-500 hover:text-yellow-400"
                                >
                                    <FaTimes size={20} />
                                </button>
                                <div className="flex items-center justify-center mb-4">
                                    <img
                                        src={selectedCard.img}
                                        alt={selectedCard.title}
                                        className="w-full h-24 object-cover rounded-t-lg"
                                    />
                                </div>
                                <h2 className="text-lg font-bold text-white text-center mb-4">
                                    {selectedCard.title}
                                </h2>
                                <p className="text-[#BEC1DD] text-xs">
                                    {selectedCard.des}
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
            <div className="hidden sm:block">
                <AnimatePresence>
                    {selectedCard && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-x-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="bg-[#13162D] rounded-lg w-[80%] max-w-3xl h-auto mx-auto p-6 relative border border-white/[0.1]"
                                variants={modalVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <div
                                    className="absolute inset-0 rounded-lg border-4 border-transparent"
                                    style={{
                                        background: "linear-gradient(90deg, transparent, #E2CBFF, transparent) border-box",
                                        WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                                        WebkitMaskComposite: "xor",
                                        maskComposite: "exclude",
                                        backgroundSize: "200% 100%",
                                        animation: "borderShine 3s linear infinite",
                                    }}
                                />
                                <div className="relative z-10">
                                    <button
                                        onClick={handleCloseModal}
                                        className="absolute top-2 right-2 text-yellow-500 hover:text-yellow-400"
                                    >
                                        <FaTimes size={20} />
                                    </button>
                                    <div className="flex items-center justify-center mb-4">
                                        <img
                                            src={selectedCard.img}
                                            alt={selectedCard.title}
                                            className="w-full h-40 object-cover rounded-t-lg"
                                        />
                                    </div>
                                    <h2 className="text-2xl font-bold text-white text-center mb-4">
                                        {selectedCard.title}
                                    </h2>
                                    <p className="text-[#BEC1DD] text-base">
                                        {selectedCard.des}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ProductComponent;