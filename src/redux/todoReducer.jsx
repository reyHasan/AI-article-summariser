import {useReducer} from 'react'
import React from 'react'


const ACTIONS = {
    ADD_TODO: 'add_todo',
    MARK_TODO: 'cross_todo',
    DELETE_TODO: 'delete_todo'
    }
    
    ///CREATE REDUCER LOGIC
    const reducer = (state, action) => {
      switch (action.type) {
        case ACTIONS.ADD_TODO: 
          return [...state, newTodo(action.payload)]; 
          case ACTIONS.DELETE_TODO: 
          const updatedTodo= state.filter (state => state.id !== action.payload)
          return updatedTodo; 
          case ACTIONS.MARK_TODO: 
          const updatedTodos = state.map(todo =>
            todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo
          );
          return updatedTodos; 
        default:
          return state;
      }
    };    
    

    const newTodo = (name) => {
      return {
        id: Date.now(),
        name: name,
        isCompleted: false
    }
    } 
    


  

     function Todo() {

     const [state, dispatch] = useReducer(reducer, []);
  

    const allTodos = state.map((todo)=> {
      return <div key={todo.id}>
        <p onClick={() => dispatch({ type: ACTIONS.MARK_TODO, payload: todo.id })} className={todo.isCompleted? 'line-through': '' }>{todo.name}</p>
        <small className={todo.isCompleted? 'line-through': '' }> {todo.id}</small>
        <button className='black_btn' onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: todo.id })}>Delete task</button> 
      </div>
    })

    return (
         <div>
             <h3> TODOS </h3>
           {allTodos}
            
     <div className='p-12'>
     <button className='black_btn' onClick={() => dispatch({ type: ACTIONS.ADD_TODO, payload: 'New TASk' })}>Add task</button> 
     </div>
         </div>       
      );
    }
    
    
    export default Todo;