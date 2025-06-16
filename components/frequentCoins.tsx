/* eslint-disable react/no-unescaped-entities */

"use client";

import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { bars } from "@/data";
import Link from "next/link";

const FrequentCoins = () => {
  return (
    <div className="py-20 bg-[#13162D]">
      <div className="flex justify-center mb-6">
        <Link href="/products">
          <button className="relative inline-flex items-center px-6 py-2 text-lg font-semibold text-yellow-500 bg-transparent border border-purple rounded-full overflow-hidden group">
            <span className="relative z-10">View All Products</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-shine" />
          </button>
        </Link>
      </div>

      <h1 className="heading">
        GOLD IS LOVE, <span className="text-yellow-500">ISN'T IT?</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {bars.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const CardItem = ({ item }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`flex items-center justify-center sm:w-96 w-[80vw] transition-all duration-300 ${isExpanded ? "lg:min-h-[40rem] h-auto" : "lg:min-h-[32.5rem] h-[25rem]"
        }`}
    >
      <div className="relative sm:w-96 w-[80vw] bg-[#13162D] rounded-3xl border border-white/[0.1] p-4">
        <div className="relative flex items-center justify-center w-full h-[25vh] lg:h-[40vh] mb-10 overflow-hidden">
          <div
            className="relative w-full h-full overflow-hidden lg:rounded-3xl"
            style={{ backgroundColor: "#13162D" }}
          >
            <img
              src="/bg.png"
              alt="bgimg"
              className="w-full h-full object-cover"
            />
          </div>
          <img
            src={item.img}
            alt="cover"
            className="z-10 absolute bottom-0 w-full max-h-[80%] object-contain"
          />
        </div>

        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
          {item.title}
        </h1>

        <p
          className={`lg:text-xl lg:font-normal font-light text-sm transition-all duration-300 ${isExpanded ? "" : "line-clamp-2"
            }`}
          style={{ color: "#BEC1DD", margin: "1vh 0" }}
        >
          {item.des}
        </p>

        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {item.iconLists.map((icon: any, index: any) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{ transform: `translateX(-${5 * index + 2}px)` }}
              >
                <img src={icon} alt="icon5" className="p-2" />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex lg:text-xl md:text-xs text-sm text-yellow-500 focus:outline-none"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
            <FaLocationArrow className="ms-3" color="#F1E20DFF" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentCoins;