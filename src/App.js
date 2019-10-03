import React from "react";
import ToDoForm from "./components/TodoComponents/TodoForm";
import ToDoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super()
    this.state = {
      tasks: []
    }
  }

  addTask = (event, taskName) => {

    event.preventDefault()

    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    }

    this.setState({
      tasks: [newTask, ...this.state.tasks]
    })

    console.log(this.state.tasks)
  }

  clearCompleted = () => {

    this.setState({
      tasks: this.state.tasks.filter(task => {
        return !task.completed
      })
    })
  }

  toggleTask = ( taskID) => {


    this.setState({
      tasks: this.state.tasks.map(task => {
        if (task.id === taskID) {
          return {
            ...task, 
            completed: !task.completed
          }
        } else {
          return task
        }
      })
    })
  }

  render() {
    return (
      <div className = "App">
        <ToDoForm 
          addTask = {this.addTask}
          clearCompleted = {this.clearCompleted}
        />
        <ToDoList 
          tasks = {this.state.tasks}
          toggleTask={this.toggleTask}
        />
      </div>
    );
  }
}

export default App;
