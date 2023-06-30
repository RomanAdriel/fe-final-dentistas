import React from 'react'
import Card from '../Components/Card'
import { useDentistsContext } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { dentistState } = useDentistsContext();

  return (
    <main className={dentistState.theme == 'dark' ? "dark" : ""}>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentistState.dentists.map(dentist => <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}/>)}
      </div>
    </main>
  )
}

export default Home