import React from "react";
import logoImg from '../../assets/logo.svg'

import './styles.scss'

export function Footer() {
  return (
    <>
    <div className="footer-box">
      <img src={logoImg} alt="Logo" />
      <div className="links-box">
        <div className="links">
          <p>Product</p>
          <a>Overview</a>
          <a>Pricing</a>
          <a>Marketplace</a>
          <a>Features</a>
          <a>Integrations</a>
        </div>
        <div className="links">
        <p>Company</p>
          <a>About</a>
          <a>Team</a>
          <a>Blog</a>
          <a>Careers</a>
        </div>
        <div className="links">
        <p>Connect</p>
          <a>Contact</a>
          <a>Newsletter</a>
          <a>LinkedIn</a>
        </div>
      </div>
    </div>
    </>
  )
}