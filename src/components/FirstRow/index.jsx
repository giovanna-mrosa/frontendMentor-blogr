import React from "react";
import { Nav } from "../Nav";
import bgImgDesktop from "../../assets/bg-pattern-intro-desktop.svg"

import './styles.scss'


export function FirstRow() {
  return (
    <>
      <div className="top-box">
        <Nav />
        <div className="content">
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <div className="btn-box">
            <button className="btn-start" type="button">Start for Free</button>
            <button className="btn-learn" type="button">Learn More</button>
          </div>
        </div>
        <img src={bgImgDesktop} alt="Background" className="bg-desktop-intro"/>
      </div>
    </>
  )
}