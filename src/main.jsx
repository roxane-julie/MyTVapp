import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { Show } from './Show';
import { Cast } from './Cast';

// import { Actor } from './components/Cast';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: < App />,
  },
  { 
    path:'/show/:id',
    element:<Show />
  },
  {
    path:'/cast/:id',
    element:<Cast />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

