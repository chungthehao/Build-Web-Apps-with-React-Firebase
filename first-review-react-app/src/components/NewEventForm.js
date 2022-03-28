import { useState } from 'react'
import './NewEventForm.css'


export default function NewEventForm() {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  const resetForm = () => {
    setTitle('')
    setDate('')
  }

  return (
    <form className="new-event-form">
      <label>
        <span>Event Title:</span>
        <input 
          type="text" 
          onChange={e => setTitle(e.target.value)} 
          value={title} />
      </label>

      <label>
        <span>Event Date:</span>
        <input 
          type="date" 
          onChange={e => setDate(e.target.value)} 
          value={date} />
      </label>

      <button>Submit</button>

      <p>Title - {title}</p>
      <p>Date - {date}</p>

      <p onClick={resetForm}>Reset the form</p>
    </form>
  )
}
