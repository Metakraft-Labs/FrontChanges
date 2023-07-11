import React from "react";
import styles from "../style";

const Services = () => {
  return (
    <>
      <section id="services" className={`${styles.paddingY}`}>
        <div
          className={`text-white flex flex-row justify-between xs:flex-col ss:flex-col sm:flex-col md:flex-col`}
        >
           <div className={`flex flex-row basis-[45%] md:basis-[100%] lg:basis-[60%] xl:basis-[55%] xs:flex-col ss:flex-col `}>
          <p className={`${styles.head3} -rotate-90 xs:rotate-0 ss:rotate-0 leading-[100px] xs:leading-[50px] ss:leading-[50px] ss:pt-6 `}>Services</p>
            <h2 className={`${styles.heading2}`}>
            <span className={`${styles.textGradient}`}>Discover Our</span> <br />
              <span className={`${styles.textGradient}`}>Best VR Projects</span>
            </h2>
          </div>
          <div className={` ${styles.flexCenter} xs:mt-12 ss:mt-12 sm:mt-12`}>
            <button
              className={`${styles.button} ${styles.flexCenter} xs:my-8 ss:my-8 md:my-12 shadow-btnLink text-[100%]`}
            >
              View All Services
              <div className="bg-white rounded-full border-[1px] inline-flex w-[24px] h-[24px] border-white ml-4"></div>
            </button>
          </div>
        </div>
        {/* ---------------------------------------------------------------- */}
        <div
          className={`flex justify-between flex-row xs:flex-col ss:flex-col sm:flex-wrap  ${styles.paddingY} w-full text-white`}
        >
          <div
            className={`${styles.padding} ${styles.serviceBox} xs:my-4 ss:my-4 sm:my-4 w-full sm:w-[45%] h-72 mr-8 sm:mr-0`}
          ></div>
          <div
            className={`${styles.padding} ${styles.serviceBox} xs:my-4 ss:my-4 sm:my-4 w-full sm:w-[45%] h-72 mr-8 sm:mr-0`}
          ></div>
          <div
            className={`${styles.padding} ${styles.serviceBox} xs:my-4 ss:my-4 sm:my-4 w-full sm:w-[45%] h-72 mr-8 sm:mr-0`}
          ></div>
          <div
            className={`${styles.padding} ${styles.serviceBox} xs:my-4 ss:my-4 sm:my-4 w-full sm:w-[45%] h-72  sm:mr-0`}
          ></div>
        </div>

        {/* --------------------------------------------------------------------------------------- */}
        <div
          className={`${styles.flexCenter} mt-24  p-14 xs:p-6 ss:p-6 sm:p-8 xs:flex-col ss:flex-col sm:flex-col text-white border-[1px] border-white/[17%] rounded-[1.25rem]`}
        >
          <div
            className={`border-[1px] w-[50%] xs:w-full ss:w-full sm:w-full p-12 xs:p-6 ss:p-6 sm:p-8 border-secondary rounded-[1.25rem]`}
          >
            <h3 className={`text-[34px] font-bold`}>Why <span className={`${styles.textGradient}`}>Blockwhip?</span></h3>
            <p className={`pt-8 text-white/[54%]`}>
              Excepteur sint occaecat cupidatat non proident sunt in culpa qui
              officia deseru mollit anim id est laborum magna.
            </p>
          </div>
          <div className={`${styles.flexStart} xs:flex-col ss:flex-col`}>
            {/* ------------------------------------------------------------ */}
            <div className={`${styles.padding} xs:pb-0 ss:pb-0 px-8 pr-0 xs:px-2 ss:px-2 sm:px-2  `}>
              <div className={`${styles.flexCenter} `}>
                <div>
                  <div
                    className={`shadow-box2 w-[3rem] h-[3rem] rounded-full`}
                  />
                </div>
                <div className={`p-2 ml-4`}>
                  <h3
                    className={`${styles.text1} text-[1.375rem]  font-semibold`}
                  >
                    Modern Technology
                  </h3>
                  <p className={`pt-4 text-white/[54%]`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className={`${styles.flexCenter}`}>
                <div>
                  <div
                    className={`shadow-box2 w-[3rem] h-[3rem] rounded-full`}
                  />
                </div>
                <div className={`p-2  ml-4`}>
                  <h3
                    className={`${styles.text1} text-[1.375rem]  font-semibold`}
                  >
                    Scalability
                  </h3>
                  <p className={`pt-4 text-white/[54%]`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              
            </div>
            {/* ---------------------------------------------------------- */}
            <div className={`${styles.padding} xs:pt-0 ss:pt-0 xs:px-2 ss:px-2 sm:px-2 px-8 `}>
            <div className={`${styles.flexCenter} `}>
                <div>
                  <div
                    className={`shadow-box2 w-[3rem] h-[3rem] rounded-full`}
                  />
                </div>
                <div className={`p-2  ml-4`}>
                  <h3
                    className={`${styles.text1} text-[1.375rem]  font-semibold`}
                  >
                    Versatile Technology
                  </h3>
                  <p className={`pt-4 text-white/[54%]`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>         
              <div className={`${styles.flexCenter}`}>
                <div>
                  <div
                    className={`shadow-box2 w-[3rem] h-[3rem] rounded-full`}
                  />
                </div>
                <div className={`p-2 ml-4`}>
                  <h3
                    className={`${styles.text1} text-[1.375rem] font-semibold`}
                  >
                    Cost Effective
                  </h3>
                  <p className={`pt-4 text-white/[54%]`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
