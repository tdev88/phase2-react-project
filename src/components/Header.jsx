import Button from "./Button";

const Header = (title) => {
  
  const onClick = () => {
    console.log('Click')
  }
  
  return (
    <header className='header'>
      <h1 >Guest List</h1>
      <Button 
        color='green' 
        text='Add' 
        onClick={onClick}
      />
    </header>
  )
    
}

export default Header;
