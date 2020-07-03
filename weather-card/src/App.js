import React from "react";
import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location={"Yangon"} />
      <WeatherEngine location={"Mandalay"} />
    </div>
  );
}

export default App;
