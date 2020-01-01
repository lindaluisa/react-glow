import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer_wrapper">
        <nav className="footer_nav">
          <p>
            <i class="fa fa-copyright" /> All rights reserved. Happy New Year
            2020.
          </p>
          <li>
            <a href="#">Follow us on social media! </a>
            <a href="#">
              <i class="fa fa-instagram" />
            </a>
            <a href="#">
              <i class="fa fa-facebook-f" />
            </a>
          </li>
        </nav>
      </div>
    </footer>
  );
}
