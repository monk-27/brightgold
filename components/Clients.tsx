"use client";

import React from "react";
import { association, companies, testimonials, testimonials1 } from "@/data";
import { motion } from "framer-motion";
import { Button } from "./ui/MovingBorders";

const Clients = () => {
  const fadeIn = (index: any) => ({
    hidden: {
      x: 100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.75,
        delay: index * 0.2,
        ease: "easeOut",
      },
    },
  });

  const dropInBounce = (index: any) => ({
    hidden: {
      y: -100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 1,
        delay: index * 0.2,
      },
    },
  });

  const teamMembers = [
    {
      id: 1,
      img: "/lawyer.png",
      name: "Arun Goel",
      designation: "Designated Partner",
    },
    {
      id: 2,
      img: "/lawyer.png",
      name: "Rahul Garg",
      designation: "Partner",
    },
    {
      id: 3,
      img: "/lawyer.png",
      name: "Rajeev Kumar",
      designation: "CO",
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Insights from
        <span className="text-yellow-500"> Our Visionaries</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <div className="w-full mt-12 p-0 sm:p-20 grid lg:grid-cols-1 grid-cols-1 gap-10">
            {testimonials1.map((card) => (
              <Button
                key={card.id}
                duration={Math.floor(Math.random() * 10000) + 10000}
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
                      alt={card.name}
                      className="lg:w-40 lg:h-40 md:w-28 md:h-28 w-20 h-20 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1 lg:me-5">
                    <h1 className="text-start text-xl md:text-2xl font-bold">
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
                </div>
              </Button>
            ))}
            {testimonials.map((card) => (
              <Button
                key={card.id}
                duration={Math.floor(Math.random() * 10000) + 10000}
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
                    <h1 className="text-start text-xl md:text-2xl font-bold">
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
                  <div className="flex-shrink-0">
                    <img
                      src={card.img}
                      alt={card.name}
                      className="lg:w-40 lg:h-40 md:w-28 md:h-28 w-20 h-20 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </Button>
            ))}

          </div>

          {/* Team Members Pills */}
          <div className="flex flex-wrap justify-center gap-12 mt-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                custom={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={dropInBounce(index)}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/20">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white text-base sm:text-lg font-semibold mt-3">
                  {member.name}
                </p>
                <p className="text-white-100 text-sm sm:text-base font-light">
                  {member.designation}
                </p>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Clients;
