import React from "react";
import { navLinks } from "../constants";
import styles from "../style";
import Icon from "../assets/icon.svg"

const Navbar = () => {
  return (
    <>
      <nav className={`${styles.flexCenter} flex-row text-white w-full`}>
        {/* ---------------Nav Text--------------- */}
        <div>
          <p className={`${styles.text1} text-[2.25rem]`}>Blockwhip</p>
        </div>
        {/* ---------------Nav Links---------------- */}
        <div className={`${styles.flexEnd} w-full`}>
          <ul className={`${styles.flexCenter} xs:hidden ss:hidden sm:hidden `}>
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` ${styles.linkText} px-6`}>
                <a href={`#${nav.id}`} className={`hover:underline hover:text-secondary hover:underline-offset-[20px] hover:decoration-secondary transition duration-300 ease-in-out`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className={`rounded-full border-[1px] border-secondary p-2 ml-6`}>
            <img src={Icon} alt="toggle_image" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
