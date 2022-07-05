import React, { Component } from "react"

export class NavBar extends Component {
  render = () => (
    <div className="col-12">
      <h2 className="bg-primary text-white text-center p1">
        {this.props.name} To Do List
      </h2>
    </div>
  )
}
