
"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;
      if (window.innerWidth < 640) {
        setVisible(true); // Always visible on mobile
      } else if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-4xl md:min-w-[80vw] lg:min-w-[60vw]  fixed z-[5000] top-10 inset-x-0 mx-auto px-4 sm:px-16 py-6 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-between",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <Link href="/" className="flex-shrink-0 mr-0 sm:mr-4">
          <Image
            src="/bg-logo.png"
            alt="Bright Gold Logo"
            width={120}
            height={45}
            className="hidden sm:block object-contain w-[120px] h-[45px] sm:w-[160px] sm:h-[30px]"
            priority
          />
          <Image
            src="/moblogo.png"
            alt="Bright Gold Logo"
            width={120}
            height={45}
            className="block sm:hidden object-contain w-[120px] h-[35px]"
            priority
          />
        </Link>
        <div className="flex items-center space-x-3 sm:space-x-4">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "flex items-center space-x-1 text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            </Link>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav;