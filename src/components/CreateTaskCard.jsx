export default function CreateTaskCard(){
    // Aqui creo ID
    return(
        <>
            <div className="main-container-form">
                <input type="text" className="data" placeholder="Nombre"/>
                <input type="text" className="data" placeholder="Estado"/>
                <button className="accion">Guardar</button>
            </div>
        </>
    )
}