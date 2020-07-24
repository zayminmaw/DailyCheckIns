import React, { Component } from "react";
import LScounter from "./LScounter";

class LiftingState extends Component {
  state = {
    count: 0,
  };
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div>
        <LScounter
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />
        <LScounter
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
        />
      </div>
    );
  }
}

export default LiftingState;
