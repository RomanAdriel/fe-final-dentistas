import React from 'react'
import Form from '../Components/Form'
import { useDentistsContext } from '../Components/utils/global.context';

const Contact = () => {

  const { dentistState } = useDentistsContext();

  return (
    <div className={dentistState.theme == 'dark' ? "dark" : ""} style={{padding: "1.5rem"}}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact