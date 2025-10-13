'use client'

import { useState } from "react"

export default function ShowCard(){
    const [inputValue, setInputValue] = useState('')
    const [showValue, setShowValue] = useState(false)
    return (
        <>
            <div className="main-container-card">
                <h1>Mostrar Palabra</h1>
                <input type="text" name="secretI" id="1" placeholder="Ingresa el codigo para mostrar texto" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>

                <button onClick={() => setShowValue(true)}>Ocultar</button>
                {showValue &&(
                    <p>Aqui vamos a generar el codigo</p>
                )}
            </div>
        </>
    )
}