import "./App.css";
import Header from "./components/Header";
import Guests from "./components/Guests";
import AddGuest from "./components/AddGuest";


import { useState } from "react";

function App() {
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
    console.log(guest)
  }
 
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
      <Header title="Guest List" />
      <AddGuest onAdd={addGuest} />
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
