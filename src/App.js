import React from "react";
import "./app.css";
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
        <Portfolio/>
        <Contact/>
        <Footer/>
      </>
  );
}

export default App;
