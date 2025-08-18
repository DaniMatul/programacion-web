//import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'

function App() {
  // ID escogidos por mi :)
  const ids = [25, 36, 37, 38, 39, 43, 53, 54, 57, 2]

  return (
    <> 
      <div className="container-app">
        <div className="header">

        </div>
        <div className="body">
          {ids.map((i) =>(
            <PokemonCard id={i}/>
          ))}

        </div>
      </div>
    </>
  )
}

export default App
