import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
// import {QuestionDisplay} from './components/QuestionDisplay'
// import {QuestionAnswers} from './components/QuestionAnswers'
import {Button} from './components/Button'

class App extends Component {
constructor(props) {
  super(props),
  this.state = {
    correct: 0,
    currentQuestion: '',
    rightAnswer: '',
    answers: []
  }
  this.getQuestions = this.getQuestions.bind(this)
}

getQuestions() {
  axios.get("https://opentdb.com/api.php?amount=1")
    .then(response => {
      let newArr = [response.data.results[0].correct_answer, ...response.data.results[0].incorrect_answers]
      const answerArr = (newArr).sort(() => (Math.random() - 0.5))

      this.setState({
        currentQuestion:response.data.results[0].question,
        answers:answerArr,
        rightAnswer: response.data.results[0].correct_answer

      })
      console.log(response.data.results[0])
      console.log(this.state)
    })
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      <Button onClick={this.getQuestions} name='Get Questions'/>
      </div>
    );
  }
}

export default App;
