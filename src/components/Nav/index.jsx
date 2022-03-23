import React, { useState } from "react";
import logoImg from '../../assets/logo.svg'
import arrowLight from '../../assets/icon-arrow-light.svg'

import './styles.scss'

export function Nav() {
  const [toggle3, setToggle3] = useState(false)
  const [toggle2, setToggle2] = useState(false)
  const [toggle1, setToggle1] = useState(false)

  function handleToggle3() {
    setToggle3(!toggle3)
  }

  function handleToggle2() {
    setToggle2(!toggle2)
  }

  function handleToggle1() {
    setToggle1(!toggle1)
  }

  return (
    <>
      <div className="nav-box">
        <div className="left-box">
          <img src={logoImg} alt="Logo icon" className="logo" />
          <div className="links-nav-box">
          <div className="link-nav" onClick={handleToggle1}>
              <p>Product</p>
              <img 
                src={arrowLight} 
                alt="Arrow icon" 
                className={toggle1 === true 
                  ? "arrow invert-arrow" 
                  : "arrow"
                }
              />
              <div 
                className={toggle1 === true 
                  ? "dropdown dropdown1" 
                  : "dropdown dropdown1 is-hidden"
                }
              >
                <a>Overview</a>
                <a>Pricing</a>
                <a>Marketplace</a>
                <a>Features</a>
                <a>Integrations</a>
              </div>
            </div>
            <div className="link-nav" onClick={handleToggle2}>
              <p>Company</p>
              <img 
                src={arrowLight} 
                alt="Arrow icon" 
                className={toggle2 === true 
                  ? "arrow invert-arrow" 
                  : "arrow"
                }
              />
              <div 
                className={toggle2 === true 
                  ? "dropdown dropdown2" 
                  : "dropdown dropdown2 is-hidden"
                }
              >
                <a>About</a>
                <a>Team</a>
                <a>Blog</a>
                <a>Careers</a>
              </div>
            </div>
            <div className="link-nav" onClick={handleToggle3}>
              <p>Connect</p>
              <img 
                src={arrowLight} 
                alt="Arrow icon" 
                className={toggle3 === true 
                  ? "arrow invert-arrow" 
                  : "arrow"
                }
              />
              <div 
                className={toggle3 === true 
                  ? "dropdown dropdown3" 
                  : "dropdown dropdown3 is-hidden"
                }
              >
                <a>Contact</a>
                <a>Newsletter</a>
                <a>LinkedIn</a>
              </div>
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