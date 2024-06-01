import React from 'react';
import { Link } from 'react-router-dom';


export default function Layout() {
  return (
    <>
      <nav>
      <img src="./public/MyIcon.jpg" alt="Icon" />
      <Link to="/"><i className="fas fa-home"></i> Home</Link> | 
      <Link to="/about"><i className="fas fa-user"></i> About Me</Link> | 
        <Link to="/projects"><i className="fas fa-folder-open"></i> Projects</Link> | 
        <Link to="/services"><i className="fas fa-cogs"></i> Services</Link> | 
        <Link to="/contact"><i className="fas fa-envelope"></i> Contact Me</Link>
      </nav>
      <br/>
      <hr />
    </>
  );
}
