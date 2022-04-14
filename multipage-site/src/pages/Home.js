import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

import './Home.css'

export default function Home() {
  const { data: articles, isPending, error } = useFetch('http://localhost:3000/articles')
  console.log(articles)

  return (
    <div className='home'>
      <h2>Articles</h2>
      {isPending && <div>LOADING...</div>}
      {error && <div>{error}</div>}
      {articles && articles.map(article => (
        <div className='card' key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <Link to={`/articles/${article.id}`}>Read more...</Link>
        </div>
      ))}
    </div>
  )
}
