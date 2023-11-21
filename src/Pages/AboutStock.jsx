import React, { useEffect } from "react";
import { Element } from "react-scroll";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import AboutA from "./About/Static/AboutA";
import Cursor from "../Components/Cursor";
// import AboutB from "./About/Static/OurVision";
import Aboutstats from "./About/Static/Aboutstats";
import OurVision from "./About/Static/OurVision";
import Footerb from "../Components/Footerb";

export default function AboutStock() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <>
      {/* <Cursor /> */}
      <Navbar />

      <AboutA />
      <OurVision />
      <h2 className="flex flex-row flex-nowrap items-center my-6">
        <span className="flex-grow block border-t border-black" />
        <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white"></span>
        <span className="flex-grow block border-t border-black" />
      </h2>

   
      {/* <Aboutstats /> */}
      <Footerb />
    </>
  );
}
