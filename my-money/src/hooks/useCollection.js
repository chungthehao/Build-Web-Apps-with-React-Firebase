import { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config'

export const useCollection = collectionName => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  const listenerCallback = snapshot => {
    let results = []

    snapshot.docs.forEach(doc => {
      results.push({ ...doc.data(), id: doc.id })
    })
    
    // Update states
    setDocuments(results)
    setError(null)
  }

  const errorCallback = err => {
    console.log(err)
    setError('Could not fetch the documents.')
  }

  useEffect(() => {
    let ref = projectFirestore.collection(collectionName)

    const unsubscribe = ref.onSnapshot(listenerCallback, errorCallback)

    // Cleanup function
    return () => unsubscribe()
  }, [collectionName])

  return { documents, error }
}