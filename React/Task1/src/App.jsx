import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  const appStyle = {
    fontFamily: "Arial, sans-serif",
    margin: 0,
    padding: 0
  };

  const mainStyle = {
    padding: "20px",
    textAlign: "center"
  };

  const boxStyle = {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px auto",
    width: "60%",
    borderRadius: "8px"
  };

  return (
    <div style={appStyle}>
      <Navbar />

      {/* MAIN SECTION */}
      <main style={mainStyle}>
        <h1>Welcome to My React App</h1>
        <div style={boxStyle}>
          <h2>Static Data</h2>
          <p>This is some static content displayed in the Main section.</p>
          <p>You can modify this text as needed.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;  

