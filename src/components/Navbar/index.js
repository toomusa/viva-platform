import React from "react"
import "./style.css"

export default function Navbar() {
  return(
    <div className="navbar">
      <a href="/">
        {window.location.pathname === "/"
          ? <span><strong>Home</strong></span>
          : <span>Home</span>}
      </a>
      <a href="/journey">
        {window.location.pathname === "/journey"
          ? <span><strong>Journey</strong></span>
          : <span>Journey</span>}
      </a>
      <a href="/resources">
        {window.location.pathname === "/resources"
          ? <span><strong>Resources</strong></span>
          : <span>Resources</span>}
      </a>
      <a href="/partners">
        {window.location.pathname === "/partners"
          ? <span><strong>Partners</strong></span>
          : <span>Partners</span>}
      </a>
    </div>
  )
}