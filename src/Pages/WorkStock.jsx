import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Projects from "./Work/Projects";
import Worka from "./Work/Worka";
import Cursor from "../Components/Cursor"

export default function WorkStock() {
  return (
    <>
<Cursor/>
    <Navbar/>
      <Worka />
      <Projects />
      <Footer/>
    </>
  );
}
