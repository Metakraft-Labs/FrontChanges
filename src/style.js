const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    // heading2: "font-Manrope font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    heading2: "text-[64px] font-Manrope font-bold leading-[70.4px] w-full",
    head3: "text-secondary font-Manrope font-[18px] font-semibold leading-[18px] tracking-[3px] uppercase",
    text1: " font-Manrope font-bold",
    linkText: "text-[16px] font-Manrope font-medium leading-[16px]",
    paragraph: "text-grey text-[16px] font-Heebo font-normal leading-[24px]",
    button: "rounded-[50px] border-[1px] border-secondary px-6 py-4 text-white",
    serviceBox: "rounded-[1.25rem] border-[1px] border-secondary shadow-box",
      
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-start items-center",
    flexEnd: "flex justify-end items-center",
  
    paddingX: "xs:px-10 ss:px-12 sm:px-16 px-24",
    paddingY: "xs:px-10 ss:px-12 sm:py-16 py-24 ",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;