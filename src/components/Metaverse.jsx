import React from "react";
import styles from "../style";
import metaImage1 from "../assets/metaImage1.png";
import metaImage2 from "../assets/metaImage2.png";
import metaVideo from "../assets/metaVideo.mp4";
const Metaverse = () => {
  return (
    <>
      <div className={`${styles.marginY} pb-5`}>
        <div>
          <div className={`flex flex-col text-left sm:text-center md:text-center lg:text-center`}>
            <h2 className={`${styles.heading2}`}>
              <span className={`${styles.textGradient}`}>
                Boost Your Product Sales
              </span>
            </h2>
            <p className={`${styles.paragraph} py-6`}>
              Immersive shopping experiences are the next step in the evolution
              of e-commerce. Companies like IFB & Bosch have noticed a 35% to
              40% increase in sales of their products. Showcase your products on
              websites, AR applications or Virtual Reality for higher user
              engagement and conversions.
            </p>
          </div>
          <div className={`${styles.flexCenter} pt-14 xl:px-24 `}>
            
              <video src={metaVideo} autoplay loop type="video/mp4" className="w-full h-full rounded-[34px]"></video>
            {/* <img src={metaImage1} alt="" className={``} /> */}
          </div>
        </div>
        <div className={`${styles.paddingY} xs:pt-24 ss:pt-24 sm:pt-28 pt-28`}>
          <div className={`flex flex-col text-left sm:text-center md:text-center lg:text-center `}>
            <h2 className={`${styles.heading2} `}>
              <span className={`${styles.textGradient} `}>
                Enterprise AR/VR Solutions
              </span>
            </h2>
            <p className={`${styles.paragraph} py-6`}>
              Enterprise AR/VR solutions unlock a new dimension of productivity
              and innovation, seamlessly merging virtual and physical realms to
              revolutionize workplace experiences and drive business success.
              Role-play and interactive elements in VR enabled training can
              prepare an individual before facing the real world equivalent.
            </p>
          </div>
          <div className={`${styles.flexCenter} pt-14`}>
            <img src={metaImage2} alt="" className={``} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Metaverse;
