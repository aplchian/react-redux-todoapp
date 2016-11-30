import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const actions = require('./actions')
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const App = React.createClass({
  getInitialState(){
    return({
      text: ''
    })
  },
  handleChange(e){
    this.setState({
      text: e.target.value
    })
  },
  handleSubmit(e){
    e.preventDefault()
    this.props.actions.addTodo(this.state.text)
  },
  render(){
    return(
      <div>
        <h1>Oh yeahh</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          <button>add</button>
        </form>
        {this.props.todos.todos.map(item => <div>{item.text}</div>)}
        <pre>
          {/* {JSON.stringify(this.state,null,2)} */}
        </pre>
      </div>
    )
  }
})


const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchtoProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

module.exports = connect(
  mapStateToProps,
  mapDispatchtoProps
)(App)
