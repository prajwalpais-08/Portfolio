import { motion } from "framer-motion";

const skills = [
  { name: "React", top: "8%", left: "40%" },
  { name: "Docker", top: "28%", left: "12%" },
  { name: "Node.js", top: "28%", right: "12%" },
  { name: "Git", top: "52%", left: "4%" },
  { name: "MongoDB", top: "52%", right: "4%" },
  { name: "Express", bottom: "20%", left: "18%" },
  { name: "Python", bottom: "20%", right: "18%" },
  { name: "AI", bottom: "5%", left: "40%" },
];

function Skills() {
  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        background: "#030014", // Deepest space black/blue
        backgroundImage:
          "radial-gradient(circle at 50% 50%, #100b2e 0%, #030014 100%)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "900px",
          height: "700px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* --- Inner Orbit Ring & Comet --- */}
        <div style={{ position: "absolute", width: "450px", height: "450px" }}>
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              border: "1px dashed rgba(139, 92, 246, 0.2)",
              borderRadius: "50%",
              position: "absolute",
            }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ width: "100%", height: "100%", position: "absolute" }}
          >
            {/* The Comet */}
            <div
              style={{
                width: "12px",
                height: "12px",
                background: "#06B6D4",
                borderRadius: "50%",
                boxShadow: "0 0 20px 4px #06B6D4",
                position: "absolute",
                top: "-6px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </motion.div>
        </div>

        {/* --- Outer Orbit Ring & Comet --- */}
        <div style={{ position: "absolute", width: "700px", height: "700px" }}>
          <motion.div
            style={{
              width: "100%",
              height: "100%",
              border: "1px dashed rgba(6, 182, 212, 0.15)",
              borderRadius: "50%",
              position: "absolute",
            }}
          />
          <motion.div
            animate={{ rotate: -360 }} // Rotates opposite direction
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{ width: "100%", height: "100%", position: "absolute" }}
          >
            {/* The Comet */}
            <div
              style={{
                width: "10px",
                height: "10px",
                background: "#8B5CF6",
                borderRadius: "50%",
                boxShadow: "0 0 20px 4px #8B5CF6",
                position: "absolute",
                bottom: "-5px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
          </motion.div>
        </div>

        {/* --- Central Core Engine --- */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 50px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.2)",
              "0 0 100px rgba(139, 92, 246, 0.6), inset 0 0 50px rgba(6, 182, 212, 0.5)",
              "0 0 50px rgba(139, 92, 246, 0.3), inset 0 0 20px rgba(6, 182, 212, 0.2)",
            ],
            scale: [1, 1.03, 1],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            background: "linear-gradient(145deg, #1a103c 0%, #080514 100%)",
            border: "2px solid rgba(139, 92, 246, 0.4)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            zIndex: 10,
          }}
        >
          <span
            style={{
              fontSize: "36px",
              fontWeight: "900",
              letterSpacing: "2px",
              background: "linear-gradient(to right, #06B6D4, #8B5CF6, #EC4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textTransform: "uppercase",
              filter: "drop-shadow(0px 0px 10px rgba(139,92,246,0.4))",
            }}
          >
            Tech
            <br />
            Stack
          </span>
        </motion.div>

        {/* --- Holographic Skill Nodes --- */}
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -15, 0],
              x: [0, index % 2 === 0 ? 8 : -8, 0],
              rotate: [0, index % 2 === 0 ? 2 : -2, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: index * 0.15 },
              scale: { type: "spring", damping: 14, stiffness: 100, delay: index * 0.15 },
              y: { duration: 4 + index * 0.3, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 5 + index * 0.3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 6 + index * 0.3, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{
              scale: 1.15,
              background: "rgba(139, 92, 246, 0.2)",
              borderColor: "#06B6D4",
              boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            drag
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            dragElastic={0.3}
            style={{
              position: "absolute",
              padding: "14px 28px",
              borderRadius: "50px",
              background: "rgba(10, 7, 26, 0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderTop: "1px solid rgba(255, 255, 255, 0.3)", // Sharp 3D lighting edge
              borderBottom: "1px solid rgba(0, 0, 0, 0.5)",
              color: "#E2E8F0",
              fontSize: "16px",
              fontWeight: "600",
              letterSpacing: "1px",
              cursor: "grab",
              zIndex: 20,
              boxShadow: "0 10px 30px -10px rgba(0,0,0,0.8)",
              ...skill,
            }}
          >
            {skill.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;