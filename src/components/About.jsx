import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <motion.div
          className="about-left"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >
          <span className="about-tag">ABOUT ME</span>

          <h2>
            Building modern
            <br />
            digital experiences.
          </h2>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >
          <p>
            I believe great software is where creativity meets engineering.
            My focus is on building elegant user interfaces, scalable
            full-stack applications and AI-driven solutions that solve
            real-world problems.

            <br /><br />

            Every project is an opportunity to learn, innovate and build
            something users genuinely enjoy.
          </p>

          <div className="about-stats">

            <div>
              <h1>12+</h1>
              <span>Projects</span>
            </div>

            <div>
              <h1>10+</h1>
              <span>Technologies</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;