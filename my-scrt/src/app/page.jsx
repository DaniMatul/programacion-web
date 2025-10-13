'use client'

import { useState } from "react";

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
      {optionCard === 'ocultar' &&(
        <p>Hola Ocultar</p>
      )}
      {optionCard === 'mostrar' &&(
        <p>Hola Mostrar</p>
      )}
    </div>
  );
}
