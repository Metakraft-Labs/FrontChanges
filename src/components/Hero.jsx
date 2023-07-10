import React from "react";
// import * as THREE from 'three';
import styles from "../style";
import heroImage from "../assets/heroImage.png";
import heroBg from "../assets/heroBg.png";

const Hero = () => {
  return (
    <section id="home"
      className={`${styles.flexCenter} ${styles.paddingY} flex-row flex-1 xs:flex-col  ss:flex-col sm:flex-col justify-between text-white w-full`}
    >
      {/* ---------------------------Left Section-------------------------------- */}
      <div
        className={`flex flex-col basis-[55%] xs:basis-[100%] pt-24 xs:pt-4 ss:pt-6 sm:pt-8  `}
      >
        <h1
          className={`font-Manrope text-[5rem] xs:text-[4rem] font-bold leading-[96px] xs:leading-[80px]`}
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
        <hr className=" border-[1px] border-white/[17%] w-80 my-4  " />
        <div
          className={`flex flex-row xs:flex-col justify-start items-center py-4`}
        >
          <button
            className={`shadow-btnLink text-[112.5%] ${styles.button} ${styles.flexCenter}`}
          >
            Explore More
            <div className="bg-white rounded-full border-[1px] inline-flex w-[34px] h-[34px] border-white ml-4"></div>
          </button>
          <h3 className={`pl-8 xs:my-7`}>Watch Intro</h3>
        </div>
      </div>
      {/*------------------------ Right Section---------------- */}
      <div
        className={`${styles.flexCenter} basis-[45%] xs:basis-[100%] xs:py-60 ss:py-72  sm:py-80  `}
      >
        <img
          src={heroBg}
          alt="hero bg"
          className="absolute w-[735px] lg:w-[635px] md:w-[535px] ss:w-[630px] pl-28 xs:px-12 ss:px-14 sm:px-14  "
        />
        <img
          src={heroImage}
          alt="hero image"
          className="absolute w-[750px] lg:w-[650px] md:w-[550px] ss:w-[600px] pl-20 "
        />
      </div>
    </section>
  );
};

export default Hero;
