import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './redux/store.js'

// Envolvemos nuestra app con el Provider de Redux

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </ Provider>
  </React.StrictMode>,
);

// importamos el Provider de Redux y el store
// Envolvemos <App /> dentro del Provider. pasándole el store 