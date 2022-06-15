import { useEffect, useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"


export const useLogout = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [isUnmounted, setIsUnmounted] = useState(false)
  const { dispatch } = useAuthContext()

  useEffect(() => {
    return () => setIsUnmounted(true)
  }, [])

  const logout = async () => {
    setError(null) // Reset
    setIsPending(true)

    try {
      // Sign the current user out (firebase)
      await projectAuth.signOut()

      // Dispatch 'LOGOUT' action
      dispatch({ type: 'LOGOUT' })

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

  return { logout, error, isPending }
}