import React, {Component} from "react";

class ToDoForm extends Component {
  constructor() {
    super()
    this.state = {
      value: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.addTask(event, this.state.value)

    this.setState({
      value: ""
    })
  }

  handleCompleted = (event) => {
    event.preventDefault()

    this.props.clearCompleted(event, this.state.value)

    this.setState({
      value: ""
    })
  }

//   FINISH CLEAR COMPLETED! Have to add event and props.
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>
            Add
        </button>
        <button onClick={this.handleCompleted}>
            Clear Completed Tasks
        </button>
      </form>
      
    );
  }
}

export default ToDoForm;
