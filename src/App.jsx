import Navbar from "../src/Components/Navbar"
import HeroMain from "../src/Pages/Home/Hero/HeroMain"
import HeroTestimonial from "../src/Pages/Home/Hero/HeroTestimonial"
import HAboutus from "./Pages/Home/AboutUSHome/HAboutus"
import SkillGraph from "./Pages/Home/ExertiseSkills/SkillGraph"
import LeadingProjects from "./Pages/Home/LeadingProjects/LeadingProjects"
export default function App() {
  return (
  <>
<Navbar/>
  <HeroMain/>  
<HAboutus/>
<SkillGraph/>
<LeadingProjects/>
  </>
  )
}