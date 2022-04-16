import { useHistory, useParams } from "react-router-dom"
import { useEffect } from 'react'

import { useFetch } from "../hooks/useFetch"


export default function Article() {
  const { id } = useParams()
  const url = 'http://localhost:3000/articles/' + id
  const { data: article, error, isPending } = useFetch(url)
  const historyObj = useHistory()

  useEffect(() => {
    // If there is an error, redirect users to the main page
    if (error) {
      setTimeout(() => historyObj.push('/'), 2000)
    }
  }, [error, historyObj])
  

  return (
    <>
      {isPending && <div>LOADING...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>By {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </>
  )
}
