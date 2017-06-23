import axios from 'axios';

export const gotRight = (correct, streak) => {
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
  question
}

export const answers = (answers, rightAnswer) => {
  type: 'GET_ANSWERS',
  answers: ([rightAnswer, ...answers]).sort(() => (Math.random() - 0.5))
}

export const rightAnswer = (rightAnswer) => {
  type: 'GET_RIGHT_ANSWER'
  rightAnswer: rightAnswer
}

export const getQuestion = () => {
  axios.get("https://opentdb.com/api.php?amount=1")
    .then((response) => dispatch({
      (response.data.results[0].correct_ans) => dispatch(rightAnswer(response.data.results[0].correct_answer))

    })
}


// export const displayQuestion = () => {
//   return
// }
