import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 style={{ color: "#8B5CF6", margin: 0 }}></h2>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;