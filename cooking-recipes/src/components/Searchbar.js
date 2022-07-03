import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Searchbar.css'


export default function Searchbar() {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()

  const handleSearch = e => {
    e.preventDefault()
    navigate(`/search?q=${term}`)
  }

  return (
    <div className="searchbar">
      <form onSubmit={handleSearch}>
        <label htmlFor="search">Search:</label>
        <input type="text" id='search' required onChange={e => setTerm(e.target.value)} />
      </form>
    </div>
  )
}
