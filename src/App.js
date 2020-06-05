import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header'
import Todos from './components/Todo'
import AddTodo from './components/AddTodo'

class App extends Component {
state={
  todo:[
    {
      id:1,
      tittle:'take out trash',
      completed: false
    },
    {
      id:2,
      tittle:'dinner with wife',
      completed: true
    },
    {
      id:3,
      tittle:'interview on friday',
      completed: false
    },
  ]
}

//toggle complete
markcomplete = (id)=>{
 // console.log(id)
  this.setState({todo:this.state.todo.map(todo =>{
    if(todo.id ===id){
      todo.completed= !todo.completed
    }
    return todo;
  }) });
     }

     //delete todo
     delTodo=(id)=>{
          this.setState({todo:[...this.state.todo.filter(todo=>todo.id!==id)]});
    }

 render() {
   //console.log(this.state.todo)

  return (
    <div className="App">
      <Header/>
      <AddTodo/>
      <Todos  todo={this.state.todo} markcomplete={this.markcomplete} delTodo={this.delTodo}/>
      
    </div>
  );
}
}
export default App;
