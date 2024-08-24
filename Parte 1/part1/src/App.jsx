// import { useState } from 'react'
// import './App.css'
import Mensaje from './Mensaje.jsx'

const Description = () =>{
  return <h1>Esta es una descripcion desde un componente en el mismo archivo</h1>
}


function App() {
  return (
    <div>
      <Mensaje color='green' message='Estamos trabajando'/>
      <Mensaje color='yellow' message='en un curso'/>
      <Mensaje color='red' message='de React'/>
      <Mensaje color='pink' message='Wiii'/>
      <Description/>
    </div>
  )
}

export default App
