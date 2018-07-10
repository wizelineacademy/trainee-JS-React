import React from 'react';

const TaskItem = ({onClick,children}) => 
  <li onClick={ onClick } > {children} </li>

export default TaskItem;