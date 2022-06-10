import { useEffect, useReducer, useState } from "react"
import { projectFirestore } from "../firebase/config"

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING': 
      return { 
        isPending: true, 
        document: null, 
        error: null, 
        success: false 
      }
    case 'ADDED_DOCUMENT': 
      return { 
        isPending: false, 
        document: action.payload, 
        error: null, 
        success: true 
      }
    case 'ERROR': 
      return { 
        isPending: false, 
        document: null, 
        error: action.payload, 
        success: false 
      }
    default: 
      return state
  }
}

const initialValue = {
  document: null,
  error: null,
  success: false,
  isPending: false
}

export const useFirestore = (collectionName) => {
  const [isUnmounted, setIsUnmounted] = useState(false)
  const [response, dispatch] = useReducer(firestoreReducer, initialValue)

  // Cleaning function (just in case the component using this hook is unmounted)
  useEffect(() => {
    return () => setIsUnmounted(true)
  }, [])

  // A reference to the collection (just for convenience)
  const ref = projectFirestore.collection(collectionName)

  // A helper func, check if not unmounted first
  const dispatchIfNotUnmounted = action => {
    if ( ! isUnmounted) {
      dispatch(action)
    }
  }

  // Add a document
  const addADocument = async documentData => {
    dispatch({ type: 'IS_PENDING' })

    try {
      const document = await ref.add(documentData)

      dispatchIfNotUnmounted({ 
        type: 'ADDED_DOCUMENT',
        payload: document
      })
    } catch (err) {
      console.log(err.message)
      dispatchIfNotUnmounted({
        type: 'ERROR',
        payload: err.message
      })
    }
  }

  // Delete a document
  const deleteADocument = async documentData => {
    
  }

  return { response, addADocument, deleteADocument }
}