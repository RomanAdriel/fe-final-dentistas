import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useDentistsContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { dentistState } = useDentistsContext();

  return (
    <div className={dentistState.theme == 'dark' ? "dark" : ""}>
      <h1>Dentists Favorites</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {dentistState.favorites.length == 0 ? <h2>You have no dentists in your favorites</h2> : dentistState.favorites.map((fav) => <Card key={fav.id} name={fav.name} username={fav.username} id={fav.id}/>)}
      </div>
    </div>
  );
};

export default Favs;
