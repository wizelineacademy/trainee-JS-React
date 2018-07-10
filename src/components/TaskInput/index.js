import React from 'react';

const TaskInput = ({onChange, onAddItem, text}) => (
  <div className="header">
    <input placeholder="enter task" value={ text } onChange={ onChange } />
    <button onClick={ onAddItem } > Add </button>
  </div>
);

export default TaskInput;