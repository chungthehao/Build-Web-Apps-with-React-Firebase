import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import { useTheme } from '../hooks/useTheme'

import './Navbar.css'

export default function Navbar() {
  const { color } = useTheme()

  return (
    <div className="navbar" style={{background: color}}>
      <nav>
        <Link className='brand' to='/'>
          <h1>Cooking Henry</h1>
        </Link>
        <Searchbar />
        <Link to='/create'>
          Create Recipe
        </Link>
      </nav>
    </div>
  )
}

