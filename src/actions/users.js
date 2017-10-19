function login(user){
	return {
		type:"LOG_IN_USER",
		payload:user
	}
}
function signup(user){
	return {
		type:"CREATE_USER",
		payload:user
	}
}

export function fetchUser(email, password){
	return function(dispatch){
		// dispatch(fetchingQuestions())
		let body = {email: email,
					password: password
					}
		body = JSON.stringify(body)
		return fetch('http://localhost:3000/api/v1/auth', {
			method: 'post',
			body: body,
			headers:{
				"Accept": "application/json",
				"Content-Type": "application/json"
			}
		})
		.then(res => res.json())
		.then(json => {
			// console.log("in usersAction", json)
			localStorage.setItem("jwttoken", json.auth_token)
			dispatch(login(json.user))
			return json.auth_token
		})
		// .then((token) => {
		//   localStorage.setItem("jwttoken", token)
		// })

	}
}
