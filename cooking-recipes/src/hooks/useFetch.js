import { useState, useEffect } from "react"

export const useFetch = (url, method = 'GET') => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [postData, setPostData] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async (options = null) => {
      setIsPending(true)
      
      try {
        // console.log('OPTs', options)
        const res = await fetch(url, { ...options, signal: controller.signal })
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        const data = await res.json()

        setIsPending(false)
        setData(data)
        setError(null)
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted")
        } else {
          setIsPending(false)
          setError('Could not fetch the data')
        }
      }
    }

    if (method === 'GET') {
      fetchData()
    } else if (method === 'POST' && postData) {
      fetchData({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
    }

    return () => {
      controller.abort()
    }

  }, [url, postData, method])

  return { data, isPending, error, setPostData }
}