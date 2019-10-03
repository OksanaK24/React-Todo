import React from "react";

const Task = props => {
  return (
    <div
      onClick={() => props.toggleTask(props.task.id)}
      style={props.task.completed ? { textDecoration: 'line-through' } : null}
    //   className={`task${props.task.completed ? "completed" : ""}`}
    >
      <p>{props.task.name}</p>
    </div>
  );
};

export default Task;
