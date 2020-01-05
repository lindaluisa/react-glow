import React from "react";
import "./homepage.css";

export default function Homepage() {
  return (
    <div className="homepage_wrapper">
      <div className="homepage_mainbanner-wrapper">
        <div className="homepage_mainbanner-bg" />
        <div className="homepage_mainbanner-1">
          <div className="homepage_mainbanner-overlay">
            <div className="homepage_banner-headline headline">
              <h2>Welcome</h2>
            </div>
            <p className="homepage_banner-text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
        </div>
      </div>
      <div className="homepage_secondarybanner-wrapper">
        <div className="homepage_secondarybanner-1">
          <p className="homepage_secondarybanner-1-text">New In</p>
        </div>
        <div className="homepage_secondarybanner-bg" />
        <div className="homepage_secondarybanner-overlay">
          <div className="homepage_secondarybanner-headline headline">
            <h2>The Honest Company</h2>
          </div>
          <p className="homepage_banner-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
      </div>
      <div className="homepage_tercerybanner-wrapper">
        <div className="homepage_tercerybanner-bg" />
        <div className="homepage_tercerybanner-glitter" />
        <div className="homepage_tercerybanner-1" />
      </div>
    </div>
  );
}
