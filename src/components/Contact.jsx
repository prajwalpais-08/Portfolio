import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Left */}

        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <p className="contact-title">
            CONTACT
          </p>

         <h2>
  Let's Work
  <br />
  Together
</h2>

          <p className="contact-text">
            Have a project in mind or want to collaborate?
            <br />
            I'd love to hear from you.
          </p>

          <div className="contact-item">
            <FaEnvelope />
            <a href="mailto:prajwalnoel2005@gmail.com">
              prajwalnoel2005@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <FaPhone />
            <a href="tel:+919482251882">
              +91 9482251882
            </a>
          </div>

          <div className="contact-social">
            <a
              href="https://github.com/PrajwalPais-08"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/prajwalpais"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>

        </motion.div>

        {/* Right */}

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="7"
            placeholder="Your Message"
          />

          <button type="submit">
            Send Message
          </button>

        </motion.form>

      </div>
    </section>
  );
}

export default Contact;