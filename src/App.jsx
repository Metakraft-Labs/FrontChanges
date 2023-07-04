import React from "react";
import styles from "./style";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Feedback from "./components/Feedback";
import News from "./components/News";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter} p-[40px]`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <Partners />
        <Services />
        <Feedback />
        <News />
        <Footer />
      </div>
    </>
  );
};

export default App;
