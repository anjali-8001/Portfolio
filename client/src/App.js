import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Parallax from "./Components/Parallax";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section id="Home">
        <Banner />
      </section>
      <Parallax />
      <section id="Skills">
        <Skills />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
