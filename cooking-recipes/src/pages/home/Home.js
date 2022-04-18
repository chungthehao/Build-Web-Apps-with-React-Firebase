import RecipeList from '../../components/RecipeList'
import { useFetch } from '../../hooks/useFetch'

import './Home.css'


export default function Home() {
  const { data: recipes, error, isPending } = useFetch('http://localhost:3000/recipes')
  
  return (
    <div className='home'>
      {isPending && <p className='loading'>LOADING...</p>}
      {error && <p className='error'>{error}</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  )
}
