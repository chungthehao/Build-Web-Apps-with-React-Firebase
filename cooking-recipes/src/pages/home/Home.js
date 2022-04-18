import { Link } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

import './Home.css'


export default function Home() {
  const { data: recipes, error, isPending } = useFetch('http://localhost:3000/recipes')
  
  return (
    <div className='home'>
      {isPending && <p className='loading'>LOADING...</p>}
      {error && <p className='error'>{error}</p>}
      {recipes && recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.cookingTime}</p>
          <Link to={`/recipes/${recipe.id}`}>Read more...</Link>
        </div>
      ))}
    </div>
  )
}
