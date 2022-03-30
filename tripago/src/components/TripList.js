import { useState } from 'react'

export default function TripList() {
  const [trips, setTrips] = useState([])

  fetch("http://localhost:3000/trips")
  .then(res => res.json())
  .then(json => setTrips(json))

  console.log(trips)

  return (
    <div>
      <h2>TripList</h2>
    </div>
  )
}
