/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logoImg from '../../assets/logo.svg'
import burgerImg from '../../assets/icon-hamburger.svg'
import closeImg from '../../assets/icon-close.svg'
import arrowPink from '../../assets/icon-arrow-dark.svg'

import './styles.scss'

export function NavMob() {
  const [toggle, setToggle] = useState(false)
  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(false)
  const [toggle3, setToggle3] = useState(false)

  function handleToggle() {
    setToggle(!toggle)
  }

  function handleToggle1() {
    setToggle1(!toggle1)
  }

  function handleToggle2() {
    setToggle2(!toggle2)
  }

  function handleToggle3() {
    setToggle3(!toggle3)
  }

  return (
      <div className="header-box">
        <img src={logoImg} alt="Logo" className="logo-mob"/>
        <img 
          src={toggle === true 
              ? closeImg 
              : burgerImg
          } 
          alt="Hamburger Menu Icon" 
          className="burger" 
          onClick={handleToggle}
        />
        <div className={toggle === true ? "menu-box" : "hidden-menu-box menu-box"}>

        <a className="first-link" onClick={handleToggle1}>
          Product 
          <img 
            src={arrowPink} 
            alt="Pink arrow"
            className={toggle1 === true 
              ? "arrow invert-arrow" 
              : "arrow"
            } 
          />
        </a>
        <div className={toggle1 === true ? 'container-options' : 'hidden-container-options container-options'}>
          <a>Overview</a>
          <a>Pricing</a>
          <a>Marketplace</a>
          <a>Features</a>
          <a>Integrations</a>
        </div>

        <a className="first-link" onClick={handleToggle2}>
          Company
          <img 
            src={arrowPink} 
            alt="Pink arrow"
            className={toggle2 === true 
              ? "arrow invert-arrow" 
              : "arrow"
            } 
          />
        </a>
        <div className={toggle2 === true 
          ? 'container-options size2' 
          : 'hidden-container-options container-options'}
        >
          <a>About</a>
          <a>Team</a>
          <a>Blog</a>
          <a>Careers</a>
        </div>

        <a className="first-link" onClick={handleToggle3}>
          Connect
          <img 
            src={arrowPink} 
            alt="Pink arrow"
            className={toggle3 === true 
              ? "arrow invert-arrow" 
              : "arrow"
            } 
          />
        </a>
        <div className={toggle3 === true 
          ? 'container-options size3' 
          : 'hidden-container-options container-options'}
        >
          <a>Contact</a>
          <a>Newsletter</a>
          <a>LinkedIn</a>
        </div>        
        
        <div className="line"></div>

        <button type="button" className="btn-mob-login">Login</button>
        <button type="button" className="btn-mob-signup">Sign Up</button>
      </div>
    </div>
  )
}