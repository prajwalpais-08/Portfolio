import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        background: "#09090B",
        color: "white",
        padding: "100px 80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "70px",
        }}
      >
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p
            style={{
              color: "#8B5CF6",
              fontSize: "18px",
              marginBottom: "15px",
              letterSpacing: "2px",
            }}
          >
            CONTACT
          </p>

          <h1
            style={{
              fontSize: "52px",
              marginBottom: "25px",
            }}
          >
            Let's Work Together
          </h1>

          <p
            style={{
              color: "#A1A1AA",
              lineHeight: "32px",
              marginBottom: "45px",
            }}
          >
            Have a project in mind or want to collaborate?
            <br />
            I'd love to hear from you.
          </p>

          {/* Contact Info */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
            }}
          >
            {/* Email */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <FaEnvelope color="#8B5CF6" size={24} />

              <a
                href="mailto:prajwalnoel2005@gmail.com"
                style={linkStyle}
              >
                prajwalnoel2005@gmail.com
              </a>
            </div>

            {/* Phone */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <FaPhone color="#8B5CF6" size={24} />

              <a href="tel:+919482251882" style={linkStyle}>
                +91 9482251882
              </a>
            </div>

            {/* Social Icons */}

            <div
              style={{
                display: "flex",
                gap: "25px",
                marginTop: "25px",
              }}
            >
              <a
                href="https://github.com/PrajwalPais-08"
                target="_blank"
                rel="noopener noreferrer"
                style={iconStyle}
              >
                <FaGithub size={30} />
              </a>

              <a
                href="https://www.linkedin.com/in/prajwalpais"
                target="_blank"
                rel="noopener noreferrer"
                style={iconStyle}
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}

        <motion.form
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            background: "#111118",
            padding: "40px",
            borderRadius: "20px",
            border: "1px solid #27272A",
            boxShadow: "0 0 30px rgba(124,58,237,.15)",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Your Email"
            style={inputStyle}
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            style={{
              ...inputStyle,
              resize: "none",
            }}
          />

          <button style={buttonStyle}>
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "17px",
};

const iconStyle = {
  color: "white",
  transition: "0.3s",
};

const inputStyle = {
  padding: "15px",
  background: "#18181B",
  color: "white",
  border: "1px solid #333",
  borderRadius: "10px",
  outline: "none",
  fontSize: "16px",
};

const buttonStyle = {
  background: "#8B5CF6",
  color: "white",
  padding: "15px",
  border: "none",
  borderRadius: "10px",
  fontSize: "17px",
  cursor: "pointer",
};

export default Contact;