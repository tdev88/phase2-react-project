import "./App.css";
import Header from "./components/Header";
import Guests from "./components/Guests";
import AddGuest from "./components/AddGuest";

import { useState } from "react";

function App() {
  //Add Button State
  const [showAddGuestButton, setShowAddGuestButton] = useState(false);
  //Guests State
  const [guests, setGuests] = useState([
    {
      id: 1,
      name: "Victoria",
      attending: true,
    },

    {
      id: 2,
      name: "Tracy",
      attending: true,
    },

    {
      id: 3,
      name: "Stephen",
      attending: true,
    },
  ]);

  //Add Guest
  const addGuest = (guest) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newGuest = { id, ...guest };
    setGuests([...guests, newGuest]);
  };

  //Delete Guest
  const deleteGuest = (id) => {
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
