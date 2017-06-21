import { combineReducers } from 'redux'
import todos from './todos'
import visabilityFilter from './visabilityFilter'

const todoApp = combineReducers({
  todos,
  visabilityFilter
})

export default todoApp
