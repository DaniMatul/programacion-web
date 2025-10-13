'use client'

import { useState } from "react";
import HideCard from "./components/HideCard";
import ShowCard from "./components/ShowCard";
import './app.css'

export default function Home() {
  const [optionCard, setOptionCard] = useState('ocultar')
  return (
    <div className="app-container">
      <div className="header-container">
        <h1>MySecret</h1>
        <div className="btn-container">
          <button onClick={() => setOptionCard('ocultar')}>
            Ocultar
          </button>
          <button onClick={() => setOptionCard('mostrar')}>
            Mostrar
          </button>
        </div>
      </div>
      <div className="card-container">
        {optionCard === 'ocultar' &&(
          <HideCard/>
        )}
        {optionCard === 'mostrar' &&(
          <ShowCard/>
        )}
      </div>
    </div>
  );
}
