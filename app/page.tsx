"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";

import RecentProjects from "@/components/frequentCoins";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import WhatWeDoCard from "@/components/whatwedo";
import Technique from "@/components/Experience";
import FrequentCoins from "@/components/frequentCoins";
import FundamentalAspects from "@/components/aspects";
import { Spotlight } from "@/components/ui/Spotlight";

const Home = () => {
  return (
    <main className="relative bg-[#13162D] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">

      <div className="max-w-7xl w-full">
        <Hero />

        <FrequentCoins />
        <FundamentalAspects />
        <Clients />
        <Technique />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
