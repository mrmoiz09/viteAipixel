import { useEffect, useState } from "react";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HeroMain from "../Pages/Home/Hero/HeroMain";
import HAboutus from "./Home/AboutUSHome/HAboutus";
import ContactUs from "./Home/ContactUs";
import { Element } from "react-scroll";
import SkillGraph from "./Home/ExertiseSkills/SkillGraph";
import LeadingProjects from "./Home/LeadingProjects/LeadingProjects";
// import Status from "./Home/LeadingProjects/Status";
import ReviewLogo from "./Home/Stats/ReviewLogo";
import Cursor from "../Components/Cursor";
import Footerb from "../Components/Footerb";

export default function HomeStock() {
  return (
    <>
      {/* <Cursor /> */}
      <Navbar />
      <HeroMain />
      <HAboutus />
      <SkillGraph />
      {/* <Status /> */}
      <LeadingProjects />
      {/* <ReviewLogo /> */}

      <Element name="contact">
        <ContactUs />
      </Element>
      <Footerb />
    </>
  );
}
