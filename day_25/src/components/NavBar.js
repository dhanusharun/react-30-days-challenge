import  React from 'react'
import { Link } from 'react-router-dom'
import { Person as PersonIcon, Movie as MovieIcon, Home as HomeIcon }  from '@mui/icons-material';

const NavBar = () => {

    const location =  window.location.pathname;
    const [activeIcon, setActiveIcon] = React.useState(location);

    const handleClick = (icon) => {
        setActiveIcon(icon);
    }

  return (
    <nav className='nav-bar-wrapper'>
      <ul>
        <li className='icon' ><Link to="/search" ><MovieIcon sx={{color: "#FA474A"}} /></Link></li>
        <li><Link to="/search"  onClick={() => {handleClick("/")}} ><HomeIcon sx={activeIcon === "/" ?  {color: "#FFFFFF"} : {color: "#59688D"} } /></Link></li>
        <li><Link to="/account"  onClick={() => {handleClick("/account")}}><PersonIcon sx={activeIcon === "/account" ?  {color: "#FFFFFF"} : {color: "#59688D"}} /></Link></li>
      </ul>
    </nav>
  )
}

export default NavBar