import { createContext, useReducer } from "react"


const AuthContext = createContext()

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
    default: 
      return state
  }
}

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null })

  console.log('AuthContext - STATE', state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider, authReducer, AuthContext }