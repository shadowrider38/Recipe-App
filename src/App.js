import React, { useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe'

const App = () => {
  const APP_ID = "037eccd6";
  const APP_KEY = "a011784684292fdbbb1946fae62b0f21";

    const [recipes, setRecipes] = useState([]);

  useEffect(async () => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return (
    <div className = "App">
      <form className = "search-form">
        <input className = "search-bar" type = "text"/>
        <button className = "search-button" type = "submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe title = {recipe.recipe.label} calories = {recipe.recipe.calories} image = {recipe.recipe.image}/>
      ))}
    </div>
  )
}

export default App;
