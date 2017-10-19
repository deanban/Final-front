function tagsReducer(state = {tagsList: []}, action){
	switch(action.type){
		case "FETCH_TAGS":
		    return Object.assign({}, state, {tagsList: action.payload})
		default:
			return state
	}
}

export default tagsReducer