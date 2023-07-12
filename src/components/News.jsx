import React from "react";
import styles from "../style";
import {motion} from "framer-motion"
import { navVariants } from "../../utils/motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const News = () => {
  return (
    <>
      <section id="news" className={`${styles.paddingY} text-white `}>
        <div
          className={`text-white flex flex-row justify-between xs:flex-col ss:flex-col sm:flex-col md:flex-col`}
        >
          <div
            className={`flex flex-row basis-[45%] md:basis-[100%] lg:basis-[60%] xl:basis-[55%] xs:flex-col ss:flex-col`}
          >
            <p
              className={`${styles.head3} -rotate-90 xs:rotate-0 ss:rotate-0 leading-[100px] xs:leading-[50px] ss:leading-[50px] ss:pt-6 `}
            >
              OurNews
            </p>
            <h2 className={`${styles.heading2}`}>
              <span className={`${styles.textGradient}`}>Our Latest News</span>
              <br />
              <span className={`${styles.textGradient}`}>and Articles</span>
            </h2>
          </div>
          <div className={`flex items-center justify-center  xs:justify-start ss:mt-12 sm:mt-12`}>
            <motion.button  whileInView="show" initial="hidden" variants={navVariants}
              className={`${styles.button} ${styles.flexCenter} xs:my-8 ss:my-8 md:my-12 shadow-btnLink text-[100%]`}
            >
              View All News
              <div className="bg-white rounded-full border-[1px] inline-flex w-[24px] h-[24px] border-white ml-4"></div>
            </motion.button>
          </div>
        </div>
        <div
          className={`${styles.marginY} flex flex-row xs:flex-col ss:flex-col sm:flex-col rounded-3xl border-[#ffffff2b] border-[1px] p-4 xs:p-1 ss:p-2 sm:p-2 w-full`}
        >
          {/* ------------------------------First Column---------------------------------------- */}
          <div
            className={`p-10 xs:p-6 ss:p-6 sm:p-6 xs:m-6 ss:m-6 sm:m-8 m-8 mr-0 basis-[50%] border-white border-[1px] rounded-[20px]`}
          >
            <div className={`flex flex-col items-start`}>
              <motion.button  whileInView="show" initial="hidden" variants={navVariants}
                className={`${styles.text1} font-semibold p-2 px-6 text-[16px] border-[1px] border-secondary rounded-full`}
              >
                Insight
              </motion.button>
              <h3 className={`${styles.text1} pt-4 text-[28px] leading-8`}>
                Designing Experiences: How VR Services Redefine User Interaction
              </h3>
            </div>
          </div>
          {/* ------------------------------Second Column---------------------------------------- */}
          <div className={``}>
            <div className={`flex flex-row xs:flex-col p-8  xs:p-6  sm:p-6`}>
              <div
                className={`p-10 basis-[25%] border-white border-[1px] rounded-[20px]`}
              ></div>
              <div className={`pl-4 xs:mt-4 xs:px-0`}>
                <h3 className={`${styles.text1} text-[20px] font-semibold`}>
                  Enhancing Engagement: Unleashing the Benefits of VR Services
                </h3>
                <p className={`${styles.paragraph} py-2`}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  repellendus, non quam
                </p>
                <p className={`${styles.linkText} text-secondary`}>
                  Read More <ArrowForwardIcon />
                </p>
              </div>
            </div>
            <div className={`flex flex-row xs:flex-col p-8 xs:p-6 sm:p-6`}>
              <div
                className={`p-10 basis-[25%] border-white border-[1px] rounded-[20px]`}
              ></div>
              <div className={`pl-4 xs:mt-4 xs:px-0`}>
                <h3 className={`${styles.text1} text-[20px] font-semibold`}>
                  Enhancing Engagement: Unleashing the Benefits of VR Services
                </h3>
                <p className={`${styles.paragraph} py-2`}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  repellendus, non quam
                </p>
                <p className={`${styles.linkText} text-secondary`}>
                  Read More <ArrowForwardIcon />
                </p>
              </div>
            </div>
            <div className={`flex flex-row xs:flex-col p-8 xs:p-6 sm:p-6`}>
              <div
                className={`p-10 basis-[25%] border-white border-[1px] rounded-[20px]`}
              ></div>
              <div className={`pl-4 xs:mt-4 xs:px-0`}>
                <h3 className={`${styles.text1} text-[20px] font-semibold`}>
                  Enhancing Engagement: Unleashing the Benefits of VR Services
                </h3>
                <p className={`${styles.paragraph} py-2`}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  repellendus, non quam
                </p>
                <p className={`${styles.linkText} text-secondary`}>
                  Read More <ArrowForwardIcon />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
