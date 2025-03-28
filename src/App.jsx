import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask } from './redux/todosSlice';
import './App.css';

// Monstramos la lista de tareas

const App = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todos.tasks); 
  // el useSelector obtiene la lista de tareas desde Redux.

  const handleAddTask = () => {
    // handleAddTask agrega la tarea al estado usando el 
    // dispatch(addTask(task))
    if (task.trim() !== '') {
      dispatch(addTask(task));
      setTask('');
    }
  };
  
  return (
    <div className="container">
      <h1>Lista de Tareas</h1>

      <div className="task-input">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Escribe una tarea..."
        />
        <button onClick={handleAddTask}>Agregar</button>
      </div>

      <ul className="task-list">
        {tasks.map((tasks, index) => (
          //usamos map en tasks para mostrar lista
          <li key={index} className="task-item">
            {tasks}
            <button onClick={() => dispatch(removeTask(index))}>❌</button>
          </li>
          // Cada tarea tiene un botón de X para eliminarla llamando a
          // dispatch(removeTask(index))
        ))}
      </ul>
    </div>
  );
};

export default App;
