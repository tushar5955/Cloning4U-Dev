import React from "react";
import Chatbot from "react-chatbot-kit";
import MessageBox from "../dialogBoxV2.png";
import "react-chatbot-kit/build/main.css";
import config from "../Chatbot/config";
import ActionProvider from "../Chatbot/ActionProvider";
import MessageParser from "../Chatbot/MessageParser";
import "./Home.css";
const Home = () => {
  return (
    <div className="about-container">
      <img className="dialog-box" src={MessageBox} alt="Chatbot" />
      <div className="row">
        <div className="col-left">hello{/* First column content */}</div>
        <div className="col-right">
          <div className="Chatbot">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
