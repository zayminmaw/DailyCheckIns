import React, { Component } from "react";

class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      favPet: "",
      check: true,
      title: "Mr.",
    };
  }
  handleChange = (e) => {
    const check = e.target.type === "ckeckbox";

    this.setState({
      [e.target.name]: check ? e.target.checked : e.target.value,
    });
  };
  submit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <form onSubmit={this.submit}>
        <input
          name="name"
          value={this.state.name}
          type="text"
          onChange={this.handleChange}
        />
        <textarea
          name="favPet"
          value={this.state.favPet}
          onChange={this.handleChange}
        ></textarea>
        <input
          name="check"
          type="checkbox"
          checked={this.state.scheck}
          onChange={this.handleChange}
        />
        <div>
          <select
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          >
            <option>Mr.</option>
            <option>Miss.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default MyForm;
