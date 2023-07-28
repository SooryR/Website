import React from "react";
import "./Work.css";

function WorkPage() {
  return (
    <div className="work-page">
      <div className="work-container">
        <h2>RFRL</h2>
        <p className="job-title">Full Stack Developer</p>
        <p className="location-date">Toronto, Ontario, Canada | Jun 2021 - May 2022 · 1 year</p>
        <ul>
          <li>Developed screen-sharing feature using Vue.js and y.js, reducing costs and minimizing latency to deliver a seamless and responsive user experience.</li>
          <li>Suggested the use of the sqlx golang ORM to simplify the encoding and decoding of data between Golang structs and Postgres databases, improving the efficiency and maintainability of the codebase.</li>
          <li>Worked on code compiling service for the pair programming feature, enabling real-time collaboration and teamwork.</li>
          <li>Added REST endpoints to sign in and sign up for RFRL platform.</li>
          <li>Created tables in Postgres to outline tutors and mentees on the platform using golang migrate.</li>
          <li>Developed screen-sharing feature using Vue.js and y.js, reducing costs and minimizing latency to deliver a seamless and responsive user experience.</li>
          <li>Suggested the use of the sqlx golang ORM to simplify the encoding and decoding of data between Golang structs and Postgres databases, improving the efficiency and maintainability of the codebase.</li>
          <li>Worked on code compiling service for the pair programming feature, enabling real-time collaboration and teamwork.</li>
          <li>Added REST endpoints to sign in and sign up for RFRL platform.</li>
          <li>Created tables in Postgres to outline tutors and mentees on the platform using golang migrate.</li>
        </ul>
        <p>Skills: Go (Programming Language) · Back-End Web Development · WebSocket · Realtime Programming · Webrtc</p>
      </div>
      <div className="work-container">
        <h2>RFRL</h2>
        <p className="job-title">SDET (Internship)</p>
        <p className="location-date">Toronto, Ontario, Canada | Jan 2021 - Jun 2021 · 6 months</p>
        <ul>
          <li>Conducted manual stress, stability, and reliability testing to identify and resolve software issues, resulting in improved functionality and usability for end-users.</li>
          <li>Provided valuable feedback to developers regarding front-end features, resulting in the elimination of errors and a more intuitive and user-friendly experience on the website.</li>
          <li>Developed a comprehensive Test Plan and Test Strategy, providing a roadmap for testing and ensuring that all aspects of the software were thoroughly tested.</li>
          <li>Implemented automated integration testing using jest, generating detailed and organized reports that made it easy to track progress and identify areas for improvement.</li>
          <li>Conducted automated Smoke testing to maintain the stability and viability of the current build, preventing regressions and ensuring the software remained robust and reliable.</li>
          <li>Contributed to the front-end development of the website, adding new features such as video chatting, screen-sharing, and improving the overall layout of the site.</li>
        </ul>
        <p>Skills: Vue.js · Test Driven Development · Webrtc · Web Development · State Management · Integration Testing · JavaScript</p>
      </div>
    </div>
  );
}


export {WorkPage};
