import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="header_wrapper">
        <nav className="header_nav">
          <p className="title">Glow</p>
          <ul>
            <li>
              <a href="#">
                <span className="header_nav-link">Treatments</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="header_nav-link">My Bookings</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
