import React from "react";
import "./App.css";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients, url }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <ul>
        <h2>Ingredients</h2>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>{calories.toFixed(0) / 10} Kcal/ portion</p>
      <img src={image} alt="Recipe Image"></img>
      <a href={url}>
      <button className="link-button">
        Full Recipe
      </button>
      </a>
    </div>
  );
};
export default Recipe;
