export function addQuestion(title){
	return {
		type:"ADD_QUESTION",
		payload: title
	}
}

export function removeQuestion(id){
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

// export function postQuestions(){
// 	return function(dispatch){
// 		dispatch(fetchingQuestions())
// 		fetch('http://localhost:3000/api/v1/questions', {
// 			method: "GET"
// 		})
// 		.then(resp => resp.json())
// 		.then((json) => {
// 			const questions = json
// 			dispatch(fetchedQuestions(questions))
// 			console.log("questionAction", questions)
// 		})
// 	}
// }