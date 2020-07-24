import React, { Component } from "react";
import Header from "./components/header";
import Counter from "./components/counter";
import ImgLoader from "./components/imgLoader";
import MyForm from "./components/MyForm";
import ValidationForm from "./components/ValidationForm";
import FetchApi from "./components/FetchApi";
import LiftingState from "./components/LiftingState";
import TodoList from "./components/TodoList";
import "./App.css";

// class Header extends Component {
//   render() {
//     return (
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {this.props.title} {this.props.num} {this.props.myObj.a}{" "}
//           {this.props.arr[1]} {this.props.myFun(5, 6)}
//         </p>

//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     );
//   }
// }

// const Header = (props) => {
//   return (
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>{props.title}</p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   );
// };

// const Header = () => (
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// );

// function App() {
//   const add = (a, b) => a + b;
//   return (
//     <div className="App">
//       <Header
//         title="Hello"
//         num={5}
//         myObj={{ a: 1, b: 2 }}
//         arr={[1, 2, 3]}
//         myFun={add} // myFun={(a, b) => a + b}
//       />
//       {/* <Counter num={0} /> */}
//       <ImgLoader />
//     </div>
//   );
// }

// class App extends Component {
//   state = {
//     visible: true,
//   };
//   render() {
//     const add = (a, b) => a + b;
//     const buttontxt = this.state.visible ? "Hide" : "Show";
//     const C = this.state.visible ? <Counter num={0} /> : <div>I am hidden</div>;
//     return (
//       <div className="App">
//         <Header
//           title="Hello"
//           num={5}
//           myObj={{ a: 1, b: 2 }}
//           arr={[1, 2, 3]}
//           myFun={add} // myFun={(a, b) => a + b}
//         />
//         {/* {this.state.visible ? <Counter num={0} /> : <div>I am Hidden</div>}
//         <button
//           onClick={() => {
//             this.setState({ visible: !this.state.visible });
//           }}
//         >
//           {buttontxt}
//         </button> */}
//         {C}
//         <button
//           onClick={() => {
//             this.setState({ visible: !this.state.visible });
//           }}
//         >
//           {buttontxt}
//         </button>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   state = {
//     visible: true,
//     show: "Imgloader",
//   };
//   render() {
//     if (this.state.show === "Imgloader") {
//       return (
//         <div className="App">
//           <ImgLoader />
//           <br></br>
//           <button onClick={() => this.setState({ show: "Counter" })}>
//             Show Counter
//           </button>
//         </div>
//       );
//     } else if (this.state.show === "Counter") {
//       return (
//         <div className="App">
//           <Counter num={0} />
//           <br></br>
//           <button onClick={() => this.setState({ show: "Header" })}>
//             Show Header
//           </button>
//         </div>
//       );
//     } else if (this.state.show === "Header") {
//       return (
//         <div className="App">
//           <Header />
//           <br></br>
//           <button onClick={() => this.setState({ show: "Imgloader" })}>
//             Show ImgLoader
//           </button>
//         </div>
//       );
//     }
//     return null;
//   }
// }

// class App extends Component {
//   state = {
//     visible: true,
//   };
//   render() {
//     return (
//       <div className="App">
//         {/* <div style={this.state.visible ? {} : { display: "none" }}>
//           <Counter num={0} />
//         </div> */}

//         <div className={this.state.visible ? "visible" : "hidden"}>
//           <Counter num={0} />
//         </div>

//         {/* {this.state.visible ? <Counter num={0} /> : null} */}
//         <button
//           onClick={() => {
//             this.setState({ visible: !this.state.visible });
//           }}
//         >
//           {this.state.visible ? "Hide" : "Show"}
//         </button>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
