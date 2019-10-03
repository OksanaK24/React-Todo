// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

import Task from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          toggleTask={props.toggleTask}
        />
      ))}
    </div>
  );
};

export default TodoList;