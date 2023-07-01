import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Routes/utils/routes'
import { useDentistsContext } from './utils/global.context';
import { DarkMode, DarkModeOutlined } from '@mui/icons-material';

const Navbar = () => {

  const { dentistState, dentistDispatch } = useDentistsContext();

  return (
    <nav className={dentistState.theme == 'dark' ? "navbar-dark" : ""}>
      <ul>
        <Link to={routes.home}><li>Home</li></Link>
        <Link to={routes.contact}><li>Contact</li></Link>
        <Link to={routes.favorites}><li>Favorites</li></Link>
        {dentistState.theme == 'light' && <Link><DarkMode style={{ padding: "0rem 1.5rem"}} onClick={() => dentistDispatch({type: 'CHANGE_THEME', payload: 'dark'})}></DarkMode></Link>}
      {dentistState.theme == 'dark' && <Link><DarkModeOutlined style={{ padding: "0rem 1.5rem"}} onClick={() => dentistDispatch({type: 'CHANGE_THEME', payload: 'light'})}></DarkModeOutlined></Link>}
      </ul>
    </nav>
  )
}

export default Navbar