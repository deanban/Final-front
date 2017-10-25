
function addQuestion(question){
	return {
		type:"ADD_QUESTION",
		payload: question
	}
}

function removeQuestion(id){
	return {
		type:"REMOVE_QUESTION",
		payload: id
	}
}

function fetchingQuestions() {
  return {
    type: "FETCHING_QUESTIONS"
  }
}

function fetchedQuestions(questions) {
	// console.log("fetched", questions)
  return {
    type: "FETCHED_QUESTIONS",
    payload: questions
  }
}
// function fetchedCategories(categories) {
// 	// console.log("fetched", questions)
//   return {
//     type: "FETCH_CATES",
//     payload: categories
//   }
// }
// function fetchedTags(tags) {
// 	// console.log("fetched", questions)
//   return {
//     type: "FETCH_TAGS",
//     payload: tags
//   }
// }

export function fetchQuestions(){
	return function(dispatch){
		dispatch(fetchingQuestions())
		fetch('http://localhost:3000/api/v1/questions', {
			method: "GET"
		})
		.then(resp => resp.json())
		.then((json) => {
			const questions = json
			dispatch(fetchedQuestions(questions))
			console.log("questionAction", questions)
		})
	}
}
// export function fetchCategories(){
// 	return function(dispatch){
// 		// dispatch(fetchingQuestions())
// 		fetch('http://localhost:3000/api/v1/categories', {
// 			method: "GET"
// 		})
// 		.then(resp => resp.json())
// 		.then((json) => {
// 			const categories = json
// 			dispatch(fetchedCategories(categories))
// 			// console.log("questionAction", questions)
// 		})
// 	}
// }
// export function fetchTags(){
// 	return function(dispatch){
// 		// dispatch(fetchingQuestions())
// 		fetch('http://localhost:3000/api/v1/tags', {
// 			method: "GET"
// 		})
// 		.then(resp => resp.json())
// 		.then((json) => {
// 			const tags = json
// 			dispatch(fetchedTags(tags))
// 			// console.log("questionAction", questions)
// 		})
// 	}
// }


export function postQuestions(title, userid, categoryid, tagname, props){
	return function(dispatch){
		// dispatch(fetchingQuestions())
		let body = {title: title,
					user_id: userid,
					category_id: categoryid,
					tag_name:tagname
					}
		body = JSON.stringify(body)
		return fetch('http://localhost:3000/api/v1/questions', {
			method: 'post',
			body: body,
			headers:{
				"Accept": "application/json",
				"Content-Type": "application/json"
			}

		})
		.then(res => res.json())
		.then(json => {
			dispatch(addQuestion(json))
			props.history.push('/home')
			return json
		})

	}
}
