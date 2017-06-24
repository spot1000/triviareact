export function newQuestion(text) {
  return {
    type: 'NEW_QUESTION',
    payload: text
  }
}

export default function newAnswer(text) {
  return {
    type: 'NEW_ANSWER',
    payload: text
  }
}

export function newWrongAnswers(array) {
  return {
    type: 'NEW_WRONG_ANSWERS',
    payload: array
  }
}

export function allAnswers(array, text) {
  let allAnswerArr = ([text, ...array]).sort(() => (Math.random() - 0.5))
  return {
    type: "ALL_ANSWERS",
    payload: allAnswerArr
  }
}
