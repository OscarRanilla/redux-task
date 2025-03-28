// Definir las acciones necesarias para agregar una tarea y eliminar una tarea.
// Exportar las acciones para poder utilizarlas en otros archivos.

// Aquí definimos el estado inicial, las acciones y los reducers para manejar
// la lista de tareas

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [], // Estado inicial: Lista vacía de tareas
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
            // addTask recibe una tarea y la agrega a la lista
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter((task, index) => index !== action.payload);
            // removeTask recibe un índice y elimina la tarea correspondiente
        },
    },
});

export const { addTask, removeTask } = todosSlice.actions;
export default todosSlice.reducer;
