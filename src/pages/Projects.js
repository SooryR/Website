import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="project-container">
      <div className="project">
        <h2>TurboRacer</h2>
        <p className="project-date">Jul 2020 - Sep 2020</p>
        <ul>
          <li>Made a fully functional, fluent car movement with simulated gravity and kinematic collisions</li>
          <li>Created core game designs including multiple maps/levels, improvable vehicles, and different game modes</li>
          <li>Led the development of a prototype racing game using Unity and C#</li>
          <li>Designed multiple maps/levels with textured environments and attention-grabbing lighting designs</li>
          <li>Implemented various improvable vehicles and diverse game modes to make the game challenging and engaging</li>
        </ul>
      </div>
      <div className="project">
        <h2>BrewForYou website</h2>
        <p className="project-date">Jul 2020 - Jul 2020</p>
        <ul>
          <li>Optimized cross-browser and multi-platform compatibility, ensuring a seamless and user-friendly experience for all users, regardless of the device or platform they are using</li>
          <li>Transformed manual test cases into automated ones, streamlining the testing process and reducing the risk of human error</li>
          <li>Managed the entire website development lifecycle, from concept to launch, using the vue.js framework</li>
        </ul>
      </div>
      <div className="project">
        <h2>SVG Image Parser</h2>
        <p className="project-date">Sep 2019 - Jan 2020</p>
        <ul>
          <li>Developed an XML parser specifically for SVG documents, providing a new level of functionality and accessibility for users</li>
          <li>Implemented a front-end with a responsive design that allows users to easily create, import, and manipulate multiple SVG files in real-time. This includes the ability to add, delete, and edit individual SVG elements with updates reflected in real-time.</li>
          <li>Built a robust and fully functional backend, featuring a MySQL database and a codebase written in the efficient and versatile programming language C</li>
        </ul>
      </div>
      <div className="project">
        <h2>Green Protein Bites</h2>
        <p className="project-date">May 2019 - May 2019</p>
        <ul>
          <li>Conducted a comprehensive product needs analysis, incorporating both market research and current user feedback, to design a website prototype that provides an effective and user-friendly experience</li>
          <li>Used Selenium and cucumber to automate end-to-end testing, streamlining the testing process and reducing the risk of human error</li>
          <li>Designed and developed automated testing procedures based on functional requirements and design specification documents, ensuring that the final product met all project requirements and expectations</li>
          <li>Built the website using HTML and CSS, incorporating customer feedback throughout the development process to create a product that truly meets the needs and expectations of users</li>
        </ul>
      </div>
    </div>
  );
}


export {Projects};
