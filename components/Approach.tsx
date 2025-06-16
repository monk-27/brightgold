import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";

import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { association, companies } from "@/data";

const Approach = () => {

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
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        LABORATORY <span className="text-yellow-500">TESTING</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="X-RAY SPECTROSCOPY"
          icon={<AceternityIcon order="Phase 1" />}
          des="There are several kinds of spectroscopic techniques that use x-ray radiation for the characterization of materials under x-ray spectroscopy. Photons, or particles of light, with wavelengths in the X-ray region of the electromagnetic spectrum are detected and measured by X-ray spectroscopy. A spectrometer helps Our experts determine the chemical and elemental properties of an object."
          img="/xray.png"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="SPARK EMISSION SPECTROSCOPY"
          icon={<AceternityIcon order="Phase 2" />}
          des="Through the application of an electric arc or spark to metallic samples, spark spectrometers (also called spark emission spectrometers) detect the presence or concentration of analytes based on their wavelength signature. Quantitative and qualitative analysis of metal and alloy compositions using spark emission spectroscopy."
          img="/spark.png"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="INDUCTIVELY COUPLED PLASMA SPECTROSCOPY"
          icon={<AceternityIcon order="Phase 3" />}
          des="Mass spectrometry using inductively coupled plasma (ICP-MS) involves ionizing a sample with an inductively coupled plasma. Known and used as a tool for detecting metals and several non-metals in liquid samples at very low concentrations, it detects metals and several non-metals. The Inductively Coupled Plasma Optical Emission Spectroscopy (ICP-OES) is an analytical technique used to determine the amount of certain elements in a sample."
          img="/plasma.png"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
      <div className=" py-12  border-1 border-white rounded-md  mt-12 sm:mt-16">
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
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  des,
  img,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
  img: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  const [expanded, setExpanded] = useState(false); // State for Read More/Read Less

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[40rem] rounded-3xl"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10 flex flex-col items-center text-center">
        {/* Icon (Visible by Default, Moves Up on Hover) */}
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:-translate-y-24 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>

        {/* Content on Hover: Image, Title, Description, Button */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center h-full"
            >
              {/* Image */}
              <div className="mb-6">
                <img
                  src={img}
                  alt={title}
                  className="w-40 h-40 object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Title */}
              <h2 className="dark:text-white text-2xl md:text-3xl font-bold text-white">
                {title}
              </h2>

              {/* Description */}
              <p
                className={`text-xs md:text-sm mt-4 text-white text-center transition-all duration-200 ${expanded ? "" : "line-clamp-3"
                  }`}
                style={{ color: "#E4ECFF" }}
              >
                {des}
              </p>

              {/* Read More/Read Less Button */}
              <div className="flex justify-center items-center mt-4">
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="flex lg:text-xl md:text-xs text-sm text-yellow-500 focus:outline-none"
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>
                <FaLocationArrow className="ms-3" color="#F3DC0FFF" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      {/* <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" /> */}
    </svg>
  );
};
/* eslint-disable react/no-unescaped-entities */
