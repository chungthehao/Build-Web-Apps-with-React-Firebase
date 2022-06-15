import { createContext, useEffect, useReducer } from "react"
import { projectAuth } from "../firebase/config"


const AuthContext = createContext()

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    case 'AUTH_IS_READY':
      return { ...state, user: action.payload, authIsReady: true }
    default: 
      return state
  }
}

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    authReducer, 
    { user: null, authIsReady: false }
  )

  // Check the authentication with firebase when the web is first loaded.
  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((firebaseUser) => {
      dispatch({
        type: 'AUTH_IS_READY',
        payload: firebaseUser
      })

      // onAuthStateChanged run the callback for the 1st time when web first loaded, and when the user signs in/out, we only need to run the callback once
      unsub() 
    })
  }, [])

  console.log('AuthContext - STATE', state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider, authReducer, AuthContext }