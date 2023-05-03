import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import App from './App';
import Home from './components/Home';
import Catalogo from './components/Catalogo';
import ErrorPage from './components/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App children={ <Home/> } />,
    errorElement: <ErrorPage/>,

  },
  {
    path:'/Catalogo',
    element : <App children={ <Catalogo/> } />,
  },
  {

  }
]); 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
