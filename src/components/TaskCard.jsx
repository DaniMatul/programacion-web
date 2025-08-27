export default function TaskCard({ task, onToggle, onDelete }) {
    const completed = task.status === 'completed';
    return(
        <>
            <div className="main-container-taskcard">
                <div className="data-taskcard">
                    <p><strong>{task.id}</strong></p>
                    <p className={completed ? "task-name completed" : "task-name"}>
                    {task.name}
                    </p>
                    <p>{completed ? "Completado" : "Pendiente"}</p>

                    <button onClick={onDelete}>Eliminar</button>
                    <button onClick={onToggle}>
                    {completed ? "Marcar pendiente" : "Marcar completada"}
                    </button>
                </div>
            </div>
        </>
    )

}