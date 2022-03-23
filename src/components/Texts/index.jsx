import React from "react";

import './styles.scss'

export function Texts({ title, text }) {
  return (    
      
    <div className="text">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
    
  )
}