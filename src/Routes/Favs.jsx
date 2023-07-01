import React from "react";
import Card from "../Components/Card";
import { useDentistsContext } from "../Components/utils/global.context";

const Favs = () => {

  const { dentistState } = useDentistsContext();

  return (
    <div className={dentistState.theme == 'dark' ? "dark" : ""} style={{padding: "1.5rem"}}>
      <h1>Dentists Favorites</h1>
      <div className="card-grid">
        {dentistState.favorites.length == 0 ? <h2>You have no dentists in your favorites</h2> : dentistState.favorites.map((fav) => <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id}/>)}
      </div>
    </div>
  );
};

export default Favs;
