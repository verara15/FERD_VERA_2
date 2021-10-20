import './App.css';
import { useEffect } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "glightbox/dist/css/glightbox.min.css";
// import "swiper/swiper-bundle.min.css";

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skill from "./components/Skill"
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

// import "swiper/swiper-bundle.min.js";
// import "glightbox/dist/js/glightbox.min.js";
import "bootstrap/dist/js/bootstrap.bundle";
// import "typed.js/lib/typed.min.js";
// import "waypoints/lib/noframework.waypoints";  


// import "./assets/js/main";


function App() {
  useEffect(() => {
    document.title = "Vera";
  }, []);
  return (
  <>
  <Navbar />
  <main id="main">
    <Home id="section1"/>
    <About id="section2"/>
    <Skill id="section3"/>
    <Resume id="section4"/>
    <Portfolio id="section5"/>
    <Services id="section6"/>
    <Contact />  
  </main>
   <Footer/>
   
    </>
  );
}

export default App;
