import React from "react";
import styles from "../style";
import flash from "../assets/flash.png";
import nextmove from "../assets/nextmove.png";
import hitech from "../assets/hitech.png";
import sitemark from "../assets/sitemark.png";
import inspire from "../assets/inspire.png";
import vision from "../assets/vision.png";
import network from "../assets/network.png";
import recharge from "../assets/recharge.png";

const Partners = () => {
  return (
    <>
    <div className={`${styles.marginY} pt-24`}>
      <div className={`text-white ${styles.flexCenter} xs:flex-col ss:flex-col sm:flex-col`}>
      <div className={`${styles.flexCenter}`}>
        <p className={`${styles.head3} -rotate-90`}>Partners</p>
        <h2 className={`${styles.heading2}`}>
          Trusted By Big <span>Companies</span>
          
        </h2></div>
        <div>
        <p className={`text-white/[54%] xs:pt-6 ss:pt-6 sm:pt-6 `}>
          <b>Blockwhip</b> is Lorem ipsum dolor sit amet consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam quis nostrud tempor dolore adispa
          dolore magna consecteur labore.
        </p></div>
      </div>
      <div
        className={`grid  ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY}`}
      >
        <div className={`grid grid-cols-4 xs:grid-cols-2 ss:grid-cols-2 sm:grid-cols-2 divide-x-2 divide-white/[17%]`}>
          <div
            className={`${styles.paddingY} xs:py-4 xs:px-6 ss:py-7 sm:py-10 sm:px-5 ${styles.paddingX} ${styles.flexCenter}`}
          >
            <img src={flash} alt="flash" />
          </div>
          <div
            className={`${styles.paddingY} xs:py-4 xs:px-6 ss:py-7 sm:py-10 sm:px-5 ${styles.paddingX} ${styles.flexCenter}`}
          >
            <img src={nextmove} alt="nextmove" />
          </div>
          <div
            className={`${styles.paddingY} xs:py-4 xs:px-6 ss:py-7 sm:py-10 sm:px-5 ${styles.paddingX} ${styles.flexCenter}`}
          >
            <img src={hitech} alt="hitech" />
          </div>
          <div
            className={`${styles.paddingY} xs:py-4 xs:px-6 ss:py-7 sm:py-10 sm:px-5 ${styles.paddingX} ${styles.flexCenter}`}
          >
            <img src={sitemark} alt="sitemark" />
          </div>
        </div>
        <hr className={`border-white/[17%]`} />
        <div className={`grid grid-cols-4 xs:grid-cols-2 ss:grid-cols-2 sm:grid-cols-2 divide-x-2 divide-white/[17%]`}>
          <div
            className={`${styles.paddingY} xs:py-4 xs:px-6 ss:py-7 sm:py-10 sm:px-5 ${styles.paddingX} ${styles.flexCenter}`}
          >
            <img src={inspire} alt="inspire" />
          </div>
          <div
            className={`${styles.paddingY} xs:py-4 xs:px-6 ss:py-7 sm:py-10 sm:px-5 ${styles.paddingX} ${styles.flexCenter}`}
          >
            <img src={vision} alt="vision" />
          </div>
          <div
            className={`${styles.paddingY} xs:py-4 xs:px-6 ss:py-7 sm:py-10 sm:px-5 ${styles.paddingX} ${styles.flexCenter}`}
          >
            <img src={network} alt="network" />
          </div>
          <div
            className={`${styles.paddingY} xs:py-4 xs:px-6 ss:py-7 sm:py-10 sm:px-5 ${styles.paddingX} ${styles.flexCenter}`}
          >
            <img src={recharge} alt="recharge" />
          </div>
        </div>
      </div>
      <div className={`${styles.flexCenter} ${styles.marginY} flex-col `}>
        <h2 className={`${styles.heading2} text-white`}>
          Experience a New Dimension of Reality
        </h2>
        <div
          className={`${styles.marginY} rounded-3xl border-secondary border-[1px] p-4 w-full`}
        >
          <iframe src="" frameborder="0" className={``} />
        </div>
        <div className={`flex justify-between xs:flex-col ss:flex-col w-full`}>
          <div className={`${styles.flexCenter} `}>
            <div>
              <h3 className={`text-white text-[250%] font-bold ${styles.flexStart}`}>
                98 <span className={`text-secondary pl-2 text-[20px]`}>%</span>
              </h3>
          
              <p className={`${styles.paragraph} text-white/70`}>
                Satisfied Clients
              </p>
            </div>
            <div className={`mx-12`}>
              <h3 className={`text-white text-[250%] font-bold ${styles.flexStart}`}>
                98 <span className={`text-secondary pl-2  text-[20px] `}>%</span>
              </h3>
              <p className={`${styles.paragraph} text-white/70`}>
                Satisfied Clients
              </p>
            </div>
            <div>
              <h3 className={`text-white text-[250%] font-bold ${styles.flexStart}`}>
                10M <span className={`text-secondary pl-2 text-[20px]`}>+</span>
              </h3>
              <p className={`${styles.paragraph} text-white/70`}>
                Clients Satisfied
              </p>
            </div>
          </div>
          <div className={` ${styles.flexCenter} xs:my-12 ss:my-12`}>
            <button className={`${styles.button} ${styles.flexCenter} shadow-btnLink text-[100%]`}>
              Explore More
              <div className="bg-white rounded-full border-[1px] inline-flex w-[24px] h-[24px] border-white ml-4"></div>
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Partners;
