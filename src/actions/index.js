import he from 'he'
import axios from 'axios'

function newQuestion(text) {
  return {
    type: 'NEW_QUESTION',
    payload: text
  }
}

function newAnswer(text) {
  return {
    type: 'NEW_ANSWER',
    payload: text
  }
}

 function newWrongAnswers(array) {
  return {
    type: 'NEW_WRONG_ANSWERS',
    payload: array
  }
}

function allAnswers(array, text) {
  let allAnswerArr = ([text, ...array]).sort(() => (Math.random() - 0.5))
  return {
    type: "ALL_ANSWERS",
    payload: allAnswerArr
  }
}

export default function getNewQuestion(url) {
  return (dispatch) => {
    axios.get(url)
      .then((response) => {
        const question = he.decode(response.data.results[0].question)
        const answer = response.data.results[0].correct_answer
        const wrongAnswers = response.data.results[0].incorrect_answers

        dispatch(newQuestion(question))
        dispatch(newAnswer(answer))
        dispatch(newWrongAnswers(wrongAnswers))
        dispatch(allAnswers(wrongAnswers, answer))
      })
  }
}
