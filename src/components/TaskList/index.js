import React from 'react';
import TaskItem from '../TaskItem';

export const TaskList = ({onItemClick,tasks}) => {
  return (
    <ul className="theList">
      {
      tasks.map( task => 
      <TaskItem onClick={ onItemClick(task.key) } key={ task.key } > {task.text} </TaskItem>)
      }
    </ul>
  );
}
export default TaskList