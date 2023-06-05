import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


import Register from './pages/register.jsx'
import Dashboard from './pages/dashboard.jsx'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([{
  path: '/',
  element: <App />
}, {
  path: '/register',
  element: <Register />
},{
  path: 'dashboard',
  element: <Dashboard />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
