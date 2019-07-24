function profileReducer(state = {isFetching: false, profileList: []}, action){
	switch(action.type){
		case "SHOW_USER":
      return Object.assign({}, state, {profileList: [...state.profileList, action.payload]})

	  case "FETCHING_FOR_USER":
	    return Object.assign({}, state, { isFetching: true})

		default:
			return state
	}
}

export default profileReducer
