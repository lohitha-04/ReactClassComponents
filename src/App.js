import React, { Component } from "react"
import { NavBar } from "./components/Navbar"
import { TodoRow } from "./components/TodoRow"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: "Lohitha",
      todoList: [
        { action: "class components", done: false },
        { action: "redux", done: false },
        { action: "typescript", done: false },
      ],
      newTodo: "",
    }
  }

  updateValue = (e) => {
    this.setState({
      newTodo: e.target.value,
    })
  }

  addTodo = () => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        { action: this.state.newTodo, done: false },
      ],
    })
  }

  toggleDone = (todo) => {
    this.setState({
      todoList: this.state.todoList.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    })
  }

  todoRows = () =>
    this.state.todoList.map((item) => (
      <TodoRow key={item.action} item={item} callback={this.toggleDone} />
    ))

  render = () => (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <NavBar name={this.state.userName} />
          <input
            className="form-control"
            value={this.state.newTodo}
            onChange={this.updateValue}
          />
          <button className="btn btn-primary" onClick={this.addTodo}>
            Add
          </button>
        </div>
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Complete</th>
              </tr>
            </thead>
            <tbody>{this.todoRows()}</tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
