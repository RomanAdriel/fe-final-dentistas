import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../Routes/utils/routes'
import { useDentistsContext } from './utils/global.context';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { dentistState, dentistDispatch } = useDentistsContext();

  return (
    <nav className={dentistState.theme == 'dark' ? "dark" : ""}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
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