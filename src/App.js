import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
import newAnswer from './actions/index'
import he from 'he'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
// import {QuestionDisplay} from './components/QuestionDisplay'
// import {QuestionAnswers} from './components/QuestionAnswers'
import {Button} from './components/Button'
import {Question} from './components/QuestionDisplay'
import {Answers} from './components/QuestionAnswers'
let correct = 0
class App extends Component {
// constructor(props) {
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
// handleClick(answer) {
//   console.log('test!')
//   if (answer === this.state.rightAnswer) {
//     correct++
//     this.setState({correct: this.state.correct+1, streak: this.state.streak + 1})
//     this.getQuestions()
//
//
//   } else {
//     this.setState({streak: 0})
//     this.getQuestions()
//
//   }
// }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {/* <Question display={this.state.currentQuestion}/>
        <Answers items={this.state.answers} checkAns={this.handleClick}/> */}
        <Button onClick={() => {this.props.dispatch(newAnswer("test"))}} name='Get Questions'/>
      </div>
    );
  }
}

function mapState (state) {
  return {state}
}

// function mapDispatchToProps = (dispatch) => {
//   return {
//     isCorrect
//   }
// }


export default connect(mapState)(App);
