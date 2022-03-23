import React from "react";
import logoImg from '../../assets/logo.svg'
import arrowLight from '../../assets/icon-arrow-light.svg'

import './styles.scss'

export function Nav() {
  return (
    <>
      <div className="nav-box">
        <div className="left-box">
          <img src={logoImg} alt="Logo icon" className="logo" />
          <div className="links-nav-box">
            <div className="link-nav">
              <p>Product</p>
              <img src={arrowLight} alt="Arrow icon" />
            </div>
            <div className="link-nav">
              <p>Company</p>
              <img src={arrowLight} alt="Arrow icon" />
            </div>
            <div className="link-nav">
              <p>Connect</p>
              <img src={arrowLight} alt="Arrow icon" />
            </div>
          </div>
        </div>
        <div className="right-box">
          <button type="button" className="login-btn">Login</button>
          <button type="button" className="sign-btn">Sign Up</button>
        </div>
      </div>
    </>
  )
}