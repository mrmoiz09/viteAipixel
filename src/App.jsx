import Navbar from "../src/Components/Navbar";
import HeroMain from "../src/Pages/Home/Hero/HeroMain";
import HAboutus from "./Pages/Home/AboutUSHome/HAboutus";
import SkillGraph from "./Pages/Home/ExertiseSkills/SkillGraph";
import LeadingProjects from "./Pages/Home/LeadingProjects/LeadingProjects";
import { ParallaxProvider } from "react-scroll-parallax";
import Status from "../src/Pages/Home/LeadingProjects/Status"
import ReviewLogo from "../src/Pages/Home/Stats/ReviewLogo"
import ContactUs from "./Pages/Home/ContactUs";
import Footer from "./Components/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <ParallaxProvider>
        <HeroMain />
      </ParallaxProvider>
      <HAboutus />
      <SkillGraph />
      <Status/>
      <LeadingProjects />
      <ReviewLogo/>
      <ContactUs/>
<Footer/>
    </>
  );
}
