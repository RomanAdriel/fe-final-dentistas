import React from 'react'
import Card from '../Components/Card'
import { useDentistsContext } from '../Components/utils/global.context'

const Home = () => {

  const { dentistState } = useDentistsContext();

  return (
    <main className={dentistState.theme == 'dark' ? "dark" : ""}>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentistState.dentists.map(dentist => <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}/>)}
      </div>
    </main>
  )
}

export default Home