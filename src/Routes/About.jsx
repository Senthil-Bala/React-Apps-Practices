import React from 'react'
import {Link, NavLink} from "react-router-dom"
function About() {
  return (
    <div>
        <h1>About</h1>
        <NavLink to="/content">Go to Content page</NavLink>
    </div>
  )
}

export default About