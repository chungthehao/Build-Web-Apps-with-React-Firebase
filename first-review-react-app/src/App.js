import './App.css';
import { useState } from 'react'
import Title from './components/Title';

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: 'Event 1', id: 1},
    {title: 'Event 2', id: 2},
    {title: 'Event 3', id: 3},
  ])

  console.log(showEvents)

  const handleClick = (id) => {
    console.log(id)

    // setEvents ko cập nhật liền, tới lúc nó cập nhật events có thể đã bị chỗ khác thay đổi giá trị rồi ==> bị cũ
    // setEvents(events.filter((event) => {
    //   return event.id !== id
    // }))

    setEvents((prevEvents) => prevEvents.filter((event) => {
      return event.id !== id
    }))
  }

  return (
    <div className="App">
      <Title title="eligendi maxime officia esse" 
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      <Title title="another title" 
        subtitle="another subtitle" />

      {showEvents && (
        <div>
        <button onClick={() => setShowEvents(false)}>Hide events</button>
      </div>
      )}

      {!showEvents && (
        <div>
        <button onClick={() => setShowEvents(true)}>Show events</button>
      </div>
      )}

      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
