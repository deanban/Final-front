function fetchedCategories(categories) {
	// console.log("fetched", questions)
  return {
    type: "FETCH_CATES",
    payload: categories
  }
}

export function fetchCategories(){
  return function(dispatch){
    // dispatch(fetchingQuestions())
    fetch('http://localhost:3000/api/v1/categories', {
      method: "GET"
    })
    .then(resp => resp.json())
    .then((json) => {
      
      const categories = json
      dispatch(fetchedCategories(categories))
      // console.log("questionAction", questions)
    })
  }
}