import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDentistsContext } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const { dentistState, dentistDispatch } = useDentistsContext();
  const params = useParams();
  const dentistUrl = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(() => {

    axios(dentistUrl).then(res => {
      console.log(res);
      dentistDispatch({type: 'GET_SINGLE_DENTIST', payload: res.data})

    })

  })
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Name: {dentistState.singleDentist.name}</h1>
      <h1>Email: {dentistState.singleDentist.email}</h1>
      <h1>Phone Number: {dentistState.singleDentist.phone}</h1>
      <h1>Website: {dentistState.singleDentist.website}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail