import { FaTimes } from 'react-icons/fa'

const Guest = ({ guest, onDelete, onToggle }) => {
  return (
  <div className= {`guest ${guest.attending ? 'attending' : ''}` } onDoubleClick = {() => onToggle(guest.id)}>
    <h3>
      {guest.name} 
      <FaTimes 
        style={{ color: 'red', cursor: 'pointer'}}
        onClick={() => onDelete(guest.id)}
      />
    </h3>
  </div>)
  
};

export default Guest;
