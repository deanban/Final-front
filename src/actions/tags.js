function fetchedTags(tags) {
	// console.log("fetched", questions)
  return {
    type: "FETCH_TAGS",
    payload: tags
  }
}

export function fetchTags(){
	return function(dispatch){
		// dispatch(fetchingQuestions())
		fetch('http://localhost:3000/api/v1/tags', {
			method: "GET"
		})
		.then(resp => resp.json())
		.then((json) => {
			const tags = json
			dispatch(fetchedTags(tags))
			// console.log("questionAction", questions)
		})
	}
}