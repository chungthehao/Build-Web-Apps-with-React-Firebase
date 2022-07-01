import { useEffect, useState } from 'react'
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'

export default function Home() {
  const [books, setBooks] = useState(null)

  useEffect(() => {
    const ref = collection(db, 'books')

    getDocs(ref).then(snapshop => {
      const tempResults = []
      snapshop.docs.forEach(doc => {
        tempResults.push({ id: doc.id, ...doc.data() })
      })

      setBooks(tempResults)
    })
  }, [])

  return (
    <div>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
