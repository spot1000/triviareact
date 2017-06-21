const visabilityFilter = (state = 'SHOW_ALL', action) => {
  dwitch (action.type) {
    case 'SET_VISABILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visabilityFilter
