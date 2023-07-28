import React from 'react';
import './ContactInfo.css';

function ContactInfo() {
  return (
    <div className="contact-info-container">
      <h2>Contact Information</h2>
      <ul>
        <li><i className="fas fa-phone"></i> Phone: (647) · 656 · 1457</li>
        <li><i className="far fa-envelope"></i> Email: soory.ranga@gmail.com</li>
        <li><i className="fab fa-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/sooriyajeyan-ranganathan-1616371b1">linkedin.com/in/sooriyajeyan-ranganathan-1616371b1</a></li>
      </ul>
    </div>
  );
}

export {ContactInfo};
