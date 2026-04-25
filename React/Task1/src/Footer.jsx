import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    bottom: 0,
    width: "100%"
  };

  return (
    <footer style={footerStyle}>
      <p>© 2026 My React App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;