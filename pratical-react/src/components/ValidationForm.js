import React, { Component } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  errorName: "",
  errorEmail: "",
  errorPassword: "",
};

class ValidationForm extends Component {
  handleChange = (e) => {
    const check = e.target.type === "ckeckbox";

    this.setState({
      [e.target.name]: check ? e.target.checked : e.target.value,
    });
  };
  validate = () => {
    let errorName = "";
    let errorEmail = "";
    // let errorPassword = "";

    if (!this.state.name) {
      errorName = "Name Cannot Be Blank";
    }
    if (!this.state.email.includes("@")) {
      errorEmail = "Invalid Email";
    }
    if (errorEmail || errorName) {
      this.setState({ errorEmail, errorName });
      return false;
    }
    return true;
  };
  submit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };
  state = initialState;
  render() {
    return (
      <form onSubmit={this.submit}>
        <div>
          <input
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ fontSize: 12, color: "red" }}>{this.state.errorName}</div>
        <div>
          <input
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ fontSize: 12, color: "red" }}>
          {this.state.errorEmail}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ fontSize: 12, color: "red" }}>
          {this.state.errorPassword}
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ValidationForm;
