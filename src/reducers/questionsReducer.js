function questionsReducer(state = {isFetching: false, list: []}, action){
	switch(action.type){
		case "ADD_QUESTION":
			return Object.assign({}, state, {list: [...state.list, {title: action.payload}]})
		case "REMOVE_QUESTION":
			return Object.assign({}, state, {list: state.list.filter((question) => question.id !== action.payload)})
	    case "FETCHED_QUESTIONS":
	      return Object.assign({}, state, {list: action.payload, isFetching: false} )
	    case "FETCHING_QUESTIONS":
	      return Object.assign({}, state, { isFetching: true})

		default:
			return state
	}
}

export default questionsReducer