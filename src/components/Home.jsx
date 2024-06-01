
import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div className='Home'>
       
     
      <main>
        <h1>Welcome to My Portfolio</h1></main>
        <hr></hr>
        <div>
          <img className='project-img' src="./src/assets/Projectspic/avatar.jpeg" width="300" height="300" alt="Avatar" />
        </div>
        <div id="mission">
       
         <h2> Mission Statement: </h2>
          <p className="mission-statement">"To excel academically, embrace challenges, and contribute to my community.
           I strive for continuous learning and growth, preparing for a successful future."
        </p>
      </div>
           <div id='button-i'>
        <Link to="/about" className='about-button'>
          About Me
        </Link>

      </div>
      
      <div id="footerLogo">
        <a id="footerLogo" href='https://www.facebook.com/'>
        <i class="fab fa-facebook"></i></a>
        <a href='https://www.linkdin.com/'>
          <i class="fab fa-linkedin"></i>
        </a>

      </div>
    
        
      
    </div>
  );
};

export default Home;

