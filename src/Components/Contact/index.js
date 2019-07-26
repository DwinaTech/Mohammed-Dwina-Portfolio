import React from 'react';
import './contact.scss';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h1 className="title">Contact Us</h1>
        <h2 className="subtitle">I will be happy to hear you.</h2>
        <ul className="contact-list">
          <li><strong>Phone:</strong> 00447481536915</li>
          <li><strong>Email:</strong> dwinatech@hotmail.com</li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
