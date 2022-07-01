import { useState } from "react"
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'


export const useLogin = () => {
  const [error, setError] = useState(null)

  const login = (email, password) => {
    setError(null) // Reset

    signInWithEmailAndPassword(auth, email, password)
      .then(res => {
        console.log('Logged user in', res.user)
      })
      .catch(err => {
        console.log(err.message)
        setError(err.message)
      })
  }

  return { login, error }
}