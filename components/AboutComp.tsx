"use client"

import React from 'react'
import Grid from './Grid'
import WhatWeDoCard from './whatwedo'
import { motion } from 'framer-motion'

const AboutComponent = () => {
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
        <div className="bg-[#13162D] py-10">
            <Grid />
            <WhatWeDoCard />
            <div className="bg-[#13162D] py-10">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >
                    <div className="mx-auto px-4 sm:px-6 lg:px-16 relative">
                        <div className="grid sm:grid-cols-2 gap-4 place-items-center">
                            <h1 className="col-span-2 text-3xl sm:text-5xl text-gold01 text-center extrabold leading-tight mb-0 sm:mb-6">
                                Our Vision
                            </h1>
                            <p className="col-span-2 sm:col-span-1 text-white text-left leading-8  mb-4 mt-6 text-lg">
                                At Bright Gold, we are the most precise and reliable Gold Refiner by continuously achieving operational excellence and delivering value - we want to be your Gold Refiner of preference.
                            </p>
                            <motion.div
                                variants={fadeIn("right", "spring", 0.5, 0.5)}
                                className=" col-span-2 sm:col-span-1 rounded-2xl bg-themeBlue"
                            >
                                <img src="https://brightdigigold.s3.ap-south-1.amazonaws.com/Vision.gif" className="mx-auto h-72" alt="Bright Digi Gold Vision" />
                            </motion.div>
                            <h1 className="col-span-2 text-3xl sm:text-5xl text-gold01 text-center extrabold leading-tight mb-0 sm:mb-6">
                                Our Mission
                            </h1>
                            <motion.div
                                variants={fadeIn("left", "spring", 0.5, 0.5)}
                                className="col-span-2 sm:col-span-1 rounded-2xl bg-themeBlue px-12"
                            >
                                <img src="https://brightdigigold.s3.ap-south-1.amazonaws.com/Mission.gif" className="mx-auto h-72" alt="Bright Digi Gold Mission" />
                            </motion.div>
                            <p className="col-span-2 sm:col-span-1 text-white text-left leading-8  mb-4 mt-6 text-lg">
                                With Bright Gold, we assured all our services would be certainly honest, reliable and quick for your precious metals. Our devotion is our greatest asset. Our vision is to serve our potential buyers with honesty, simplicity and loyalty.
                            </p>
                        </div>
                        {/* <CustomButton title="Invest now" /> */}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutComponent
