"use client";

import React from "react";

import { association, companies, technique, testimonials, testimonials1 } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { motion } from "framer-motion";
import { Button } from "./ui/MovingBorders";

const Clients = () => {


  const fadeIn = (index: number) => ({
    hidden: {
      x: 100, // Start off-screen to the right
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.75,
        delay: index * 0.2, // Staggered delay for each item
        ease: "easeOut",
      },
    },
  });
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Insights from
        <span className="text-yellow-500"> Our Visionaries</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className=" rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <div className="w-full mt-12 p-20 grid lg:grid-cols-1 grid-cols-1 gap-10">
            {testimonials.map((card) => (
              <><Button
                key={card.id}
                duration={Math.floor(Math.random() * 10000) + 10000} // Random duration
                borderRadius="1.75rem"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  borderRadius: `calc(1.75rem * 0.96)`,
                }}
                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-4">

                  <div className="flex-1 lg:me-5">
                    <h1 className="text-start text-xl md:text-2xl font-bold ">
                      {card.mainquote}
                    </h1>
                    <p className="text-start text-white-100 mt-3 font-semibold text-xl">
                      {card.quote}
                    </p>
                    <p className="text-start text-white-100 mt-3 font-semibold text-xl">
                      {card.name}
                    </p>
                    <p className="text-start text-white-100 mt-3 font-semibold text-xl">
                      {card.title}
                    </p>
                  </div>
                  {/* Image (Right Side) */}
                  <div className="flex-shrink-0">
                    <img
                      src={card.img}
                      alt={card.img}
                      className="lg:w-40 lg:h-40 md:w-28 md:h-28 w-25 h-20 object-cover rounded-lg" />
                  </div>
                </div>
              </Button>


              </>
            ))}
            {testimonials1.map((card) => (
              <Button
                key={card.id}
                duration={Math.floor(Math.random() * 10000) + 10000} // Random duration
                borderRadius="1.75rem"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  borderRadius: `calc(1.75rem * 0.96)`,
                }}
                className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-4">
                  <div className="flex-shrink-0">
                    <img
                      src={card.img}
                      alt={card.img}
                      className="lg:w-40 lg:h-40 md:w-28 md:h-28 w-25 h-20 object-cover rounded-lg" />
                  </div>
                  <div className="flex-1 lg:me-5">
                    <h1 className="text-start text-xl md:text-2xl font-bold ">
                      {card.mainquote}
                    </h1>
                    <p className="text-end text-white-100 mt-3 font-semibold text-xl">
                      {card.quote}
                    </p>
                    <p className="text-end text-white-100 mt-3 font-semibold text-xl">
                      {card.name}
                    </p>
                    <p className="text-end text-white-100 mt-3 font-semibold text-xl">
                      {card.title}
                    </p>
                  </div>
                  {/* Image (Right Side) */}

                </div>
              </Button >
            ))}
          </div>
        </div>

        <div className="px-4 sm:px-8 lg:px-16  py-12 max-w-7xl ">
          {/* Trusted By Section */}
          <span className="block text-4xl sm:text-5xl text-white text-center font-bold mb-8 sm:mb-12">
            Trusted By
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {companies.map((company, index) => (
              <motion.div
                className="relative flex items-center justify-center w-32 sm:w-40"
                key={company.id}
                custom={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={fadeIn(index)}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={company.img}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-3"
                    alt={company.name}
                  />
                  <span className="text-center text-gray-100 text-xs sm:text-sm">
                    {company.name}
                  </span>
                </div>
                {/* Add vertical separator except for the last item */}
                {index < companies.length - 1 && (
                  <div className="absolute right-[-24px] sm:right-[-32px] top-0 bottom-0 w-[1px] bg-white/20"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Associations and Recognitions Section */}
          <span className="block text-4xl sm:text-5xl text-white text-center font-bold mt-12 sm:mt-16 mb-8 sm:mb-12">
            Associations and Recognitions
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {association.map((assoc, index) => (
              <motion.div
                key={assoc.id}
                custom={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={fadeIn(index)}
                className="flex items-center justify-center w-32 sm:w-40"
              >
                <img
                  src={assoc.img}
                  alt={assoc.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>



    </section >
  );
};

export default Clients;
