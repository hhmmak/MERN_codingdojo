import {useContext} from 'react';
import NameContext from '../context/NameContext';

const navStyle = {
  backgroundColor: "#9826cc",
  display: "flex",
  justifyContent: "flex-end"
};


const Navbar = () => {
  
  const navName = useContext(NameContext);
  
  return (
    <nav class="navbar navbar-dark" style={navStyle}>
      <span class="navbar-brand mb-0 h1">Hi, {navName.name}!</span>
    </nav>
  )
}
export default Navbar;