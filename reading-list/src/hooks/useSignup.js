import { useState } from "react"
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from "./useAuthContext"


export const useSignup = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const signup = (email, password) => {
    setError(null) // Reset

    createUserWithEmailAndPassword(auth, email, password)
      .then(res => {
        dispatch({ type: 'LOGIN', payload: res.user })
      })
      .catch(err => {
        console.log(err.message)
        setError(err.message)
      })
  }

  return { signup, error }
}