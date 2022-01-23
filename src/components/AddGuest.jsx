import { useState } from "react";


const AddGuest = (onAdd) => {

  const [name, setName ] = useState('')
  const [attending, setAttending] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if(!name) {
      alert('Please add a name')
      return
    }

    onAdd({name, attending})

    setName('')
    setAttending(false)
  }

  return (
  <form className ='add-form' onSubmit={onSubmit}>
    
    <div className='form-control'>
      <label>Guest</label>
      <input type='text' placeholder='Add Guest' value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
    
    <div className='form-control form-control-check'>
      <label>Attending?</label>
      <input 
        type='checkbox' 
        value={attending}
        checked={attending}
        onChange={(e) => setAttending(e.currentTarget.checked)}/>
    </div>

    <input type='submit' value='Add Guest'/>

  </form>);
  
};

export default AddGuest;
