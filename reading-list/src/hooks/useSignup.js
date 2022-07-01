import { useState } from "react"
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'


export const useSignup = () => {
  const [error, setError] = useState(null)

  const signup = (email, password) => {
    setError(null) // Reset

    createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        console.log('Signed up user', res.user)
      })
      .catch(err => {
        console.log(err.message)
        setError(err.message)
      })
  }

  return { signup, error }
}