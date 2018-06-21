import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { autoRehydrate, persistStore } from 'redux-persist'
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import usersReducer from './reducers/usersReducer'
import questionsReducer from './reducers/questionsReducer'
import categoriesReducer from './reducers/categoriesReducer'
import tagsReducer from './reducers/tagsReducer'
import profileReducer from './reducers/profileReducer'
import votesReducer from './reducers/votesReducer'
// import { addBook, fetchBooks } from './actions/books'

const rootReducer = combineReducers({users: usersReducer, userProfile: profileReducer, questions: questionsReducer, categories: categoriesReducer, tags: tagsReducer, votes: votesReducer})
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
  // autoRehydrate()
))
//const store = createStore(rootReducer)''
// persistStore(store)

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
