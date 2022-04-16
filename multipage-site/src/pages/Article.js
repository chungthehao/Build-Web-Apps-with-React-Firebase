import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"


export default function Article() {
  const { id } = useParams()
  const url = 'http://localhost:3000/articles/' + id
  const { data: article, error, isPending } = useFetch(url)

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
