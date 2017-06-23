import axios from 'axios';

export const gotRight = (correct) => {
  return {
    type: 'GOT_RIGHT',
    correct: correct + 1,
    streak: streak + 1
  }
}

export const gotWrong = () => {
  return {
    type:'GOT_WRONG',
    streak: 0
  }
}

export const question = (question) => {
  type: 'NEW_QUESION',
  question: he.decode(question)
}

export const answers = (answers, rightAnswer) => {
  type: 'GET_ANSWERS',
  answers: ([rightAnswer, ...answers]).sort(() => (Math.random() - 0.5))
}

export const rightAnswer = (rightAnswer) => {
  type: 'GET_RIGHT_ANSWER'
  rightAnswer: rightAnswer
}

export const getQuestion = (url) => {
  return (dispatch) => {
    axios.get(url)
      .then((response) => dispatch({
        dispatch(question(response.data.results[0].question))
        dispatch(rightAnswer(response.data.results[0].correct_answer))
        dispatch(answers(response.data.results[0].incorrect_answers, response.data.results[0].correct_answer))

    })}
}


// export const displayQuestion = () => {
//   return
// }
