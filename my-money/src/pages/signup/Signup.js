import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import styles from './Signup.module.css'

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const { signup, error, isPending } = useSignup()

  const handleSubmit = e => {
    e.preventDefault()

    signup(email, password, name)
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
      {!isPending && <button className="btn">Signup</button>}
      {isPending && <button className="btn" disabled>Loading</button>}
      {error && <p>{error}</p>}
    </form>
  );
}

export default Signup;