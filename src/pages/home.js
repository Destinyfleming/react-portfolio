import React  from "react";
import {Container, Card, Button, Image, Col, Row, Figure} from 'react-bootstrap';
import "./style.css"

function Home(){
    return(
    <>
    <Container >
      <Card bg="info"className="mb-2">
      <Card.Body>
        <Figure>
          <Figure.Image
           width={171}
           height={180}
           alt="171x180"
           src="https://scontent-den4-1.xx.fbcdn.net/v/t1.6435-9/104536284_2691435217766113_6943291197100064999_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=174925&_nc_ohc=rCVlnZcdIaYAX98_hkj&_nc_ht=scontent-den4-1.xx&oh=231f8590f82262f2b868439eedf09679&oe=60938C2A"
           roundedCircle
          />
          
        </Figure>
      <Card.Title>Hi! I'm Destiny Fleming</Card.Title>
        <Card.Text>
         Want to see some of my previous work?      
        </Card.Text>
        <Card.Text>
         Click the "Check Out My Portfolio" button or keep scrolling to get to know me more!
        </Card.Text>
        <Button variant="dark" href="#portfolio">Check Out My Portfolio!</Button>
      </Card.Body>
      </Card>
    </Container>

    <Container >
      <Card bg="secondary"className="mb-2">
      <Card.Body>
      <Card.Text>
      I am a FullStack Web developer who completed a program throught the University of Oregon "(GO Ducks!)". 
      I am capable and comfortable doing front and backend code. 
      I can do anything from HTML, CSS and React to making servers and interacting with databases.
      </Card.Text>
      <Card.Text>
      My favorite aspects of coding so far are React and npm packages "(there are SO many neat ones!)".
      </Card.Text>
      </Card.Body>
      </Card>
    </Container>
  </>
    )
};

export default Home;