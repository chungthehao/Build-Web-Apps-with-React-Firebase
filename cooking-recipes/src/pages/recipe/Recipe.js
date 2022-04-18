import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

import './Recipe.css'


export default function Recipe() {
  const { id } = useParams()
  const { data: recipe, error, isPending } = useFetch('http://localhost:3000/recipes/' + id)

  return (
    <div className="recipe">
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>LOADING ...</p>}
      {recipe && <h1>{recipe.title}</h1>}
    </div>
  )
}