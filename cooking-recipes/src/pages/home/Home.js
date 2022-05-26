import { useEffect, useState } from 'react'
import RecipeList from '../../components/RecipeList'
import { projectFirestore } from '../../firebase/config'

import './Home.css'


export default function Home() {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState('')
  const [recipes, setRecipes] = useState(null)

  useEffect(() => {
    setIsPending(true)

    projectFirestore.collection('recipes').get().then(snapshot => {
      if (snapshot.empty) {
        setError('Recipes not found.')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
        })
        setRecipes(results)
        setIsPending(false)
      }
    }).catch(err => {
      setError(err.message)
      setIsPending(false)
    })
  }, [])
  
  return (
    <div className='home'>
      {isPending && <p className='loading'>LOADING...</p>}
      {error && <p className='error'>{error}</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  )
}
