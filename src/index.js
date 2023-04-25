
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import router from './router'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <RouterProvider router={router}></RouterProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);