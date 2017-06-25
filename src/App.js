import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'

import he from 'he'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
// import {QuestionDisplay} from './components/QuestionDisplay'
// import {QuestionAnswers} from './components/QuestionAnswers'
import {Button} from './components/Button'
import {Question} from './components/QuestionDisplay'
import {Answers} from './components/QuestionAnswers'
import getNewQuestion from './actions/index'
let correct = 0
class App extends Component {

//   let correct = 0
//   super(props),
//   this.state = {
//     correct:0,
//     streak:0,
//     currentQuestion: '',
//     rightAnswer: '',
//     answers: []
//   }
//   this.getQuestions = this.getQuestions.bind(this)
//   this.handleClick = this.handleClick.bind(this)
// }
//
// getQuestions() {
//   axios.get("https://opentdb.com/api.php?amount=1")
//     .then(response => {
//       // let newArr = [response.data.results[0].correct_answer, ...response.data.results[0].incorrect_answers]
//       const answerArr = ([response.data.results[0].correct_answer, ...response.data.results[0].incorrect_answers]).sort(() => (Math.random() - 0.5))
//
//       this.setState({
//         currentQuestion:he.decode(response.data.results[0].question),
//         answers:answerArr,
//         rightAnswer: response.data.results[0].correct_answer
//
//       })
//       console.log(response.data.results[0])
//       console.log(this.state)
//     })
// }
//
handleClick(answer) {
  console.log('test!')

}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Question display={this.props.initialState.getQuestions.newQuestion}/>
        <Answers items={this.props.initialState.getQuestions.allAnswers} checkAns={this.handleClick}/>
        <Button onClick={() => {this.props.fetchData('https://opentdb.com/api.php?amount=1')}} name='Get Questions'/>
        <p>{this.props.initialState.isCorrect.correct}</p>
        <p>{this.props.initialState.isCorrect.streak}</p>
      </div>
    );
  }
}

function mapState (state) {
  return {initialState:state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(getNewQuestion(url))
  }
}




export default connect(mapState, mapDispatchToProps)(App);
