import React from "react";
import styles from "../style";
import { motion } from "framer-motion";
import { navVariants } from "../../utils/motion";

const Feedback = () => {
  return (
    <>
      <div className={`${styles.paddingY}`}>
        <div
          className={`text-white pt-14 xs:text-center ss:text-center sm:text-center flex flex-row justify-between xs:flex-col ss:flex-col sm:flex-col`}
        >
          <div
            className={`flex flex-row basis-[45%] md:basis-[65%] lg:basis-[60%] xl:basis-[55%] xs:flex-col ss:flex-col sm:flex-col`}
          >
            <p
              className={`${styles.head3} -rotate-90 xs:rotate-0 ss:rotate-0 sm:rotate-0 leading-[100px] xs:leading-[50px] ss:leading-[50px] sm:leading-[50px] ss:pt-6 `}
            >
              Feedback
            </p>
            <h2 className={`${styles.heading2}`}>
              <span className={`${styles.textGradient} xs:text-white`}>
                Real Feedback
              </span>{" "}
              <br />
              <span className={`${styles.textGradient}`}>From Our Clients</span>
            </h2>
          </div>
          <div
            className={` flex items-center justify-center ss:mt-12 sm:mt-12`}
          >
            <motion.button
              whileInView="show"
              initial="hidden"
              variants={navVariants}
              className={`${styles.button} ${styles.flexCenter} xs:my-8 ss:my-8 md:my-12 shadow-btnLink text-[100%]`}
            >
              Our Feedback
              <div className="bg-white rounded-full border-[1px] inline-flex w-[24px] h-[24px] border-white ml-4"></div>
            </motion.button>
          </div>
        </div>
        <div
          className={`${styles.marginY} xs:mb-20 rounded-3xl border-[#ffffff2b] border-[1px] p-4 w-full h-[300px]`}
        >
          
        </div>
      </div>
    </>
  );
};

export default Feedback;
