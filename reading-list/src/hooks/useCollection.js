import { useState, useEffect } from 'react'
import { db } from '../firebase/config'
import { collection, onSnapshot } from 'firebase/firestore'


export const useCollection = collectionName => {
  const [documents, setDocuments] = useState(null)

  useEffect(() => {
    let ref = collection(db, collectionName)

    const unsub = onSnapshot(ref, snapshot => {
      const tempResults = []

      snapshot.docs.forEach(doc => {
        tempResults.push({ id: doc.id, ...doc.data() })
      })

      setDocuments(tempResults)
    })

    return () => unsub()
  }, [collectionName])

  return { documents }
}