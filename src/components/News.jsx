import React from "react";
import styles from "../style";
import { motion } from "framer-motion";
import { navVariants } from "../../utils/motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import newsbg from "../assets/newsbg.png";
import newsbg1 from "../assets/newsbg1.png";
import newsbg2 from "../assets/newsbg2.png";
import newsbg3 from "../assets/newsbg3.png";

const News = () => {
  return (
    <>
      <section id="news" className={` text-white xs:pb-8 `}>
        <div
          className={`text-white flex flex-row xs:text-center ss:text-center sm:text-center justify-between xs:flex-col ss:flex-col sm:flex-col`}
        >
          <div
            className={`flex relative flex-row basis-[45%] md:basis-[65%] lg:basis-[60%] xl:basis-[55%] xs:flex-col ss:flex-col sm:flex-col`}
          >
            <p
              className={`${styles.head3}   absolute -left-10 top-14 xs:left-0 xs:right-0 xs:-top-10  ss:left-0 ss:right-0 ss:-top-10  sm:left-0 sm:right-0 sm:-top-10  -rotate-90 xs:rotate-0 ss:rotate-0 sm:rotate-0 leading-[100px] xs:leading-[50px] ss:leading-[50px] sm:leading-[50px] ss:pt-6 `}
            >
              OurNews
            </p>
            <h2 className={`${styles.heading2} pl-12 xs:pl-0 ss:pl-0 sm:pl-0`}>
              <span className={`${styles.textGradient} xs:text-white`}>
                Our Latest News
              </span>
              <br />
              <span className={`${styles.textGradient}`}>and Articles</span>
            </h2>
          </div>
          <div className={`flex items-center justify-center ss:mt-12 sm:mt-12`}>
            <motion.button
              whileInView="show"
              initial="hidden"
              variants={navVariants}
              className={`${styles.button} ${styles.flexCenter} xs:my-8 ss:my-8 md:my-12 shadow-btnLink text-[100%]`}
            >
              View All News
              <div className="bg-white rounded-full border-[1px] inline-flex w-[24px] h-[24px] border-white ml-4"></div>
            </motion.button>
          </div>
        </div>
        <div
          className={`${styles.marginY} flex flex-row xs:flex-col ss:flex-col sm:flex-col md:flex-col rounded-3xl border-[#ffffff2b] border-[1px] p-4 xs:p-1 ss:p-2 sm:p-2 w-full`}
        >
          {/* ------------------------------First Column---------------------------------------- */}
          <div
            className={`p-10 xs:p-6 ss:p-6 sm:p-6 xs:m-6 ss:m-6 sm:m-8 m-8 mr-0 basis-[50%] border-white border-[1px] rounded-[20px]`}
          >
            <div className={`flex flex-col items-start basis-[50%]`}>
              <motion.button
                whileInView="show"
                initial="hidden"
                variants={navVariants}
                className={`${styles.text1} font-semibold p-2 px-6 text-[16px] border-[1px] border-secondary rounded-full`}
              >
                Insight
              </motion.button>
              <a href="https://blockwhip.hashnode.dev/the-blockchain-revolution-powering-the-explosive-growth-of-the-gaming-industry" target="_blank">  <h3 className={`${styles.text1} pt-4 text-[28px] leading-8`}>
              The Blockchain Revolution: Powering the Explosive Growth of the Gaming Industry
              </h3></a>
             <a href="https://blockwhip.hashnode.dev/the-blockchain-revolution-powering-the-explosive-growth-of-the-gaming-industry" target="_blank"> <img src={newsbg} alt="" className="rounded-[20px] hover:opacity-[0.8] mt-8 lg:mt-20 xl:mt-20"/>
             </a> </div>
          </div>
          {/* ------------------------------Second Column---------------------------------------- */}
          <div className={` basis-[50%]`}>
            <div className={`h-[35%] flex flex-row xs:flex-col p-8  xs:p-6  sm:p-6`}>
              <div
                className={`  xs:basis-[50%] ss:basis-[50%] sm:basis-[50%] md:basis-[50%] lg:w-[500px] xl:w-[500px] xl:h-[200px] lg:h-[200px] border-white border-[1px] rounded-[20px] `}
              >
                <img src={newsbg1} alt="" className="w-full h-full hover:opacity-[0.8] rounded-[20px]"/>
              </div>
              <div className={`pl-4 xs:mt-4 xs:px-0`}>
                <h3 className={`${styles.text1} text-[20px] font-semibold`}>
                Enhancing Sales with WebGL and AR/VR: A New Dimension of Product Showcasing </h3>
                <p className={`${styles.paragraph} py-2`}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  repellendus, non quam
                </p>
               <a href="https://blockwhip.hashnode.dev/enhancing-sales-with-webgl-and-arvr-a-new-dimension-of-product-showcasing" target="_blank "> <p className={`${styles.linkText} text-secondary`}>
                  Read More <ArrowForwardIcon />
                </p></a>
              </div>
            </div>
            <div className={` flex flex-row xs:flex-col p-8 xs:p-6 sm:p-6`}>
              <div
                className={` xs:basis-[50%] ss:basis-[50%] sm:basis-[50%] md:basis-[50%] lg:w-[500px] xl:w-[500px] xl:h-[200px] lg:h-[200px] border-white border-[1px] rounded-[20px]`}
              >
                <img src={newsbg2} alt="" className="w-full h-full hover:opacity-[0.8] rounded-[20px]"/>

              </div>
              <div className={`pl-4 xs:mt-4 xs:px-0`}>
                <h3 className={`${styles.text1} text-[20px] font-semibold`}>
                AR/VR Solutions for Enterprises: Unlocking a World of Innovation and Efficiency </h3>
                <p className={`${styles.paragraph} py-2`}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  repellendus, non quam
                </p>
                <a href="https://blockwhip.hashnode.dev/arvr-solutions-for-enterprises-unlocking-a-world-of-innovation-and-efficiency" target="_blank"><p className={`${styles.linkText} text-secondary`}>
                  Read More <ArrowForwardIcon />
                </p></a>
              </div>
            </div>
            <div className={` flex flex-row xs:flex-col p-8 xs:p-6 sm:p-6`}>
              <div
                className={`  xs:basis-[50%] ss:basis-[50%] sm:basis-[50%] md:basis-[50%] lg:w-[500px] xl:w-[500px] xl:h-[200px] lg:h-[200px] border-white border-[1px] rounded-[20px]`}
              >
                <img src={newsbg3} alt="" className="w-full h-full hover:opacity-[0.8] rounded-[20px]"  />

              </div>
              <div className={`pl-4 xs:mt-4 xs:px-0`}>
                <h3 className={`${styles.text1} text-[20px] font-semibold`}>
                Redefining user interaction with VR </h3>
                <p className={`${styles.paragraph} py-2`}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint
                  repellendus, non quam
                </p>
              <a href="https://blockwhip.hashnode.dev/arvr-solutions-for-enterprises-unlocking-a-world-of-innovation-and-efficiency" target="_blank"><p className={`${styles.linkText} text-secondary`}>
                  Read More <ArrowForwardIcon />
                </p></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
