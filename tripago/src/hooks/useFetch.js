import { useState, useEffect, useRef } from 'react'

export const useFetch = (url, _options) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  const options = useRef(_options).current

  useEffect(() => {
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
        // console.log('err.name -->', err.name)
        // console.log('err.message -->', err.message)
        if (err.name !== 'AbortError') {
          setIsPending(false)
          setError('Could not fetch the data.')
        }
      }
    }
    fetchData()

    return () => controller.abort()
  }, [url, options])

  console.log(data)
  return { data, isPending, error }
}