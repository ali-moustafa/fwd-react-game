import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';



const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  
  state = {
  	numCorrect : 0,
    numQuestions: 0
  
  }
  
  changeAnswer = (answerWasCorrect) => {
  	if (answerWasCorrect) {
    	this.setState( currState => ({
        	numCorrect : currState.numCorrect + 1
        }));
    }
  	this.setState( currState => ({
        	numQuestions : currState.numQuestions + 1 
    }));
  
  
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
    
    	  <Game changeAnswer={this.changeAnswer} />
       
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
