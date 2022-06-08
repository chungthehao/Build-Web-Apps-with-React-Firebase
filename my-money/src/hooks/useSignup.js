import { useEffect, useState } from 'react'
import { projectAuth } from '../firebase/config'
import { useAuthContext } from './useAuthContext'


export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [isUnmounted, setIsUnmounted] = useState(false)
  const { dispatch } = useAuthContext()

  useEffect(() => {
    return () => setIsUnmounted(true)
  }, [])

  const signup = async (email, password, displayName) => {
    setError(null) // reset error
    setIsPending(true)

    try {
      // Signup process  
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)

      if ( ! res) {
        throw new Error('Could not complete the register!')
      }

      // Add display name
      await res.user.updateProfile({ displayName })

      // Dispatch 'LOGIN' action
      dispatch({
        type: 'LOGIN',
        payload: res.user
      })

      if ( ! isUnmounted) {
        setIsPending(false)
      }
    } catch (err) {
      console.log(err.message)
      
      if ( ! isUnmounted) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  return { error, isPending, signup }
}