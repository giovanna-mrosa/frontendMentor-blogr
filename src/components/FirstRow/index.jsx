import React from "react";
import { Nav } from "../Nav";
import { NavMob } from '../NavMob'

import './styles.scss'


export function FirstRow() {
  return (
    <>
      <div className="top-box">
        <div className="content-box-fr">
          {window.screen.width > 768 ? (
            <Nav />
            ) : (
              <NavMob />
            )
          }
          <div className="content">
            <h1>A modern publishing platform</h1>
            <p>Grow your audience and build your online brand</p>
            <div className="btn-box">
              <button className="btn-start" type="button">Start for Free</button>
              <button className="btn-learn" type="button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}