import Button from "./Button";

const Header = ({ title, onAdd, showAddButton }) => {
  
  return (
    <header className='header'>
      <h1 >Guest List</h1>
      <Button 
        color={showAddButton ? 'red' : 'green'} 
        text={showAddButton ? 'Close' : 'Add'} 
        onClick={onAdd}
      />
    </header>
  )
    
}

export default Header;
