import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './HelloWorldApp';
// import FirstApp from './FirstApp';
import { CounterApp } from './CounterApp';
import './styles.css'; // Global styles

/**
 * Reacty y ReactDOM son necesarios para renderizar mi app.
 * Usualmente todo en React empieza con un componente (punto de entrada)
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App />
    <FirstApp /> */}
    <CounterApp value={10} />
  </React.StrictMode>
);
