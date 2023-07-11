import React from "react";
import styles from "../style";
import {motion} from "framer-motion"

const Feedback = () => {
  return (
    <>
      <div className={`${styles.paddingY}`}>
        <div
          className={`text-white flex flex-row justify-between xs:flex-col ss:flex-col sm:flex-col md:flex-col`}
        >
          <div
            className={`flex flex-row basis-[45%] md:basis-[100%] lg:basis-[60%] xl:basis-[55%] xs:flex-col ss:flex-col`}
          >
            <p
              className={`${styles.head3} -rotate-90 xs:rotate-0 ss:rotate-0 leading-[100px] xs:leading-[50px] ss:leading-[50px] ss:pt-6 `}
            >
              Feedback
            </p>
            <h2 className={`${styles.heading2}`}>
              <span className={`${styles.textGradient}`}>Real Feedback</span>{" "}
              <br />
              <span className={`${styles.textGradient}`}>From Our Clients</span>
            </h2>
          </div>
          <div className={` flex items-center justify-center  xs:justify-start ss:mt-12 sm:mt-12`}>
            <motion.button  initial={{opacity: 0}} animate={{opacity: 1}} transition={{ type: 'spring', delay:0.5, duration: 2 }}
              className={`${styles.button} ${styles.flexCenter} xs:my-8 ss:my-8 md:my-12 shadow-btnLink text-[100%]`}
            >
              Our Feedback
              <div className="bg-white rounded-full border-[1px] inline-flex w-[24px] h-[24px] border-white ml-4"></div>
            </motion.button>
          </div>
        </div>
          <div
            className={`${styles.marginY} rounded-3xl border-[#ffffff2b] border-[1px] p-4 w-full`}
          >
            <iframe src="" frameborder="0" className={``} />
          </div>
      </div>
    </>
  );
};

export default Feedback;
