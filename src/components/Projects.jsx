import React from 'react';

export default function Pojects(){

  return (
    <div>
  <h1>Projects</h1>
  <hr />
  <div id="project1" className="project-container">
    <h2>Project 1:  Real Estate Website</h2>
    <img className="project-img" src="./src/assets/Projectspic/termproject.png" width="600" height="600" alt="Term Project" />
    <p className="project-paragraph">
      <br />
      This is my final term project for the course comp213 at Centennial College, Canada, where I have to make a Real Estate Website using HTML+CSS.
      In this project, I have to make 4 pages: Home, Active Listing, Contact Form, Site Map.
     
      
    <h3>Technical Aspects:</h3>  HTML, CSS, Responsive Design</p>

  </div>

  <div id="project2" className="project-container">
    <h2> Project 2: Image Slideshow with API Integration</h2>
    <img className="project-img" src="./src/assets/Projectspic/ProjectSlideShow.jpeg" width="500" height="300" alt="SlideShow" />
    <p className="project-paragraph">
      <br />
      This is my project in which I have to fetch images from an API and put them into a slideshow.
      User can add up to five images as favorites and remove them as well.
      The program will give a warning if they select more than five images.
    
    <h3>Technical Aspects: </h3> JavaScript/React, API Integration, State Management</p>

  </div>

  <div id="project3" className="project-container">
    <h2>Project 3:  Centennial College Evaluation Form</h2>
    <img className="project-img" src="./src/assets/Projectspic/project4.png" width="500" height="300" alt="Project4" />
    <p className="project-paragraph">
      <br />
      This project includes a Centennial College evaluation and instructor rating form. If the user enters different values in specific areas, they will get an error message to put numeric value/letters.
    <h3>Technical Aspects:</h3>  Form Validation, Error Handling, User Experience</p>

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


