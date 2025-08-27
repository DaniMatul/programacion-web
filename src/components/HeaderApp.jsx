import CreateTaskCard from './CreateTaskCard';
import '../styles/HeaderApp.css'

export default function HeaderApp({ filter, onChangeFilter, onOpenForm }){
    return(
        <>
        <div className="header-app">
            <div className="title">
                <h1 className="title">Tareas</h1> 
            </div>
            <div className="actions-header">
                 <select value={filter} onChange={(e) => onChangeFilter(e.target.value)}>
          <option value="all">Todas las tareas</option>
          <option value="pending">Pendientes</option>
          <option value="completed">Completadas</option>
        </select>
        <button onClick={onOpenForm}>Agregar tarea</button>
            </div>
        </div>
        </>
    )
}