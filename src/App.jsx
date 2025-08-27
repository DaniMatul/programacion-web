import './App.css'
import TaskCard from './components/TaskCard'
import HeaderApp from './components/HeaderApp';
import BodyApp from './components/BodyApp';
import { useEffect, useMemo, useState } from 'react';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); 
  const [showForm, setShowForm] = useState(false);

  // Cargar del storage
  useEffect(() => {
    try {
      const raw = localStorage.getItem('tasks');
      if (raw) setTasks(JSON.parse(raw));
    } catch {
      console.log("Algo paso")
    }
  }, []);

  // Guardar en storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(name) {
    const id =
      (window.crypto && crypto.randomUUID && crypto.randomUUID()) ||
      String(Date.now());
    const newTask = { id, name, status: 'pending' };
    setTasks(prev => [newTask, ...prev]);
  }

  function toggleTask(id) {
    setTasks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, status: t.status === 'pending' ? 'completed' : 'pending' } : t
      )
    );
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  const filteredTasks = useMemo(() => {
    if (filter === 'pending') return tasks.filter(t => t.status === 'pending');
    if (filter === 'completed') return tasks.filter(t => t.status === 'completed');
    return tasks;
  }, [tasks, filter]);

  return (
    <>
    <div className="main-container-principal">
      <HeaderApp
        filter={filter}
        onChangeFilter={setFilter}
        onOpenForm={() => setShowForm(true)}
      />
      <BodyApp
        tasks={filteredTasks}
        onCreate={name => { addTask(name); setShowForm(false); }}
        onToggle={toggleTask}
        onDelete={deleteTask}
        showForm={showForm}
        onCloseForm={() => setShowForm(false)}
      />
    </div>
    </>
  )
}



