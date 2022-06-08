import { useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"


export const useLogout = () => {
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const logout = async () => {
    setError(null) // Reset
    setIsPending(true)

    try {
      // Sign the current user out (firebase)
      await projectAuth.signOut()

      // Dispatch 'LOGOUT' action
      dispatch({ type: 'LOGOUT' })

      setIsPending(false)
    } catch (err) {
      console.log(err.message)
      setError(err.message)
      setIsPending(false)
    }
  }

  return { logout, error, isPending }
}