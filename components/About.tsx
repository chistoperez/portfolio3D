"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "@/styles/styles";
import { services } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";
import Image, { StaticImageData } from "next/image";
import { SectionWrapper } from "@/HOC";

interface Props {
  title: string;
  icon: StaticImageData;
  index: number;
}

const ServiceCard = ({ title, icon, index }: Props) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <Image src={icon} alt={title} className="object-contain w-16 h-16" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a skilled software developer with experience in JavaScript,
        TypeScript, React Native, React, Next.js and Node.js . I develop and
        oversee successful apps for customers, offering top-notch, thoroughly
        documented code. To guarantee satisfaction, I work directly with project
        managers, designers, and stakeholders. Let&nbsp;s collaborate! To
        inquire, please get in touch.
      </motion.p>
      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
