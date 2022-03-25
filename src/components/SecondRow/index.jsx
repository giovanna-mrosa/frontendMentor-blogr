import React from "react";
import landingPageImg from '../../assets/illustration-editor-desktop.svg'
import landingPageImgMob from '../../assets/illustration-editor-mobile.svg'
import phoneImg from '../../assets/illustration-phones.svg'
import noteImg from '../../assets/illustration-laptop-desktop.svg'
import noteImgMob from '../../assets/illustration-laptop-mobile.svg'

import './styles.scss'
import { Texts } from "../Texts";

export function SecondRow() {
  const widthScreen = window.screen.width;
  return (
    <>
    <div className="second-row-box">
      <div className="card1">
        <h1>Designed for the future</h1>
        <div className="content-cad1">
        <div className="texts-box margin1">
          <Texts 
            title="Introducing an extensible editor"
            text="Blogr features an exceedingly intuitive which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embends such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog."          
          />
          <Texts
            title="Robust content management"
            text="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control."
          />
        </div>
          <img src={widthScreen > 768 ? landingPageImg : landingPageImgMob} alt="Landing Page icon" className="landing-img" />
        </div>
      </div>
      <div className="card2">
        <div className="card2-content">
          <img src={phoneImg} alt="Phone" className="phone" />
          <div className="text-card2">
            <h1>State of the Art Infrastructure</h1>
            <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your ste will load instantly, no matter where your readers are, keeping your site competitive.</p>
          </div>
        </div>     
      </div>
      <div className="card1">
        <div className="content-cad1">
          <img 
            src={widthScreen > 768 ? noteImg : noteImgMob} 
            alt="Note icon" 
            className="note-img" 
          />
          <div className="texts-box margin2">
            <Texts 
              title="Free, open, simple" 
              text="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
            />
            <Texts
              title="Powerful tooling"
              text="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites." 
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}