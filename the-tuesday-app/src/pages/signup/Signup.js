import { useState } from 'react';
import './Signup.css'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [thumbnail, setThumbnail] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()

    console.log(email, password, displayName)
  }

  return ( 
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Sign up</h2>
      <label>
        <span>Email:</span>
        <input 
          type="email" 
          required
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input 
          type="password" 
          required
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Display name:</span>
        <input 
          type="text" 
          required
          onChange={e => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>User profile:</span>
        <input 
          type="file"
          required
        />
      </label>
      <button className="btn">Create this account</button>
    </form> 
  )
}

export default Signup;