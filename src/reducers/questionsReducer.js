function questionsReducer(state = {isFetching: false, questionslist: []}, action){
	switch(action.type){
		case "ADD_QUESTION":
			return Object.assign({}, state, {questionslist: [...state.questionslist, action.payload]})
		case "REMOVE_QUESTION":
			return Object.assign({}, state, {questionslist: state.questionslist.filter((question) => question.id !== action.payload)})
	    // case "FETCH_CATES":
	    // 	return Object.assign({}, state, {categoriesList: action.payload, isFetching: false})

	    // case "FETCH_TAGS":
	    // 	return Object.assign({}, state, {tagsList: action.payload, isFetching: false})

	    case "FETCHED_QUESTIONS":
	      return Object.assign({}, state, {questionslist: action.payload, isFetching: false} )
	    case "FETCHING_QUESTIONS":
	      return Object.assign({}, state, { isFetching: true})

		default:
			return state
	}
}

export default questionsReducer
