import React from 'react';
import Footer from '../props/Footer';
import NavBar from '../props/NavBar';

function Contact() {
  return (
    <div>
      <NavBar />
      <div className="contact-info">
        <h1>Contact Infomation</h1>
        <p>Contact us via mail @devjs.nurudeen@gmail.com</p>
        <p>
          Or click on any of the social media links below to reach me directly.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
