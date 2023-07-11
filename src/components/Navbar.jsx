import React, { useState } from "react";
import { navLinks } from "../constants";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from "../style";
import Icon from "../assets/icon.png"
import { Menu } from "@mui/material";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className={`${styles.flexCenter} flex-row text-white w-full`}>
        {/* ---------------Nav Text--------------- */}
        <div>
          <p className={`${styles.text1} text-[2.25rem]`}>Blockwhip</p>
        </div>
        {/* ---------------Nav Links---------------- */}
        <div className={`${styles.flexEnd} w-full`}>
          <ul className={`${styles.flexCenter} xs:hidden ss:hidden `}>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={` ${styles.linkText} px-6 sm:px-4`}>
                <a href={`#${nav.id}`} className={`hover:underline hover:text-secondary hover:underline-offset-[20px] hover:decoration-secondary transition duration-300 ease-in-out`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <div className={`rounded-full border-[1px] border-secondary p-2 ml-6 xs:hidden ss:hidden `}>
          <MenuIcon className={``}/>
          </div>
          <div className={`sm:hidden md:hidden lg:hidden xl:hidden mx-4 border-[1px] border-white/50 rounded-full p-2 `} onClick={() => setToggle((prev) => !prev)}>
            {toggle ? <CloseIcon className={``}/> : <MenuIcon className={``}/>}
            <div className={`${toggle ? "flex" : "hidden"} bg-primary w-fit absolute top-20 right-10 mx-4 my-6 rounded-xl border-secondary border-[1px] animate-slide  `}>
              <ul className="list-none flex justify-start items-start  flex-1 flex-col p-8 scroll-smooth">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={` ${styles.linkText} px-6 sm:px-4 cursor-pointer ${index === navLinks.length - 1 ? "mr-0" : "mb-6"} mr-10 scroll-smooth`}
                  >
                    <a href={`#${nav.id}`} className={`hover:text-secondary`}> {nav.title} </a>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
