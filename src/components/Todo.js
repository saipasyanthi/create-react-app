import React, { Component } from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

class Todo extends Component {

  render(){
 //  console.log(this.props.todo)
    return this.props.todo.map((todos) =>(
    <TodoItem key={todos.id} todo={todos} markcomplete={this.props.markcomplete} delTodo={this.props.delTodo}/>
    ));
  }
}
//propTypes
Todo.propTypes = {
  todo: PropTypes.array.isRequired
}
export default Todo;
