import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle= ()=>{
        /*  if(this.props.todo.completed)
          {
              return{
                  textDecoration:'line-through'
              }
          }
          else{
              return{
                textDecoration:'none'
              }
          }*/

          return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom:'1px #ccc dotted',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
          }  
    }
   

       render() {
           const{id, tittle}=this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markcomplete.bind
                        (this,id)}/> {' '}
                {tittle}
 <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>x</button>
                </p>
            </div>
        )
    }
}

//propTypes
TodoItem.propTypes={
    todo:PropTypes.object.isRequired
  }

const btnStyle={
    background:'#ff0000',
    color:'#fff',
    border:'none',
    paddine:'5px 8px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}
export default TodoItem
