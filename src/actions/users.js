function login(user) {
  return {type: "LOG_IN_USER", payload: user}
}
function signup(user) {
  return {type: "CREATE_USER", payload: user}
}

export function logOutUser() {
  localStorage.removeItem('jwttoken');
}

export function fetchUser(email, password) {
  return function(dispatch) {
    // dispatch(fetchingQuestions())
    let body = {
      email: email,
      password: password
    }
    let newBody = JSON.stringify(body)
    fetch('http://localhost:3000/api/v1/users/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(resp => resp.json())
    .then(result =>{
      console.log("in usersAction", result)
      localStorage.setItem("jwttoken", result.auth_token)
      dispatch(login(result.user))
      return result.auth_token
    })

    .then((token) => {
      localStorage.setItem("jwttoken", token)
    })

  }
}
