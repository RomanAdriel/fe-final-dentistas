import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDentistsContext } from '../Components/utils/global.context';
import { Button } from '@mui/material';
import { brown } from '@mui/material/colors';


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

  const navigate = useNavigate();
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
    <div className={dentistState.theme == 'dark' ? "dark detail-dark" : ""}>
      <Button sx={{margin: "1rem", backgroundColor: dentistState.theme == 'dark' ? brown[700] : brown[200], color: dentistState.theme == 'dark' ? "white" : "black" }} onClick={() => navigate(-1)} variant='outlined'>Back</Button>
      <div className='card' style={{width: "50%", margin: "1rem 1.5rem"}}>
      <img style={{ width: "200px" }} src="/images/doctor.jpg" alt="doctor" />
        <h4>Name: {dentistState.singleDentist.name}</h4>
        <p>Email: {dentistState.singleDentist.email}</p>
        <p>Phone Number: {dentistState.singleDentist.phone}</p>
        <p>Website: {dentistState.singleDentist.website}</p>
      </div>
      </div>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail