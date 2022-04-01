import { useState, useEffect } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true)
      try {
        const res = await fetch(url)
        // console.log('RES', res)
        if (!res.ok) {
          throw new Error(res.statusText)
        }
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