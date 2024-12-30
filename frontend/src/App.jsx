import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
  return (
    <>
      <Header></Header>
      <Chatbot></Chatbot>
      <Footer></Footer>
    </>
  );
}

export default App;
