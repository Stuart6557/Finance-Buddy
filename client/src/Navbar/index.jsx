import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <h1>Finance Buddy</h1>
        <nav className="navlinks">
            <a href="view-purchase">View Purchase</a>
            <a href="/create-purchase">Create Purchase</a>
        </nav>
    </div>
  );
};

export default Navbar;