

const newQuestion = (state = '', action) => {
  switch (action.type) {
    case "NEW_QUESTION" :
      return action.question
    default:
      return state
  }
}

const newAnswers = (state=[], action) => {
  switch (action.type) {
    case 'GET_ANSWERS' :
      return action.getAnswers
    default:
      return state
  }
}

const newRightAnswer = (state = '', action) => {
  switch (action.type) {
    case 'GET_RIGHT_ANSWER' :
      return action.getRightAnswer
    default:
      return state
  }
}

const gotRight = (state = 0, action) {
  switch (action.type) {
    case 'GOT_RIGHT':
      return action.gotRight;
    case 'GOT_WRONG'
      return action.gotWrong;
    default:
      return state;
  }
}

// const todos = (state = [], action) => {
//   switch (action.type) {
//     case "ADD_TODO" :
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           conpleted: false
//         }
//       ]
//     case "TOGGLE_TODO":
//       return state.map(todo =>
//         (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo)
//     default:
//       return state
//   }
// }
