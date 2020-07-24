import React, { Component } from "react";

class ImgLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ["Img1", "Img2", "Img3"],
      index: 0,
    };
  }
  next = () => {
    //this.setState is asynchronous
    console.log(this.state.index);
    this.setState(
      {
        index: this.state.index + 1,
      },
      () => console.log(this.state.index) // Callback Fun
    );
    console.log(this.state.index);
  };
  render() {
    return (
      <>
        <p style={{ fontSize: 40 }}>{this.state.img[this.state.index]}</p>
        <button onClick={this.next}>Next</button>
        <button
          onClick={() => {
            this.setState({
              index: this.state.index - 1,
            });
          }}
        >
          Previous
        </button>
      </>
    );
  }
}

export default ImgLoader;
