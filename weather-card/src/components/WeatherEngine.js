import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard/component";

const WeatherEngine = ({ location }) => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const getWeather = async (q) => {
    const apiRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=76cea6e6473d0a10b43946f70c8bd502`
    );
    const resJson = await apiRes.json();
    setWeather({
      temp: resJson.main.temp,
      city: resJson.name,
      condition: resJson.weather[0].main,
      country: resJson.sys.country,
    });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };
  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <div className="App">
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />
      <form>
        <input value={query} onChange={(e) => setQuery(e.target.value)}></input>
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
};

export default WeatherEngine;
