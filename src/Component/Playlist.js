import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Playlist.css";
import projectData from "./data";
import { NavLink } from "react-router-dom";
const Playlist = () => {
  const [spin, setSpin] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpin(false);
    }, 1500);
  },[]);
  return (
    <>
    {
      spin?
      <div className="spinner">
        <Spinner animation="border" variant="danger" />
        Loading.....
      </div>:
       <div className="container">
       <h2 className="text-center mt-2">Projects</h2>
       <div className="card_div">
         <div className="card_inner_div">
           <div className="row">
             {projectData.map((item, index) => {
               return (
                 <Card
                   style={{ width: "23rem", height: "20rem" }}
                   className="mt-4 mb-4"
                 >
                   <Card.Img
                     variant="top"
                     style={{
                       width: "22rem",
                       height: "12rem",
                       marginleft: -13,
                     }}
                     src={item.image}
                   />
                   <Card.Body>
                     <Card.Title style={{ textAlign: "center" }}>
                       {item.projectname}
                     </Card.Title>
                     <div className="livedemo">
                       <Button variant="primary">
                         <NavLink
                           to={item.demo}
                           className="text-decoration-none text-light"
                         >
                           Live Demo
                         </NavLink>
                       </Button>
                     </div>
                   </Card.Body>
                 </Card>
               );
             })}
           </div>
         </div>
       </div>
     </div>
    }
     
    </>
  );
};

export default Playlist;
