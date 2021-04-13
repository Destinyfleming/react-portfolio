import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header"
import Contact from "./pages/contact"
import Home from "./pages/home"
import Portfolio from "./pages/portfolio";

function App() {
  return (
    <Router>
      <div className = "bg-dark text-white">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}
//<Route component={NoMatch} />
export default App;
