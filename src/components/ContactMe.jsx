import React, { useState } from 'react';

function Contacts() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add your form validation logic here
    // and submit the form data to your backend
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <hr />
      <div id="contactLogo">
        <p>Contact No <i className="fas fa-phone-square"></i>:+9057063023</p>
        <p>Email Address <i className="fas fa-envelope-open-text"></i>:syedarimmsha21@gmail.com</p>
      </div>
      <fieldset>
        <legend>Contact Form</legend>
        <h2>Please leave your Message</h2>
        <form name='regForm' onSubmit={handleSubmit} onReset={handleReset}>
          <p><label htmlFor="firstName">First name:<sup style={{ color: 'rgb(0, 0, 0)' }}>*</sup> </label>
            <input type="text" name="firstName" tabIndex="1" size="27" value={formData.firstName} onChange={handleChange} /></p>
          <p><label htmlFor="lastName">Last name:<sup style={{ color: 'rgb(0, 0, 0)' }}>*</sup> </label>
            <input type="text" name="lastName" tabIndex="3" size="27" value={formData.lastName} onChange={handleChange} /></p>
          <p><label htmlFor="email">Email:<sup style={{ color: 'rgb(0, 0, 0)' }}>*</sup> </label>
            <input type="text" name="email" tabIndex="5" size="27" value={formData.email} onChange={handleChange} /></p>
          <p><label htmlFor="phone">Phone:<sup style={{ color: 'rgb(0, 0, 0)' }}>*</sup> </label>
            <input type="number" name="phone" tabIndex="7" size="27" value={formData.phone} onChange={handleChange} /></p>
          <p><label htmlFor="message">Message:<sup style={{ color: 'rgb(0, 0, 0)' }}>*</sup> </label>
            <textarea id="txtArea" name="message" rows="5" cols="25" value={formData.message} onChange={handleChange}></textarea>
            <br />
            <input className="button" type="submit" name="submit" value="Send" tabIndex="21" /> <br></br>
            <input className="button" type="reset" name="reset" value="Clear" tabIndex="21" />
          </p>
        </form>
        <br />
      </fieldset>
      <hr></hr>
      <div id="footerLogo">
        <a id="footerLogo" href='https://www.facebook.com/'>
        <i class="fab fa-facebook"></i></a>
        <a href='https://www.linkdin.com/'>
          <i class="fab fa-linkedin"></i>
        </a>

      </div>
    </div>
    
  );
}

export default Contacts;
