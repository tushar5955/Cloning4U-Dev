
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import NavComp from "./MyComponents/NavComp";
import ChatbotImage from './ai.png';
import Home from "./MyComponents/Home";
import About from "./MyComponents/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./MyComponents/Portfolio";
import Contact from "./MyComponents/Contact";
function App() {
  return (
    <>
    <BrowserRouter>
    
    <NavComp className="custom-navbar"/>
    <Routes>
      <Route exact path ="/" element={<Home/>}>
      </Route>
      <Route exact path ="/home" element={<Home/>}>
      </Route>
      <Route exact path ="/about" element={<About/>}></Route>
      <Route exact path ="/portfolio" element={<Portfolio/>}></Route>
      <Route exact path ="/contact" element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
