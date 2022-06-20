import { useState } from 'react'
import './Login.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    console.log(email, password)
  }

  return ( 
    <form className='auth-form' onSubmit={handleSubmit}>
      <h2>Log in</h2>
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
      <button className="btn">Log in</button>
      {/* {!isPending && <button className="btn">Log in</button>}
      {isPending && <button className="btn" disabled>Loading</button>}
      {error && <div className='error'>{error}</div>} */}
    </form> 
  )
}

export default Login;