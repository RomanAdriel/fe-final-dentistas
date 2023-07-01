import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDentistsContext } from "./utils/global.context";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { brown, yellow } from "@mui/material/colors";
import StarIcon from '@mui/icons-material/Star';


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
    toast.success("Added to favorites", {
      theme: dentistState.theme == "dark" ? "dark" : "light"
    })
    setIsFavorite(true);

  }

  const removeFav = () => {
    dentistDispatch({type: 'REMOVE_FAVORITE', payload: {id: id}})
    toast.success("Removed from favorites", {
      theme: dentistState.theme == "dark" ? "dark" : "light"
    })
    setIsFavorite(false);
  }

  return (
    <div className={dentistState.theme == "dark" ? "card card-dark" : "card"}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/dentist/${id}`}>
          <img style={{ width: "200px" }} src="./images/doctor.jpg" alt="doctor" />
          <h4>{name}</h4>
          <p>{username}</p>
        </Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <Button sx={{ marginBottom: "1rem", backgroundColor: dentistState.theme == 'dark' ? brown[700] : brown[200] }} onClick={isFavorite ? removeFav : addFav} className="favButton">
        {isFavorite ?
        <StarIcon sx={{ color: yellow[300] }}></StarIcon>
          :
          <StarBorderIcon sx={{ color: yellow[300] }}></StarBorderIcon>}
        </Button>
    </div>
  );
};

export default Card;
