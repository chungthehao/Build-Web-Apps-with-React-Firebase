import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"


export const useDocument = (collectionName, documentId) => {
  const [document, setDocument] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    setError(null) // Reset
    setDocument(null) // Reset
    const ref = projectFirestore.collection(collectionName).doc(documentId)

    // Get realtime data
    const unsubscribe = ref.onSnapshot(snapshot => {
      if (snapshot.exists) {
        setDocument({ ...snapshot.data(), id: snapshot.id })
      } else {
        setError("This data doesn't exists.")
      }
    }, err => {
      console.log(err.message)
      setError('Failed to get the document.')
    })

    // Cleanup function
    return () => unsubscribe()
  }, [collectionName, documentId])

  return { document, error }
}