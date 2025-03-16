



// import { useState } from "react";
// import { IoCopyOutline } from "react-icons/io5";
// import Lottie from "react-lottie";
// import { cn } from "@/lib/utils";
// import { BackgroundGradientAnimation } from "./GradientBg";
// import GridGlobe from "./GridGlobe";
// import animationData from "@/data/confetti.json";
// import MagicButton from "../MagicButton";

// export const BentoGrid = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export const BentoGridItem = ({
//   className,
//   id,
//   title,
//   description,
//   img,
//   imgClassName,
//   titleClassName,
//   spareImg,
// }: {
//   className?: string;
//   id: number;
//   title?: string | React.ReactNode;
//   description?: string | React.ReactNode;
//   img?: string;
//   imgClassName?: string;
//   titleClassName?: string;
//   spareImg?: string;
// }) => {
//   const leftLists = ["ReactJS", "Express", "Typescript"];
//   const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

//   const [copied, setCopied] = useState(false);

//   const defaultOptions = {
//     loop: copied,
//     autoplay: copied,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

//   const handleCopy = () => {
//     const text = "hsu@jsmastery.pro";
//     navigator.clipboard.writeText(text);
//     setCopied(true);
//   };

//   return (
//     <div
//       className={cn(
//         "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4",
//         className
//       )}
//       style={{
//         background: "rgb(4,7,29)",
//         backgroundColor:
//           "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
//       }}
//     >
//       <div className={`${id === 6 && "flex justify-center"} h-full`}>
//         {/* Custom layout for id 5 */}
//         {id === 5 ? (
//           <div className="flex flex-col md:flex-row h-full w-full p-5 lg:p-10">
//             {/* Description on the left */}
//             <div className="md:w-1/2 flex flex-col justify-center space-y-4">
//               <div
//                 className={cn(
//                   "font-sans text-xl lg:text-2xl font-bold text-white z-10 mb-2",
//                   titleClassName
//                 )}
//               >
//                 {title}
//               </div>
//               <div className="font-sans font-extralight text-sm lg:text-base text-[#C1C2D3] z-10 leading-relaxed">
//                 {description}
//               </div>
//             </div>
//             {/* Image on the right */}
//             <div className="md:w-1/2 flex items-center justify-end">
//               {img && (
//                 <img
//                   src={img}
//                   alt="Gold Brick"
//                   className={cn(
//                     imgClassName,
//                     "object-cover object-center w-full md:w-96 h-auto"
//                   )}
//                 />
//               )}
//               {spareImg && (
//                 <img
//                   src={spareImg}
//                   alt="Grid"
//                   className="object-cover object-center w-full md:w-96 h-auto"
//                 />
//               )}
//             </div>
//           </div>
//         ) : (
//           <>
//             <div className="w-full h-full absolute">
//               {img && (
//                 <img
//                   src={img}
//                   alt={img}
//                   className={cn(imgClassName, "object-cover object-center")}
//                 />
//               )}
//             </div>
//             <div
//               className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}
//             >
//               {spareImg && (
//                 <img
//                   src={spareImg}
//                   alt={spareImg}
//                   className="object-cover object-center w-full h-full"
//                 />
//               )}
//             </div>
//             {id === 6 && (
//               <BackgroundGradientAnimation>
//                 <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
//               </BackgroundGradientAnimation>
//             )}

//             <div
//               className={cn(
//                 titleClassName,
//                 "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-between"
//               )}
//             >
//               <div
//                 className={cn(
//                   "font-sans text-xl lg:text-2xl font-bold text-white z-10 mb-2",
//                   titleClassName
//                 )}
//               >
//                 {title}
//               </div>
//               <div className="font-sans font-extralight text-sm lg:text-base text-[#C1C2D3] z-10 leading-relaxed">
//                 {description}
//               </div>

//               {id === 2 && <GridGlobe />}

//               {id === 6 && (
//                 <div className="mt-5 relative">
//                   <div
//                     className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}
//                   >
//                     <Lottie options={defaultOptions} height={200} width={400} />
//                   </div>
//                   <MagicButton
//                     title={copied ? "Email is Copied!" : "Copy my email address"}
//                     icon={<IoCopyOutline />}
//                     position="left"
//                     handleClick={handleCopy}
//                     otherClasses="!bg-[#161A31]"
//                   />
//                 </div>
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };


import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        {/* Custom layout for id 1 and id 7 */}
        {(id === 1 || id === 7) ? (
          <div className="flex flex-col h-full w-full p-5 lg:p-10 relative">
            <div className="flex flex-col justify-center h-full space-y-6">
              <div
                className={cn(
                  "font-sans text-xl lg:text-3xl font-bold text-yellow-400 z-10 mb-2",
                  titleClassName
                )}
              >
                {title}
              </div>
              <div className="font-sans font-extralight text-sm lg:text-base text-white leading-relaxed z-10">
                {description}
              </div>
            </div>
            {img && (
              <div className="absolute inset-0">
                {/* <img
                  src=""
                  alt=""
                  className={cn(imgClassName, "opacity-50")}
                /> */}
              </div>
            )}
          </div>
        ) : id === 5 ? (
          <div className="flex flex-col md:flex-row h-full w-full p-5 lg:p-10">
            <div className="md:w-1/2 flex flex-col justify-center space-y-4">
              <div
                className={cn(
                  "font-sans text-xl lg:text-2xl font-bold text-white z-10 mb-2",
                  titleClassName
                )}
              >
                {title}
              </div>
              <div className="font-sans font-extralight text-sm lg:text-base text-[#C1C2D3] z-10 leading-relaxed">
                {description}
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-end">
              {img && (
                <img
                  src={img}
                  alt="Gold Brick"
                  className={cn(
                    imgClassName,
                    "object-cover object-center w-full md:w-96 h-auto"
                  )}
                />
              )}
              {spareImg && (
                <img
                  src={spareImg}
                  alt="Grid"
                  className="object-cover object-center w-full md:w-96 h-auto"
                />
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="w-full h-full absolute">
              {/* {img && (
                <img
                  src={img}
                  alt={img}
                  className={cn(imgClassName, "object-cover object-center")}
                />
              )} */}
            </div>
            <div
              className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}
            >
              {/* {spareImg && (
                <img
                  src={spareImg}
                  alt={spareImg}
                  className="object-cover object-center w-full h-full"
                />
              )} */}
            </div>
            {id === 6 && (
              <BackgroundGradientAnimation>
                <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
              </BackgroundGradientAnimation>
            )}

            <div
              className={cn(
                titleClassName,
                "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 justify-between"
              )}
            >
              <div
                className={cn(
                  "font-sans text-xl lg:text-2xl font-bold text-white z-10 mb-2",
                  titleClassName
                )}
              >
                {title}
              </div>
              <div className="font-sans font-extralight text-sm lg:text-base text-[#C1C2D3] z-10 leading-relaxed">
                {description}
              </div>

              {id === 2}

              {id === 6 && (
                <div className="mt-5 relative">
                  <div
                    className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}
                  >
                    <Lottie options={defaultOptions} height={200} width={400} />
                  </div>
                  {/* <MagicButton
                    title={copied ? "Email is Copied!" : "Copy my email address"}
                    icon={<IoCopyOutline />}
                    position="left"
                    handleClick={handleCopy}
                    otherClasses="!bg-[#161A31]"
                  /> */}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
