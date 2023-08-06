import React from "react";
import { motion } from "framer-motion";
import { navVariants } from "../../utils/motion";
import styles from "../style";
import heroImage1 from "../assets/heroImage1.png";
import heroBg from "../assets/heroBg.png";

const Hero = () => {
  return (
    <section
      id="home"
      className={`${styles.flexCenter} ${styles.marginY} flex-row flex-1 xs:flex-col  ss:flex-col sm:flex-col justify-between text-white w-full`}
    >
      {/* ---------------------------Left Section-------------------------------- */}
      <div
        className={`flex flex-col basis-[55%] xs:basis-[100%] pt-24 xs:pt-4 ss:pt-6 sm:pt-8  `}
      >
        <h1
          className={`font-Manrope text-[80px] tracking-tight  xs:text-[54px] font-bold leading-[96px] xs:leading-[72px]`}
        >
          Build Your Block{" "}
          <span className={`${styles.textGradient}`}>In The Metaverse.</span>
        </h1>
        <p
          className={`${styles.paragraph} py-4 text-[18px] leading-[27px] font-light`}
        >
          We specialize in providing cutting-edge Virtual Reality solutions that
          transport you to immersive digital worlds.
        </p>
        <hr className=" border-[1px] border-white/[17%] w-80 xs:hidden my-4  " />
        <div
          className={`flex flex-row xs:flex-col justify-start items-center py-4`}
        >
          <motion.button
            whileInView="show"
            initial="hidden"
            variants={navVariants}
            className={`shadow-btnLink text-[112.5%] xs:text-[100%] ${styles.button} ${styles.flexCenter}`}
          >
            Explore More
            <div className="bg-white rounded-full border-[1px] inline-flex w-[34px] h-[34px] border-white ml-4"></div>
          </motion.button>
          <div>
            <h3 className={`pl-8 xs:my-7`}>Watch Intro</h3>
          </div>
        </div>
      </div>
      {/*------------------------ Right Section---------------- */}
      <div
        className={`${styles.flexCenter} basis-[45%] xs:basis-[100%] xs:py-40 ss:py-72  sm:py-80  `}
      >
        <motion.img
          initial={{ x: -100 }}
          animate={{ x: 20 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 20, damping: 6 }}
          src={heroBg}
          alt="hero bg"
          className="absolute w-[710px] lg:w-[600px] md:w-[535px] ss:w-[580px] xs:w-[280px] pl-28 xs:px-2 ss:px-12 sm:px-14  "
        />
        <motion.img
          initial="hide"
          whileInView="show"
          transition={{ delay: 0.2, type: "spring", stiffness: 20, damping: 6 }}
          variants={{
            hide: {
              opacity: 0,
              scale: 0,
            },
            show: {
              opacity: 1,
              scale: 1,
              ease: "easeOut",
            },
          }}
          src={heroImage1}
          alt="hero image"
          className="absolute w-[830px] lg:w-[690px] md:w-[650px] ss:w-[680px] xs:w-[380px] pl-20 px-8  xs:px-2"
        />
      </div>
    </section>
  );
};

export default Hero;
