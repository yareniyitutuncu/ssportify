import React from 'react';
import './StartScreen.css';

const StartScreen = () => {
  return (
    <div className="start-screen">
      <div className="content">
        <h1>Welcome to <span>Sportify!</span></h1>
        <button className="start-button">LET'S START</button>
      </div>
    </div>
  );
};

export default StartScreen;
