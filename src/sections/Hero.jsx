import hero from "../assets/hero.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./Hero.css";

function Hero() {
  return (
   <section className="hero" id="home">
  
    
      {/* Left Side */}
      <motion.div
        className="hero-left"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p
          style={{
            color: "#8B5CF6",
            fontSize: "22px",
            marginBottom: "20px",
          }}
        >
          
        </p>

       <h1
  style={{
    fontSize: "78px",
    lineHeight: "1.1",
    fontWeight: "900",
    margin: 0,
  }}
>
    I'm{" "}
    <span style={{ color: "#8B5CF6" }}>
      Prajwal 
    </span>

    <br />
    Noel Pais

</h1>

        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000,
            
            2000,
            "Full Stack Developer",
            2000,
            "AI Enthusiast",
            2000,
          ]}
          wrapper="h2"
          repeat={Infinity}
          style={{
            color: "#22D3EE",
            fontSize: "38px",
            marginTop: "20px",
          }}
        />

        <p
          style={{
            color: "#999",
            maxWidth: "500px",
            lineHeight: "32px",
            marginTop: "30px",
          }}
        >
          I build modern websites, responsive UI, and AI-powered
          applications using React, Node.js and modern technologies.
        </p>

        <div className="hero-buttons">
        
          <button
            style={{
              padding: "15px 35px",
              background: "#7C3AED",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Contact Me
          </button>
          <a
  href="/Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    padding: "15px 35px",
    border: "2px solid #7C3AED",
    background: "transparent",
    color: "white",
    borderRadius: "10px",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  View Resume

</a>
          <div
  style={{
    display: "flex",
        gap: "22px",
        marginTop: "8px",
         alignItems: "center",
  }}
>
  <a
    href="https://github.com/PrajwalPais-08"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub
      size={28}
      color="white"
      style={{ cursor: "pointer" }}
    />
  </a>

  <a
    href="https://www.linkedin.com/in/prajwalpais/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin
      size={28}
      color="white"
      style={{ cursor: "pointer" }}
    />
  </a>

  <a href="mailto:prajwalnoel2005@gmail.com">
    <FaEnvelope
      size={28}
      color="white"
      style={{ cursor: "pointer" }}
    />
  </a>

  {/* <a
    href="https://leetcode.com/YOUR_USERNAME"
    target="_blank"
    rel="noopener noreferrer"
  >
    <SiLeetcode
      size={28}
      color="white"
      style={{ cursor: "pointer" }}
    />
  </a> */}
</div>
         {/* <a
  href="/Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    padding: "15px 35px",
    border: "2px solid #7C3AED",
    background: "transparent",
    color: "white",
    borderRadius: "10px",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  View Resume

</a> */}
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="hero-right"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        
      >
        <img
          src={hero}
          alt="Hero"
          className="hero-image"
      />
      </motion.div>
      
    </section>
  );
}

export default Hero;