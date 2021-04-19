import React from "react";
import {Card, Button} from 'react-bootstrap';
import CodeQuiz from "../imgs/code-quiz.png";
import BookWorm from "../imgs/book-worm.png";
import DayScheduler from "../imgs/day-scheduler.png";
import Planner from "../imgs/interactive-planner.png";



function PCard() {
  return (
    <>
    <Card bg="warning"className="mb-2">
    <Card.Img variant="top" src={CodeQuiz} alt ="code quiz"/>
    <Card.Body>
      <Card.Text>
        I made this project to test your coding knowledge! Check it out.
      </Card.Text>
      <Button variant="dark" href="https://destinyfleming.github.io/code_quiz_website/">Play The Code Quiz</Button>
    </Card.Body>
    </Card>
    <br />

    <Card bg="warning"className="mb-2">
    <Card.Img variant="top" src={BookWorm} />
    <Card.Body>
      <Card.Text>
        My team and I created a readers dream site! It tracks your current books progress, lets you creat book shelves and 
        helps pick your next book for you!
      </Card.Text>
      <Button variant="dark" href="https://aqueous-beyond-52955.herokuapp.com/">Check It Out</Button>
    </Card.Body>
    </Card>
    <br />

    <Card bg="warning"className="mb-2">
    <Card.Img variant="top" src={DayScheduler} alt = "" />
    <Card.Body>
      <Card.Text>
        Do you have a crazy schedule? This app helps you keep track of your appointments and the current time of day!
      </Card.Text>
      <Button variant="dark" href="https://destinyfleming.github.io/calendar_scheduler/">Schedule Away!</Button>
    </Card.Body>
    </Card>
    <br />

    <Card bg="warning"className="mb-2">
    <Card.Img variant="top" src={Planner} />
    <Card.Body>
      <Card.Text>
        After a long day of work who wants to think about what to do? This app helps generate a dinner, movie and drink 
        so you just need to focus on relaxing!
      </Card.Text>
      <Button variant="dark" href="https://samrogers15.github.io/Interactive_Entertainment_Planner/">Help Plan Your Night</Button>
    </Card.Body>
    </Card>
    <br />
    </>

  );
}

export default PCard;