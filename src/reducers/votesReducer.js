function votesReducer(state = { count: 0}, action) {


  // DEPENDING ON THE ACTION DO SOMETHING
  /// INCREMENT & DECREMENT

  switch (action.type) {
    case "INCREMENT":
      return Object.assign({}, state, { count: state.count + 1})
    case "DECREMENT":
      return Object.assign({}, state, { count: state.count - 1})
    case "CLEAR_COUNTER":
      return Object.assign({}, state, { count: 0})
    default:
      return state
  }

}

export default votesReducer
