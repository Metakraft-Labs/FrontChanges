import React from "react";
import styles from "../style";
import {motion} from "framer-motion"
import { navVariants } from "../../utils/motion";
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
      <section id="pages" className={`${styles.paddingY } pt-24 xs:pt-0 `}>
        <div
          className={`text-white ${styles.flexCenter} xs:flex-col ss:flex-col sm:flex-col`}
        >
          <div className={`flex flex-row basis-[45%] md:basis-[100%] lg:basis-[60%] xl:basis-[55%] xs:flex-col ss:flex-col`}>
            <p className={`${styles.head3} -rotate-90 xs:rotate-0 ss:rotate-0 leading-[100px] xs:leading-[50px] ss:leading-[50px]`}>
              Partners
            </p>
            <h2 className={`${styles.heading2}`}>
              Trusted <span className={`${styles.textGradient}`}>By Big</span>{" "}
              <span className={`${styles.textGradient}`}>Companies</span>
            </h2>
          </div>
          <div className={`basis-[55%]`}>
            <p className={`text-white/[54%] xs:pt-6 ss:pt-6 sm:pt-6 `}>
              <b>Blockwhip</b> is a metaverse and blockchain development studio based in Bangalore, India. We’re a team of developers, designers, artists and visionaries who help brands step into the world of virtual & augmented reality.
            </p>
          </div>
        </div>
        <div className={`grid ${styles.flexCenter} ${styles.paddingY} w-full xs:my-14 ss:my-14 sm:my-14 `}>
          <div
            className={`grid grid-cols-4 xs:grid-cols-2 ss:grid-cols-2 sm:grid-cols-2 divide-x-2 divide-white/[17%]  xs:divide-x-0  ss:divide-x-0 sm:divide-x-0`}
          >
            <div
              className={`py-12 xs:py-4 xs:px-6 ss:py-7 sm:py-10 sm:px-5 px-10 ${styles.flexCenter}`}
            >
              <img src={flash} alt="flash" />
            </div>
            <div
              className={`py-12 xs:py-4 xs:px-6 ss:py-7 sm:py-10 sm:px-5 px-10 ${styles.flexCenter}`}
            >
              <img src={nextmove} alt="nextmove" />
            </div>
            <div
              className={`py-12 xs:py-4 xs:px-6 ss:py-7 sm:py-10 sm:px-5 px-10 ${styles.flexCenter}`}
            >
              <img src={hitech} alt="hitech" />
            </div>
            <div
              className={`py-6 xs:py-4 xs:px-6 ss:py-7 sm:py-10 sm:px-5 px-4 ${styles.flexCenter}`}
            >
              <img src={sitemark} alt="sitemark" />
            </div>
          </div>
          <hr className={`border-white/[17%] xs:hidden ss:hidden sm:hidden`} />
          <div
            className={`grid grid-cols-4 xs:grid-cols-2 ss:grid-cols-2 sm:grid-cols-2 divide-x-2  xs:divide-x-0  ss:divide-x-0 sm:divide-x-0 divide-white/[17%]`}
          >
            <div
              className={`py-12 xs:py-4 xs:px-6 ss:py-7 sm:py-10 sm:px-5 px-10 ${styles.flexCenter}`}
            >
              <img src={inspire} alt="inspire" />
            </div>
            <div
              className={`py-12 xs:py-4 xs:px-6 ss:py-7 sm:py-10 sm:px-5 px-10 ${styles.flexCenter}`}
            >
              <img src={vision} alt="vision" />
            </div>
            <div
              className={`py-12 xs:py-4 xs:px-6 ss:py-7 sm:py-10 sm:px-5 px-10 ${styles.flexCenter}`}
            >
              <img src={network} alt="network" />
            </div>
            <div
              className={`py-12 xs:py-4 xs:px-6 ss:py-7 sm:py-10 sm:px-5 px-10 ${styles.flexCenter}`}
            >
              <img src={recharge} alt="recharge" />
            </div>
          </div>
        </div>
        <div className={`${styles.flexCenter} ${styles.marginY} flex-col `}>
          <h2 className={`${styles.heading2} text-white`}>
            Experience a New <span className={`${styles.textGradient}`}> Dimension of Reality</span>
          </h2>
          <div
            className={`${styles.marginY} rounded-3xl border-secondary border-[1px] p-4 w-full`}
          >
            <iframe src="" frameborder="0" className={``} />
          </div>
          <div
            className={`flex justify-between xs:flex-col ss:flex-col w-full`}
          >
            <div className={`${styles.flexCenter} xs:flex-col`}>
              <div className={`xs:mb-4`}>
                <h3
                  className={`text-white text-[250%] font-bold ${styles.flexStart}`}
                >
                  98{" "}
                  <span className={`text-secondary pl-2 text-[20px]`}>%</span>
                </h3>

                <p className={`${styles.paragraph} text-white/70`}>
                  Satisfied Clients
                </p>
              </div>
              <div className={`mx-12 xs:mb-4`}>
                <h3
                  className={`text-white text-[250%] font-bold ${styles.flexStart}`}
                >
                  98{" "}
                  <span className={`text-secondary pl-2  text-[20px] `}>%</span>
                </h3>
                <p className={`${styles.paragraph} text-white/70`}>
                  Satisfied Clients
                </p>
              </div>
              <div>
                <h3
                  className={`text-white text-[250%] font-bold ${styles.flexStart}`}
                >
                  10M{" "}
                  <span className={`text-secondary pl-2 text-[20px]`}>+</span>
                </h3>
                <p className={`${styles.paragraph} text-white/70`}>
                  Clients Satisfied
                </p>
              </div>
            </div>
            <div className={` ${styles.flexCenter} xs:my-12 ss:my-12`}>
              <motion.button whileInView="show" initial="hidden" variants={navVariants}
                className={`${styles.button} ${styles.flexCenter} shadow-btnLink text-[100%]`}
              >
                Explore More
                <div className="bg-white rounded-full border-[1px] inline-flex w-[24px] h-[24px] border-white ml-4"></div>
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
