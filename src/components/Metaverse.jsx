import React from "react";
import styles from "../style";
import metaImage1 from "../assets/metaImage1.png";
import metaImage2 from "../assets/metaImage2.png";

const Metaverse = () => {
  return (
    <>
      <div  className={`${styles.paddingY} pb-5`}>
        <div>
          <div className={`flex flex-col `}>
            <h2 className={`${styles.heading2} text-[96px] ss:text-[72px] sm:text-[72px] md:text-[82px] ss:leading-[90px] sm:leading-[90px] leading-[96px]`}>
              <span className={`${styles.textGradient}`}>
                Boost Your Product Sales
              </span>
            </h2>
            <p className={`${styles.paragraph} py-6`}>
            Immersive shopping experiences are the next step in the evolution of e-commerce. Companies like IFB & Bosch have noticed a 35% to 40% increase in sales of their products. Showcase your products on websites, AR applications or Virtual Reality for higher user engagement and conversions. 
            </p>
          </div>
          <div className={`${styles.flexCenter} pt-14`}>
            <img src={metaImage1} alt="" className={``} />
          </div>
        </div>
        <div className={`${styles.paddingY}`}>
          <div className={`flex flex-col `}>
            <h2 className={`${styles.heading2}  text-[96px] ss:text-[72px] sm:text-[72px] md:text-[82px] ss:leading-[90px] sm:leading-[90px] leading-[96px]`}>
              <span className={`${styles.textGradient} `}>
                Enterprise AR/VR Solutions
              </span>
            </h2>
            <p className={`${styles.paragraph} py-6`}>
            Enterprise AR/VR solutions unlock a new dimension of productivity and innovation, seamlessly merging virtual and physical realms to revolutionize workplace experiences and drive business success. Role-play and interactive elements in VR enabled training can prepare an individual before facing the real world equivalent.
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
