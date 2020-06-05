import React, { Component } from 'react'

export class AddTodo extends Component {
    render() {
        return (
           <form>
               <input type='text'
                name="tittle" 
                styele={{flex: '10', padding: '15px'}}
                placeholder="Add Todo..." ></input>
                <input type="submit"
                 value="Submit"
                 className="btn"
                 style={{flex: 1}}
                 ></input>
           </form>
        )
    }
}

export default AddTodo
