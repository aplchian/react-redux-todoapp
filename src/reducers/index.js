import {combineReducers} from 'redux'
const {append} = require('ramda')

const initialState = {
  todos: [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ]
}

const todos = function(state = initialState,action){
  switch(action.type){
    case 'ADD_TODO':
      return Object.assign({},state,{
        todos: append({
          id: state.todos.length + 1,
          text: action.text,
          completed: false
        },state.todos)
      })
    default: return state
  }
}

const MainReducer = combineReducers({
  todos
})

module.exports = MainReducer
