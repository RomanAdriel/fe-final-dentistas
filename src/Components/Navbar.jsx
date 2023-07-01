import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Routes/utils/routes'
import { useDentistsContext } from './utils/global.context';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

const Navbar = () => {

  const { dentistState, dentistDispatch } = useDentistsContext();

  return (
    <nav className={dentistState.theme == 'dark' ? "navbar-dark" : ""}>
      <ul>
        <Link to={routes.home}><li>Home</li></Link>
        <Link to={routes.contact}><li>Contact</li></Link>
        <Link to={routes.favorites}><li>Favorites</li></Link>
      </ul>
      <label>Dark Mode</label>
      {dentistState.theme == 'light' && <ToggleOffIcon style={{ padding: "0rem 1.5rem"}} onClick={() => dentistDispatch({type: 'CHANGE_THEME', payload: 'dark'})}></ToggleOffIcon>}
      {dentistState.theme == 'dark' && <ToggleOnIcon style={{ padding: "0rem 1.5rem"}} onClick={() => dentistDispatch({type: 'CHANGE_THEME', payload: 'light'})}></ToggleOnIcon>}
    </nav>
  )
}

export default Navbar