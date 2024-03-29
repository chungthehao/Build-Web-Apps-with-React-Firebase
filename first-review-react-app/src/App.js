import './App.css';
import React, { useState } from 'react'
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = newEvent => {
    setEvents(prevEvents => {
      return [...prevEvents, newEvent]
    })
    setShowModal(false)
  }

  const handleClick = (id) => {
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

      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {showModal && <Modal isSalesModal={true}>
        <NewEventForm addEvent={addEvent} />
      </Modal>}

      <div>
        <button onClick={() => setShowModal(true)}>Add New Event</button>
      </div>
    </div>
  );
}

export default App;
