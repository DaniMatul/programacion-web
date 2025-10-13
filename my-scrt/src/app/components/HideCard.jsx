'use client'

import { useState } from "react"

export default function HideCard(){
    const [inputValue, setInputValue] = useState('')
    const [hideValue, setHideValue] = useState(false)
    return (
        <>
            <div className="main-container-card">
                <h1>Ocultar Palabra</h1>
                <input type="text" name="secretI" id="1" placeholder="Ingresa el texto que quieras ocultar" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>

                <button onClick={() => setHideValue(true)}>Ocultar</button>
                {hideValue &&(
                    <p>Aqui vamos a generar el codigo</p>
                )}
            </div>
        </>
    )
}