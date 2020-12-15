import React, { useEffect, useState } from 'react'
import './App.css'
import Recipe from './Recipe'
import Footer from './Footer'


const App = () => {
  const APP_ID = '638c5745'
  const APP_KEY = 'c81bbd5fe06a3b47886b9621b18adaa6'
  //whe yu app run the first time it runs
  const [query, setQuery] = useState('')
  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const updateSearch = e => {
    setSearch(e.target.value)
  }
  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch} />
        <button className='search-button' type='submit'>Search</button>
      </form>
      <div className="recipes">
        {recipes.slice(0,6).map(recipe => (
          <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} url={recipe.recipe.url}/>
        ))}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App;
