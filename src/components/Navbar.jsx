function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "rgba(9,9,11,0.9)",
        backdropFilter: "blur(12px)",
        padding: "18px 80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        borderBottom: "1px solid #27272A",
      }}
    >
      <h2
        style={{
          color: "#8B5CF6",
          margin: 0,
        }}
      >
       
      </h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
        }}
      >
        <a href="#home" style={linkStyle}>Home</a>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#skills" style={linkStyle}>Skills</a>
        <a href="#projects" style={linkStyle}>Projects</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "22px",
};

export default Navbar;