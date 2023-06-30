import React, { useState } from "react";


const Form = () => {

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
    } else {
      setShowInfo(false);
      setShowError(true)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input onChange={(e) => updateInputs(e)} type="text" name="fullName" placeholder="Enter your full name..."/>
        <label>Email</label>
        <input onChange={(e) =>  updateInputs(e)} type="text" name="email" placeholder="Enter your email..."/>
        <button type="submit">Send</button>
      </form>
      {showInfo && <span>{`Thanks ${contact.fullName}, we'll contact you via email as soon as possible.`}</span>}
      {showError && <span>Please, verify your information and try again.</span>}
    </div>
  );
};

export default Form;
