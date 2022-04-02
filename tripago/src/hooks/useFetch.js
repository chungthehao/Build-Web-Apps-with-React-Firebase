import { useState, useEffect } from 'react'

export const useFetch = (url, name) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  // const delay = n => new Promise(r => setTimeout(r, n))

  useEffect(() => {
    console.log(name)
    const controller = new AbortController()

    const fetchData = async () => {
      setIsPending(true)
      try {
        const res = await fetch(url, { signal: controller.signal })

        if (!res.ok) {
          throw new Error(res.statusText)
        }

        const json = await res.json()
        setIsPending(false)
        setData(json)
        setError(null)
      } catch (err) {
        console.log('err.name -->', err.name)
        console.log('err.message -->', err.message)
        if (err.name !== 'AbortError') {
          setIsPending(false)
          setError('Could not fetch the data.')
        }
      }
    }
    fetchData()

    return () => controller.abort()
  }, [url, name])

  console.log(data)
  return { data, isPending, error }
}