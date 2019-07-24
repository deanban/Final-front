function categoriesReducer(state = {categoriesList: []}, action){
	switch(action.type){
		case "FETCH_CATES":
		    return Object.assign({}, state, {categoriesList: action.payload})
		default:
			return state
	}


}

export default categoriesReducer