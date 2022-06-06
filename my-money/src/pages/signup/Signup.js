import { useState } from 'react'
import styles from './Signup.module.css'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    console.log(email, password, name)
  }

  return ( 
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label>
        <span>Email:</span>
        <input 
          type="email" 
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input 
          type="password"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>Display name:</span>
        <input 
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
      </label>
      <button className="btn">Signup</button>
    </form>
  );
}

export default Signup;