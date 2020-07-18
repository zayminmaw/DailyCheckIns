import React, { useEffect, useState } from "react";
import Recipe from "./Recipes";
import "./App.css";

const App = () => {
  const AppId = "b2b43067";
  const AppKey = "1ae58d99d8b492358ea8e49010e5927c";
  const [query, setQuery] = useState("chicken");
  const [search, setSearch] = useState("");
  const [recipe, setRecipe] = useState([]);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${AppId}&app_key=${AppKey}`
    );
    const data = await response.json();
    setRecipe(data.hits);
  };
  const getUpdate = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  useEffect(() => {
    getRecipes();
  }, [query]);
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          value={search}
          placeholder="Enter your main ingredient..."
          onChange={getUpdate}
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipe.map((rec) => (
          <Recipe
            key={rec.recipe.label}
            title={rec.recipe.label}
            calories={rec.recipe.calories}
            image={rec.recipe.image}
            ingredients={rec.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
