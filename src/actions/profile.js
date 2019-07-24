function show(user){
  return {type: "SHOW_USER", payload: user}
}

function user_info(user){
  return {type: "CURRENT_USER", payload: user}
}

export function fetchForProfilePage(userId){
	return function(dispatch){
		// dispatch(fetchingQuestions())
		fetch(`http://localhost:3000/api/v1/users/${userId}`, {
			method: "GET"
		})
		.then(resp => resp.json())
		.then((json) => {

			dispatch(show({json}))
      // return json
			console.log("profile/Action", json)
      // debugger
		})
	}
}
