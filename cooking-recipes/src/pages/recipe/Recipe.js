import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'
import { useTheme } from '../../hooks/useTheme'

import './Recipe.css'


export default function Recipe() {
  const { id } = useParams()
  const { mode } = useTheme()

  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState('')
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    setIsPending(true)
    
    projectFirestore.collection('recipes').doc(id).get().then((doc) => {
      if (doc.exists) {
        setIsPending(false)
        setRecipe(doc.data())
      } else {
        setIsPending(false)
        setError('This recipe does not exist!')
      }
    })
  }, [id])

  const handleUpdate = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title: recipe.title + ' (updated)'
    })
  }

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>LOADING ...</p>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <p className="method">{recipe.method}</p>
          <button onClick={handleUpdate}>Update this recipe</button>
        </>
      )}
    </div>
  )
}