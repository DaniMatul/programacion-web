'use client'

import { useState } from "react";
import HideCard from "./components/HideCard";
import ShowCard from "./components/ShowCard";

export default function Home() {
  const [optionCard, setOptionCard] = useState('ocultar')
  return (
    <div className="app-container">
      <div className="navbar-container">
        <button onClick={() => setOptionCard('ocultar')}>
          Ocultar
        </button>
        <button onClick={() => setOptionCard('mostrar')}>
          Mostrar
        </button>
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
