import React from "react";
import { Link, Outlet,Route,Routes } from "react-router-dom";

const Dashboard=()=> {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* Navigation */}
      <nav>
        <Link to="home">Home</Link> |{" "}
        <Link to="profile">Profile</Link> |{" "}
        <Link to="setting">Setting</Link>
      </nav>

      <hr />

      {/* Nested pages render here */}
      <Outlet />
    </div>
  );
}

export default Dashboard;