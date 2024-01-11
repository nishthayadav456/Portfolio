import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Contact.css";
import { useState } from "react";
const Contact = () => {
  const [inputvalue, setinputvalue] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    message: "",
  });
  console.log(inputvalue);
  const getValue = (e) => {
    const { name, value } = e.target;
    setinputvalue(() => {
      return {
        ...inputvalue,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="container  mb-3 contact">
        <h2 className="text-center">ContactUs</h2>
        <div className="container mt-2">
          <Form className="row mt-2">
            <Form.Group
              className="mb-3 col-lg-6"
              onChange={getValue}
              controlId="formBasicEmail"
            >
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="fname"
                placeholder="Enter Your First Name"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lname"
                onChange={getValue}
                placeholder="Enter your Last Name"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={getValue}
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                onChange={getValue}
                placeholder="Enter phone Number"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} name="message" />
            </Form.Group>
            <div className="contactbtn">
              <Button variant="primary" className="col-lg-6" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Contact;
