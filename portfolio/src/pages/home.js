import React  from "react";
import {Container, Card, Button} from 'react-bootstrap';

function Home(){
    return(
    <>
    <Container>
      <Card bg="success"className="mb-2">
  <Card.Body>
    <Card.Title>Hi I'm Destiny Fleming</Card.Title>
    <Card.Text>
      want to see some of my previous work? Click the button below ot keep scrolling to get to know me more!
    </Card.Text>
    <Button variant="dark" href="/portfolio">Check Out My Portfolio!</Button>
  </Card.Body>
      </Card>
    </Container>
    </>
    )
};

export default Home;