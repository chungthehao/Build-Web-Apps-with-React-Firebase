import { useState } from 'react'
import { projectAuth } from '../firebase/config'


export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const signup = async (email, password, displayName) => {
    setError(null) // reset error
    setIsPending(true)

    try {
      // Signup process  
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      console.log(res)

      if ( ! res) {
        throw new Error('Could not complete the register!')
      }

      // Add display name
      await res.user.updateProfile({ displayName })

      isPending(false)
    } catch (err) {
      console.log(err.message)
      setError(err.message)
      setIsPending(false)
    }
  }

  return { error, isPending, signup }
}