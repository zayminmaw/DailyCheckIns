import React from "react";
import style from "./recipes.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ing) => (
          <li>{ing.text}</li>
        ))}
        <li>
          <p>Calories : {calories.toFixed(2)}</p>
        </li>
      </ul>
      <img src={image} alt={title} className={style.image} />
    </div>
  );
};

export default Recipe;
