import { useEffect, useState } from "react"
import { projectAuth, projectFirestore } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"


export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [isUnmounted, setIsUnmounted] = useState(false)
  const { dispatch } = useAuthContext()

  useEffect(() => {
    return () => setIsUnmounted(true)
  }, [])

  const login = async (email, password) => {
    setError(null) // Reset
    setIsPending(true)

    try {
      // Sign-in process (firebase)
      const res = await projectAuth.signInWithEmailAndPassword(email, password)

      // Update online status
      await projectFirestore.collection('users').doc(res.user.uid).update({ online: true })

      // Dispatch 'LOGIN' action (to update our frontend state)
      dispatch({ type: 'LOGIN', payload: res.user })

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

  return { login, error, isPending }
}