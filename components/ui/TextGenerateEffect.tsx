"use client";
import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words, // Initial words (first text to display)
  textVariations, // Array of text variations to cycle through
  className,
  interval = 5000, // Default interval of 5 seconds
}: {
  words: string;
  textVariations?: string[]; // Optional array of text variations
  className?: string;
  interval?: number; // Optional interval in milliseconds
}) => {
  const [scope, animate] = useAnimate();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Default text variations if none are provided
  const defaultVariations = textVariations || [words];

  useEffect(() => {
    console.log("Default Variations:", defaultVariations);

    // Animation sequence
    const animateText = async () => {
      // Animate out
      await animate(
        "span",
        { opacity: 0, x: -50 },
        { duration: 0.8 }
      );

      // Update text index
      setCurrentTextIndex((prev) => {
        const nextIndex = (prev + 1) % defaultVariations.length;
        console.log("New Index:", nextIndex);
        return nextIndex;
      });
    };

    // Initial animation
    animate(
      "span",
      { opacity: 1, x: 0 },
      {
        duration: 1.2,
        delay: stagger(0.15),
        ease: "easeInOut",
      }
    );

    // Set interval only if there are multiple variations
    let intervalId: NodeJS.Timeout | undefined;
    if (defaultVariations.length > 1) {
      console.log("Setting interval with length:", defaultVariations.length);
      intervalId = setInterval(animateText, interval);
    } else {
      console.log("No interval set, only one variation:", defaultVariations);
    }

    // Cleanup interval on unmount
    return () => {
      if (intervalId) {
        console.log("Cleaning up interval");
        clearInterval(intervalId);
      }
    };
  }, [scope, defaultVariations.length, interval]);

  // Trigger animation whenever currentTextIndex changes
  useEffect(() => {
    console.log("Animating in, Index:", currentTextIndex);
    animate(
      "span",
      { opacity: 1, x: 0 },
      {
        duration: 1.2,
        delay: stagger(0.15),
        ease: "easeInOut",
      }
    );
  }, [currentTextIndex, animate]);

  const renderWords = () => {
    const wordsArray = defaultVariations[currentTextIndex].split(" ");
    console.log("Rendering words:", defaultVariations[currentTextIndex]);
    return (
      <motion.div key={currentTextIndex} ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={`${word}-${idx}-${currentTextIndex}`} // Ensure unique key for each word
            className={`${idx > 3 ? "text-yellow-500" : "dark:text-white text-black"}`}
            initial={{ opacity: 0, x: -50 }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};