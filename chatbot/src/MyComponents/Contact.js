import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Container, Row, Col, Form, Button, ListGroup  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import MessageBox from "../dialogBoxV2.png";
const Contact = () => {
  return (
    <Container fluid>
      
      <Row>
        <Col sm={12} md={6} lg={6} xl={6} xxl={6} className="col-a">
      
          <Form className="contact-form-dark-theme" >
            <Form.Group className="mb-3" controlId="nameInput">
              
              <Form.Control style={{ color: 'white' }} rows={5} type="text" placeholder="your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="emailInput">
              
              <Form.Control style={{ color: 'white' }} rows={4} type="email" placeholder="your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="messageInput">
              
              <Form.Control
                style={{ color: 'white' }}
                as="textarea"
                rows={9}
                placeholder="write a  message"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col sm={12} md={6} lg={6} xl={6} xxl={6} className="col-b">
          {" "}
          <ListGroup className="address">
            <ListGroup.Item className="address-item">
              <FaLinkedin className="icon" /> www.linkedin.com/in/tushar-burade-b3253ab1
            </ListGroup.Item>
            <ListGroup.Item className="address-item">
              <FaGithub className="icon" /> https://www.github.com/tushar5955
            </ListGroup.Item>
            <ListGroup.Item className="address-item">
              <FaEnvelope className="icon" /> tushar5955@gmail.com
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
