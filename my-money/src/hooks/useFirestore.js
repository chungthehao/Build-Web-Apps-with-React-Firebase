import { useEffect, useReducer, useState } from "react"
import { projectFirestore } from "../firebase/config"

const firestoreReducer = (state, action) => {
  switch (action.type) {

    default: 
      return state
  }
}

const initialValue = {
  document: null,
  error: null,
  success: null,
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

  // Add a document
  const addADocument = document => {
    ref.add(document)
  }

  // Delete a document
  const deleteADocument = document => {
    
  }

  return { response, addADocument, deleteADocument }
}