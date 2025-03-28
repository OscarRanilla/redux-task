// importar las dependencias necesarias para trabajar con Redux.
// agregamos el 'todosSlice.js' al reducer

import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});
