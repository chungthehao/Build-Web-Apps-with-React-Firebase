import { useLocation } from 'react-router-dom'

export default function Contact() {
  const queryString = useLocation().search
  console.log(queryString) // ?name=henry
  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get('name')
  console.log(name) // henry

  return (
    <div>
      <h2>Hey {name}, contact us here...</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, temporibus facere officiis sunt debitis illum natus vero magnam voluptatem, numquam ea deleniti doloribus possimus maxime minus, ad assumenda iure delectus?</p>
    </div>
  )
}
