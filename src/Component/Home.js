import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>
              Welcome to <span style={{ color: "#6c63ff" }}>Nishtha yadav</span>
            </h2>
            <p className="homep">
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
            <div className="">
              <button className="btn1">Projects</button>
              <button className="btn2">youtube</button>
            </div>
          </div>
          <div className="right_div">
            <img
              src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=2048x2048&w=is&k=20&c=6omJSQtYXI93gG8zTc2aCJOCJrqBf-Bk8b_W-IXvy9s="
              alt="not found"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
