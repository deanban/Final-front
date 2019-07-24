function login(user) {
  return {type: "LOG_IN_USER", payload: user}
}
function signup(user) {
  return {type: "CREATE_USER", payload: user}
}

function user_info(user){
  return {type: "CURRENT_USER", payload: user}
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
    // let newBody = JSON.stringify(body)
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
      if(result.auth_token){

        localStorage.setItem("jwttoken", result.auth_token)
        dispatch(login(result.user))
        return result.auth_token
      }
    })
    //
    // .then((token) => {
    //   localStorage.setItem("jwttoken", token)
    // })

  }
}

export function refetchUserInfo(token){
  return function(dispatch){
    fetch('http://localhost:3000/api/v1/users/current', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
  })
  .then(resp => resp.json())
  .then(data =>{
    console.log("in usersAction", data)
    dispatch(user_info(data.user))
  })
}
}

export function signUpUser(email, password, firstName, lastName, props){
  return function(dispatch){
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName
      })
  })
  .then(resp => resp.json())
  .then(result =>{
    console.log("in usersAction/signup", result)
    localStorage.setItem("jwttoken", result.auth_token)
    dispatch(login(result.user))
    return result.auth_token
  })
  .then(resp => props.history.push('/home'))
  // .then(result =>{
  //   console.log("in useraction/signup", result.status)
  //   return result
  //
  // })
}
}
