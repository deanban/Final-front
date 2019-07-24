function usersReducer(state =  { id:'', first_name: "", last_name: ""} , action) {
  switch (action.type) {
    case "LOG_IN_USER":
      return  {...action.payload}
    case "CREATE_USER":
      return {...action.payload}
    case "CURRENT_USER":
  		return {...action.payload}
    default:
      return state
  }
}

export default usersReducer
