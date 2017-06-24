import { combineReducers } from 'redux'

import getQuestions from './questionReducer'
import isCorrect from './correctReducer'

export default combineReducers({
  getQuestions,
  isCorrect
})
