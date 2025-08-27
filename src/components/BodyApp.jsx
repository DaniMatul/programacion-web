import TaskCard from "./TaskCard"
import '../styles/BodyApp.css'
import CreateTaskCard from "./CreateTaskCard"
export default function BodyApp({ tasks, onCreate, onToggle, onDelete, showForm, onCloseForm }){

    return(
        <>
            <div className="body-app">
                {showForm && (
                    <CreateTaskCard
                    onCreate={onCreate}
                    onClose={onCloseForm}
                    />
                )}

                {tasks.length === 0 ? (
                    <p className="empty">No hay tareas en esta vista.</p>
                ) : (
                    <ul className="task-list">
                    {tasks.map(t => (
                        <TaskCard
                        key={t.id}
                        task={t}
                        onToggle={() => onToggle(t.id)}
                        onDelete={() => onDelete(t.id)}
                        />
                    ))}
                    </ul>
                )}
            </div>
        </>
    )
}