

const getQuestion = (state = {}, action) => {
  switch (action.type) {
    case "GET_QUESTION" :
      return action.data
    default:
      return state
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

export default getQuestion
