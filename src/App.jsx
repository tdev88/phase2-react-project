import "./App.css";
import Header from "./components/Header";
import Guests from "./components/Guests";
import AddGuest from "./components/AddGuest";

import { useState, useEffect } from "react";

function App() {
  
//useState
  //Add Button State
  const [showAddGuestButton, setShowAddGuestButton] = useState(false);
  //Guests State
  const [guests, setGuests] = useState([]);

//useEffect (get data from db.json)
  useEffect(() => {
    const fetchGuests = async () => {
      const response = await fetch('http://localhost:5000/guests')
      const data = await response.json()
      setGuests(data)
    }
    
    fetchGuests()
  }, [])

  //Add Guest
  const addGuest = async (guest) => {
    const response = await fetch(`http://localhost:5000/guests`, {
      method: `POST`,
      headers: {
        'Content-type': 'application/json'},
        body: JSON.stringify(guest)
    })

    const data = await response.json()

    setGuests([...guests, data])

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newGuest = { id, ...guest };
    // setGuests([...guests, newGuest]);
  };

  //Delete Guest
  const deleteGuest = async (id) => {
    await fetch(`http://localhost:5000/guests${id}`, {
      method: `DELETE`,
    })

    setGuests(guests.filter((guest) => guest.id !== id));
  };

  // Toggle Attendance
  const toggleAttendance = (id) => {
    setGuests(
      guests.map((guest) =>
        guest.id === id ? { ...guest, attending: !guest.attending } : guest
      )
    );
  };

  //Render page
  return (
    <div className="container">
      <Header
        title="Guest List"
        onAdd={() => setShowAddGuestButton(!showAddGuestButton)}
        showAddButton={showAddGuestButton}
      />
      {showAddGuestButton && <AddGuest onAdd={addGuest} />}
      {guests.length > 0 ? (
        <Guests
          guests={guests}
          onDelete={deleteGuest}
          onToggle={toggleAttendance}
        />
      ) : (
        "Guest List is empty"
      )}
    </div>
  );
}

export default App;
