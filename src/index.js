import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import usersReducer from './reducers/usersReducer'
import questionsReducer from './reducers/questionsReducer'
import categoriesReducer from './reducers/categoriesReducer'
import tagsReducer from './reducers/tagsReducer'
import profileReducer from './reducers/profileReducer'
import { Provider } from 'react-redux'
// import { addBook, fetchBooks } from './actions/books'
import thunk from 'redux-thunk'
import { autoRehydrate, persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({users: usersReducer, userProfile: profileReducer, questions: questionsReducer, categories: categoriesReducer, tags: tagsReducer})
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
  // autoRehydrate()
))
//const store = createStore(rootReducer)''
// persistStore(store)

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
