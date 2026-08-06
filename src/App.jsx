import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./components/About";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;