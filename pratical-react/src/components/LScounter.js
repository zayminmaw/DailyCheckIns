import React, { Component } from "react";

class LScounter extends Component {
  // We use consturctor for initial value from Patent React Components
  render() {
    return (
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    );
  }
}

export default LScounter;
