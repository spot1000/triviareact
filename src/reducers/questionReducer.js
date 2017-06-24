<<<<<<< HEAD
export default function reducer(state={
    newQuestion: '',
    newAnswer : '',
    wrongAnswers : [],
    allAnswers : []

}, action) {

  switch (action.type) {
    case "NEW_QUESTION": {
      return {...state, newQuestion: action.payload}
    }
    case 'NEW_ANSWER': {
      return { ...state, newAnswer: action.payload}
    }
    case 'NEW_WRONG_ANSWERS' : {
      return {...state, wrongAnswers: action.payload}
    }
    case 'ALL_ANSWERS' : {
      return {...state, allAnswers: action.payload}
    }
    default:
      return state

  }
}
=======
import { combineReducers } from 'redux'
import { newQuestion, newAnswers, newRightAnswer} from './allReducers'

const questionAnswer combineReducers({
  newQuestion,
  newAnswers,
  newRightAnswer
})

export default questionAnswer
>>>>>>> a1cb5bdcb5ec1a92ede51fcbda98477451968a59
