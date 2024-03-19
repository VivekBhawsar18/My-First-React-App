import React from 'react';
import TodoItem from './TodoItem';

const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length === 0 ? "No Todos to display" : props.todos.map((todo) => {
        return (
          <React.Fragment key={todo.sno}>
            <TodoItem todo={todo} onDelete={props.onDelete} />
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Todos;
