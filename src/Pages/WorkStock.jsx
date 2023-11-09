//import React, { useEffect } from 'react';


import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Projects from "./Work/Projects";
import Worka from "./Work/Worka";
import Cursor from "../Components/Cursor";
import { useEffect } from "react";

export default function WorkStock() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <Worka />
      <Projects />
      <Footer />
    </>
  );
}
