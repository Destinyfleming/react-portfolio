import React from "react";
import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header"
import Contact from "./pages/contact"
import Home from "./pages/home"
import Portfolio from "./pages/portfolio";

function App() {
  return (
      <>
        <Header/>
        <Home/>
        <Contact/>
        <Portfolio/>
        <Footer/>
      </>
  );
}

export default App;
