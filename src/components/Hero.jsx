import React from "react";
import styles from "../style";
import heroImage from "../assets/heroImage.png";
import heroBg from "../assets/heroBg.png";

const Hero = () => {
  return (
    <div
      className={`${styles.flexCenter} ${styles.marginY} flex-row flex-1 ss:flex-col sm:flex-col justify-between text-white w-full`}
    >
      {/* ---------------------------Left Section-------------------------------- */}
      <div className={`flex flex-col`}>
        <h1 className={`font-Manrope text-[5rem] font-bold leading-[96px]`}>
          Build Your Block<span> In The Metaverse.</span>
        </h1>
        <p
          className={`${styles.paragraph} py-4 text-[18px] leading-[27px] font-light`}
        >
          We specialize in providing cutting-edge Virtual Reality solutions that transport you to immersive digital worlds.
        </p>
        <hr className=" border-[1px] border-white/[17%] w-80 my-4  " />
        <div className={`flex flex-row xs:flex-col justify-start items-center py-4`}>
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
      <div className={`${styles.flexCenter} xs:hidden bg-blend-multiply`}>
        <img src={heroBg} alt="hero bg" className="w-[32%]  " />
        <img src={heroImage} alt="hero image" className="w-[30%]  " />
      </div>
    </div>
  );
};

export default Hero;
