import Guest from "./Guest";

const Guests = ({ guests, onDelete, onToggle }) => {
  return (
    <>
      {guests.map((guest) => (
        <Guest key={guest.id} guest={guest} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </>
  );
};

export default Guests;
