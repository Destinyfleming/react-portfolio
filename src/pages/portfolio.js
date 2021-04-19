import React  from "react";
import { Container } from "react-bootstrap";
import PCard from "../components/portfolio-card";
import "./style.css"

function Portfolio(){
    return(
    <div id="portfolio">
    <Container >
        
            <h1> Here you can take a look at some of the projects I have recently worked on!</h1>
            <PCard/>
    </Container>
    </div>
    )
};

export default Portfolio;