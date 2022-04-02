import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  const delay = n => new Promise(r => setTimeout(r, n))

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true)
      try {
        const res = await fetch(url)

        if (!res.ok) {
          throw new Error(res.statusText)
        }
        await delay(1500)
        const json = await res.json()
        setIsPending(false)
        setData(json)
        setError(null)
      } catch (err) {
        console.log('err.message -->', err.message)
        setIsPending(false)
        setError('Could not fetch the data.')
      }
    }
    fetchData()
  }, [url])

  console.log(data)
  return { data, isPending, error }
}