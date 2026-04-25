import React from "react";

function Navbar() {
  const navStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    display: "flex",
    justifyContent: "space-around"
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold"
  };

  return (
    <nav style={navStyle}>
      <a href="#" style={linkStyle}>Home</a>
      <a href="#" style={linkStyle}>About</a>
      <a href="#" style={linkStyle}>Services</a>
      <a href="#" style={linkStyle}>Contact</a>
    </nav>
  );
}

export default Navbar;