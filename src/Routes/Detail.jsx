import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDentistsContext } from '../Components/utils/global.context';
import { Button } from '@mui/material';
import { muiStyles } from '../mui-styles';


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

  return (
    <>
    <div className={dentistState.theme == 'dark' ? "dark" : ""}>
      <Button sx={dentistState.theme == 'dark' ? muiStyles.dark.button : muiStyles.light.button} onClick={() => navigate(-1)} variant='outlined'>Back</Button>
      <div className={dentistState.theme == "dark" ? "card card-dark" : "card"} style={{width: "50%", margin: "auto", padding: "1rem", color: "black"}}>
      <img style={{ width: "200px",  }} src="/images/doctor.jpg" alt="doctor" />
        <h4>{dentistState.singleDentist.name}</h4>
        <p><strong>Email: </strong>{dentistState.singleDentist.email}</p>
        <p><strong>Phone Number: </strong>{dentistState.singleDentist.phone}</p>
        <p><strong>Website: </strong>{dentistState.singleDentist.website}</p>
      </div>
      </div>
    </>
  )
}

export default Detail