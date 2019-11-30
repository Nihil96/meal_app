import React,{useEffect, useState} from 'react';
import "./App.css";
import Recipe from "./Recipe";

export default function App() {

  const APP_ID = 'ffac041e';
  const APP_KEY = '184644c4e4130dad8a241d22f40ed41f';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect( ()=>{
    getRecipes();
  }, [query])

  const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const handleChange =e=>{
    setSearch(e.target.value);
    
  }

  const handleSubmit = e =>{
    e.preventDefault();

    setQuery(search);
    setSearch('')
  }


  // const removeMeal = () =>{
  //   const filter = recipes.filter(recipe => !recipe.recipe.label)
  //   setRecipes(filter)
  // }

  return (
    <div className="app">
        <div className="navbar">
          <h3 className="nav-title">Delicious recipe meal</h3>
            <form className="searchForm" onSubmit={handleSubmit}>
              <input className="searchBar" type="text" value={search} placeholder="search meal" onChange={handleChange}/>
              <button className="searchButton" type="submit">Search</button>
            </form>
        </div>
        <div className="meal-container">
          {recipes.map(recipe => (
            <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients.map(ingre => (
              ingre.text + ', '
            ))}
            dietLabels={recipe.recipe.dietLabels.map(label => (
              label
            ))}
            
            />
          ))}
        </div>
    </div>
  )
}


