import { useState, useEffect, useCallback } from 'react'
import './TripList.css'

export default function TripList() {
  const [trips, setTrips] = useState([])
  const [url, setUrl] = useState('http://localhost:3000/trips')

  const fetchTrips = useCallback(async () => {
    const res = await fetch(url)
    const json = await res.json()
    setTrips(json)
  }, [url])

  useEffect(() => {
    fetchTrips()
  }, [fetchTrips])

  console.log(trips)

  return (
    <div className='trip-list'>
      <h2>Trip List</h2>
      <ul>
        {trips.map(trip => 
          <li key={trip.id}>
            <h3>{trip.title}</h3>
            <p>{trip.price}</p>
          </li>)}
      </ul>
      <div className="filters">
        <button onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>European trips</button>
        <button onClick={() => setUrl('http://localhost:3000/trips')}>All trips</button>
      </div>
    </div>
  )
}