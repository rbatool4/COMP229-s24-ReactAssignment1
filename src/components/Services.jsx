import React from 'react';




export default function Services() {
  return (
    <>
      <div>
        <h1>Services</h1><hr></hr>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <h4>Web Developing</h4>
        <img className="services-img" src="./src/assets/Projectspic/webDevelop.jpeg" width="80" height="100" alt="Web Developing" />
        <h4>C#</h4>
        <img className="services-img" src="./src/assets/Projectspic/cSharp.png" width="200" height="100" alt="C-sharp" />
        <h4>Database</h4>
        <img className="services-img" src="./src/assets/Projectspic/database.jpeg" width="200" height="100" alt="Database" />
        <h4>Mobile Apps</h4>
        <img className="services-img" src="./src/assets/Projectspic/Mobile app.jpeg" width="200" height="100" alt="App" />
      </div>
      </div>

      <div className="tableCenter">
        <i id="languageLogo" className="devicon-csharp-plain-wordmark colored"></i>
        <i id="languageLogo" className="devicon-python-plain-wordmark colored"></i>
        <i id="languageLogo" className="devicon-javascript-plain colored"></i>
        <i id="languageLogo" className="devicon-html5-plain-wordmark colored"></i>
       <i id="languageLogo" className="devicon-css3-plain-wordmark colored"></i>
       <i id="languageLogo" className="devicon-mysql-plain-wordmark colored"></i>
        <i id="languageLogo" className="devicon-java-plain-wordmark colored"></i>
        <i id="languageLogo" className="devicon-nodejs-plain colored"></i>
      </div>
              
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