import { useState, useEffect, useRef } from 'react'
import { db } from '../firebase/config'
import { collection, onSnapshot, query, where } from 'firebase/firestore'


export const useCollection = (collectionName, _q) => {
  const [documents, setDocuments] = useState(null)

  const q = useRef(_q).current

  useEffect(() => {
    let ref = collection(db, collectionName)

    if (q) {
      ref = query(ref, where(...q))
    }

    const unsub = onSnapshot(ref, snapshot => {
      const tempResults = []

      snapshot.docs.forEach(doc => {
        tempResults.push({ id: doc.id, ...doc.data() })
      })

      setDocuments(tempResults)
    })

    return () => unsub()
  }, [collectionName, q])

  return { documents }
}