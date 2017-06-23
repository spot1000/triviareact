import { combineReducers } from 'redux'
import { newQuestion, newAnswers, newRightAnswer} from './allReducers'

const questionAnswer combineReducers({
  newQuestion,
  newAnswers,
  newRightAnswer
})

export default questionAnswer
