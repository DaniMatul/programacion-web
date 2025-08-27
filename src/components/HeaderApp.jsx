import { useState } from 'react'
import CreateTaskCard from './CreateTaskCard';

export default function HeaderApp(){
    const [openModalTask, setOpenModalTask] = useState(false);
    return(
        <>
        <div className="header-app">
            <p className="title"></p>
            <button className="add-task-btn" onClick={() => setOpenModalTask(true)}>Agregar tarea</button>
            {openModalTask && (
            <div className="create-taskcard-modal">
                <button className="cerrar" onClick={() => setOpenModalTask(false)}>x</button>
                <CreateTaskCard/>
            </div>
            )}
            <button className="filter"> Filtrar Por</button>
        </div>
        </>
    )
}