import React from 'react';

export default function AboutMe() {
  return (
    <>
      <h1>About Me</h1>
      <div >
        
        <hr />
        <br />
        <div className="about-container">
          <img className='project-img' src="./src/assets/Projectspic/avatar.jpeg" width="300" height="300" alt="Avatar" />
        </div><br></br>
        <h2>Rimsha Batool</h2>
            <div >
                <p className="mission-statement">
                    I'm Rimsha, a student of Software Engineering. I have a strong interest in developing software and advancing technology.
                
                    Outside of my academic pursuits, I enjoy traveling, watching biographies, and learning about different cultures.
                
                    My goal is to do a world tour and continue learning about computers, as I believe the future is all about technology.
                </p>
            </div>
            <br></br>
            <br></br>
            <button className="btn-download" type="button">
            <a id="aboutText" class="btn btn-xl btn-outline-dark" href="images/resume.pdf">
          <i class="fas fa-download me-2 "></i>
        Download My Resume
        </a>
    
</button>
      </div>
      <br></br>
     
      <div id="footerLogo">
        <a id="footerLogo" href='https://www.facebook.com/'>
        <i class="fab fa-facebook"></i></a>
        <a href='https://www.linkdin.com/'>
          <i class="fab fa-linkedin"></i>
        </a>

      </div>
    </>
    
  );
}
