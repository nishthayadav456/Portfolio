import React from "react";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="container about_container">
        <div className=" container main_container">
          <div className="left_container">
            <h2>Meet Nishtha Yadav</h2>
            <p className="aboutp">
              As a MERN full stack developer,I completed a web developement
              course from Prepbytes,which has given me the latest skills and
              knowledege in web developement Industry. I have experience in
              developing dynamic and scalable web applications using MongoDB,
              Express, ReactJS, and NodeJS. With a background in both front-end
              and back-end development, I am able to create intuitive and
              seamless user experiences while also ensuring efficient
              server-side functionality. I am always eager to learn new
              technologies and techniques to enhance my skills as a developer.
              Take a look at my work or get in touch with me!
            </p>
          </div>
          <div className="right_container">
            <img src="mypic.png" alt="not found" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
