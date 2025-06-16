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
            {/*  */}
        </div>
    )
}

export default AboutComponent
