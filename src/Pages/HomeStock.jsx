import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import HeroMain from "../Pages/Home/Hero/HeroMain";
import HAboutus from "./Home/AboutUSHome/HAboutus";
import ContactUs from "./Home/ContactUs";
import SkillGraph from "./Home/ExertiseSkills/SkillGraph";
import LeadingProjects from "./Home/LeadingProjects/LeadingProjects";
import Status from "./Home/LeadingProjects/Status";
import ReviewLogo from "./Home/Stats/ReviewLogo";

export default function HomeStock() {
  return (
    <>
    <Navbar/>

      <HeroMain />
      <HAboutus />
      <SkillGraph />
      <Status />
      <LeadingProjects />
      <ReviewLogo />
      <ContactUs />
      <Footer/>
    </>
  );
}
