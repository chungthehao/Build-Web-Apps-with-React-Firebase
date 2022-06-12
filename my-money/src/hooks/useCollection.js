import { useEffect, useRef, useState } from 'react'
import { projectFirestore } from '../firebase/config'

export const useCollection = (collectionName, _query = null, _orderBy = null) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  // Not using useRef --> infinite loop
  // _query is an array, so it's "different" each time we run the code
  const query = useRef(_query).current
  const orderBy = useRef(_orderBy).current

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

    if (query) {
      ref = ref.where(...query)
    }
    if (orderBy) {
      ref = ref.orderBy(...orderBy)
    }

    const unsubscribe = ref.onSnapshot(listenerCallback, errorCallback)

    // Cleanup function
    return () => unsubscribe()
  }, [collectionName, query, orderBy])

  return { documents, error }
}