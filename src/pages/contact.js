import React  from "react";
import {Form, Row, Col, Card, Button, Container} from 'react-bootstrap';
import "./style.css"

function Contact() {
    return (
      <>
      <Container className="container" id= "contact">
      <Card bg="secondary"className="mb-2 border border-light" >
        <p>Fill out the section below to contact me!</p>
      <Form>
        <Row>
            <Col>
            <Form.Control placeholder="First name" />
            </Col>
            <Col>
            <Form.Control placeholder="Last name" />
            </Col>
        </Row>
      </Form>
      <Form>
      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
         Email
        </Form.Label>
        <Col sm={10}>
        <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
         Phone Number
        </Form.Label>
        <Col sm={10}>
        <Form.Control type="number" placeholder="Phone Number" />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
         <Button variant="dark" type="submit">Enter</Button>
        </Col>
      </Form.Group>
      </Form>
      </Card>
      </Container>
      </>
    );
}

export default Contact;
