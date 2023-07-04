import React from "react";
import styles from "../style";
import heroImage from "../assets/heroImage.png";
import heroBg from "../assets/heroBg.png";

const Hero = () => {
  return (
    <div className={`${styles.flexStart} ${styles.paddingY} `}>
      <div className={`text-white flex flex-row`}>
        {/* ---------------------------Left Section-------------------------------- */}
        <div className={`flex flex-col  `}>
        <div>
          <h1 className={`font-Manrope text-[96px] font-bold leading-[96px]`}>
            Build Your Block
            <br />
            <span>In The Metaverse.</span>
          </h1>
          <p
            className={`${styles.paragraph} py-4 text-[18px] leading-[27px] font-light`}
          >
            We specialize in providing cutting-edge Virtual Reality <br />
            solutions that transport you to immersive digital worlds.
          </p>
          <hr className=" border-[1px] border-white/[17%] w-80 my-4  " />
          <div className={`flex flex-row justify-start items-center py-4`}>
            <button
              className={`shadow-btnLink px-6 py-2 rounded-full ${styles.flexCenter} w-fit`}
            >
              Explore More
              <div className="bg-white rounded-full border-[1px] inline-flex w-[34px] h-[34px] border-white ml-4"></div>
            </button>
            <h3 className={`pl-8`}>Watch Intro</h3>
          </div>
          </div>
        </div>
        {/*------------------------ Right Section---------------- */}
        <div className={`pl-6`}>
          <img src={heroBg} alt="hero bg" className="absolute w-[32%]" />
          <img src={heroImage} alt="hero image" className="absolute w-[30%]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
