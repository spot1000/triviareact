export default function reducer(state={
    correct: 0,
    streak: 0
}, action) {

  switch (action.type) {
    case "IS_CORRECT": {
      return {correct: state.correct + 1, streak: state.streak + 1}
    }
    case 'IS_WRONG': {
      return { ...state, streak: 0}
    }
    default:
      return state

  }
}
