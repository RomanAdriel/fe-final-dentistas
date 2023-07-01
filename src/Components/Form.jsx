import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDentistsContext } from "./utils/global.context";
import { muiStyles } from '../mui-styles';


const Form = () => {

  const { dentistState } = useDentistsContext();

  const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const [contact, setContact] = useState({
    fullName: '',
    email: ''
});

const [showInfo, setShowInfo] = useState(false);
const [showError, setShowError] = useState(false);


const updateInputs = (e) => {

    setContact({...contact, [e.target.name]: e.target.value });

}

const handleSubmit = (e) => {

    e.preventDefault();

    if(contact.fullName.length > 5 && contact.email.match(emailValidation)) {
      setShowInfo(true);
      setShowError(false);
      console.log(contact);
    } else {
      setShowInfo(false);
      setShowError(true)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <TextField sx={dentistState.theme == 'dark' ? muiStyles.dark.input : muiStyles.light.input } onChange={(e) => updateInputs(e)} label="Full Name" type="text" name="fullName" placeholder="Enter your full name..."/>
          <TextField sx={dentistState.theme == 'dark' ? muiStyles.dark.input : muiStyles.light.input } onChange={(e) =>  updateInputs(e)} label="Email" type="text" name="email" placeholder="Enter your email..."/>
        <Button sx={dentistState.theme == 'dark' ? muiStyles.dark.button : muiStyles.light.button} type="submit">Send</Button>
      </form>
      {showInfo && <p>{`Thanks ${contact.fullName}, we'll contact you via email as soon as possible.`}</p>}
      {showError && <p style={{color: "red"}}>Please, verify your information and try again.</p>}
    </div>
  );
};

export default Form;
