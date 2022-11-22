import React from 'react';
import Footer from '../props/Footer';
import NavBar from '../props/NavBar';
import '../../styles/contact.css';

function Contact() {
  return (
    <div>
      <NavBar />
      <div className="contact-info shadow p-3 mb-5 bg-white">
        <h1>Contact Infomation</h1>
        <p className="text-secondary">
          Contact us via mail @devjs.nurudeen@gmail.com
        </p>
        <p>
          Or click on any of the social media links below to reach me directly.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
