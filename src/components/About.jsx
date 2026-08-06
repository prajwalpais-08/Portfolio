import { motion } from "framer-motion";
import hero from "../assets/hero.png";

function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        background: "#0F0F13",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="src\assets\hero.png"
            alt="About"
            style={{
              width: "280px",
              borderRadius: "20px",
              border: "4px solid #7C3AED",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            style={{
              fontSize: "50px",
              marginBottom: "25px",
            }}
          >
            About Me
          </h2>

          <p
            style={{
              color: "#aaa",
              lineHeight: "35px",
              fontSize: "18px",
            }}
          >
           I believe great software is where creativity meets engineering.
            My focus is on building elegant user interfaces, scalable full-stack applications,
             and building AI-driven solutions that deliver real value.
              Every project is an opportunity to learn, innovate, and create something people genuinely enjoy using.

           
          </p>

          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "40px",
            }}
          >
            <div>
              <h1 style={{ color: "#7C3AED" }}>12+</h1>
              <p>Projects</p>
            </div>

            {/* <div>
              <h1 style={{ color: "#7C3AED" }}>2+</h1>
              <p>Years Learning</p>
            </div> */}

            <div>
              <h1 style={{ color: "#7C3AED" }}>10+</h1>
              <p>Technologies</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;