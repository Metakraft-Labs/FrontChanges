import React from "react";
import styles from "../style";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <>
      <section id="contact" className={`text-white divide-y-2 divide-white/[17%] ${styles.paddingY} `}>
        {/* -------------------------Section 1----------------------- */}
        <div className={`flex justify-between items-start xs:flex-col ss:flex-col sm:flex-col `}>
          <div className={``}>
            <h2 className={`${styles.heading2} text-[2.25rem]`}>Blockwhip</h2>
            <p className={`${styles.paddingY} xs:pl-0 xs:py-6 ss:pl-0 ss:py-6 text-white/[54%]`}>
              Blockwhip is sit amet consec adipiscing elit <br /> sed do eiusmod tempor
              incididunt.
            </p>
          </div>
          <div>
            <div className={`xs:pl-0 xs:pt-12 ss:pl-0 ss:pt-12`}>
              <h3 className={`text-[1.25rem]  font-semibold `}>Our Location</h3>
              <p className={`pt-4`}><ArrowForwardIosIcon fontSize="small" className={`text-secondary mr-2`} />India</p></div>
            <div className={`${styles.paddingY} xs:pl-0 xs:pt-12 ss:pl-0 ss:pt-12`}>
              <h3 className={`text-[1.25rem]  font-semibold `}>Partnership</h3>
              <p className={`pt-4`}><ArrowForwardIosIcon fontSize="small" className={`text-secondary mr-2`} />partnership@domain.com</p></div>
          </div>
          <div>
            <h3 className={`text-[1.25rem] font-semibold`}>Other Pages</h3>
          </div>
          <div className={`xs:px-0 xs:pt-12 ss:px-0 ss:pt-12 sm:pt-12`}>
            <h3 className={`text-[1.25rem] font-semibold `}>Quick Links</h3>
            <p className={`pt-4`}><ArrowForwardIosIcon fontSize="small" className={`text-secondary mr-2`} />Privacy Policy</p>
            <p className={`pt-4`}><ArrowForwardIosIcon fontSize="small" className={`text-secondary mr-2`} />Term Of Service</p>
            <p className={`pt-4`}><ArrowForwardIosIcon fontSize="small" className={`text-secondary mr-2`} />Disclaimer</p>
            <p className={`pt-4`}><ArrowForwardIosIcon fontSize="small" className={`text-secondary mr-2`} />Credits</p>
          </div>
        </div>
        {/* -------------------Section 2----------------------- */}
        <div className={`divide-y-2 divide-white/[17%] mt-4`}>
          <div className={`${styles.text1} xs:flex-col xs:${styles.flexCenter} ss:flex-col ss:${styles.flexCenter}  font-semibold  text-white flex justify-between items-start ${styles.paddingY} xs:py-4`}>
            <div className={`text-center`}>
              <h3 className={`text-[1.25rem]`}>Follow Us</h3>
              <div className={`py-6`}>
                <a href="#"><FacebookIcon className={`mr-5 `} /></a>
                <a href="#"><InstagramIcon className={`mr-5`} /></a>
                <a href="#"><YouTubeIcon className={`mr-5`} /></a>
                <a href="#"><TwitterIcon /></a>
              </div>
            </div>
            <div className={`${styles.flexCenter} flex-col xs:pt-8 ss:pt-8 sm:pt-8`}>
              <h3 className={`text-[1.25rem]`}>Subscribe Our Newsletter</h3>
              <div className={`rounded-full my-6 ${styles.flexCenter} px-4 py-2 bg-[#ffffff0d] border-[#a5d3ff36] border-[1px] w-fit`}>
                <input type="text" name="newsletter" id="" placeholder="Your Email Address" className={` text-[1rem] bg-transparent font-light`} />
                <button className={`shadow-btnLink ${styles.button} font-semibold text-[1rem]`}>Subscribe</button>
              </div>
            </div>
            <div className={`xs:pt-8 ss:pt-8`}>
              <h3 className={`text-[1.25rem]`}>Payments</h3>
            </div>
          </div>
          <div className={`${styles.paddingY} xs:py-0 ss:py-0`}></div>
        </div></section>
    </>
  );
};

export default Footer;
