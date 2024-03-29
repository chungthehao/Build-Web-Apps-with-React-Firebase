import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { projectFirestore } from '../../firebase/config'

import './Create.css'


export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const newIngredientRef = useRef(null)
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    const doc = { title, method, cookingTime: cookingTime + ' minutes', ingredients }

    try {
      await projectFirestore.collection('recipes').add(doc)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const handleAddNewIngredient = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()
    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient('')
    newIngredientRef.current.focus()
  }

  // console.log(ingredients)

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input 
            type="text" 
            onChange={event => setTitle(event.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input 
              type="text" 
              onChange={event => setNewIngredient(event.target.value)}
              value={newIngredient}
              ref={newIngredientRef}
            />
            <button className="btn" onClick={handleAddNewIngredient}>Add</button>
          </div>
        </label>
        <p>Current ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>

        <label>
          <span>Recipe method:</span>
          <textarea 
            onChange={event => setMethod(event.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input 
            type="number" 
            onChange={event => setCookingTime(event.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  )
}