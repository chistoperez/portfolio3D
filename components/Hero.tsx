import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/styles/styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-30 max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915eff]">Christopher</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user
            <br className="hidden sm:block" />
            interfaces, web applications
            <br className="hidden sm:block" />
            and mobile applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
