import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="header_wrapper">
        <nav className="header_nav">
          <p className="title">Glow</p>
          <li>
            <a href="#">Treatments</a>
          </li>
          <li>
            <a href="#">My Bookings</a>
          </li>
        </nav>
      </div>
    </header>
  );
}
