import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDentistsContext } from "./utils/global.context";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = ({ name, username, id }) => {

  const { dentistState, dentistDispatch } = useDentistsContext();

  const getFavorites = () => {

    let favorites = dentistState.favorites.filter(fav => fav.id == id);
    let isStored = favorites == null || favorites.length < 1 ? false : true;

    return isStored;
  }


  const [isFavorite, setIsFavorite] = useState(getFavorites());

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage

    dentistDispatch({type: 'ADD_FAVORITE', payload: {id: id, name: name, username: username}})
    toast("Added to favorites")
    setIsFavorite(true);

  }

  const removeFav = () => {
    dentistDispatch({type: 'REMOVE_FAVORITE', payload: {id: id}})
    toast("Removed from favorites")
    setIsFavorite(false);
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/dentist/${id}`}>
          <img style={{ width: "200px" }} src="./images/doctor.jpg" alt="doctor" />
          <h4>{name}</h4>
          <p>{username}</p>
        </Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={isFavorite ? removeFav : addFav} className="favButton">{isFavorite ? "Remove fav" : "Add fav"}</button>
    </div>
  );
};

export default Card;
