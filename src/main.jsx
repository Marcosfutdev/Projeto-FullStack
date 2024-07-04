import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
// importando minhas rotas
import Home from './pages/home.jsx';
import Cadastrar from './pages/cadastrar.jsx';

// importando tela para quando não há uma rota digitada existente
import Error from './components/error.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        element:<Home/>,
        path:"/"
      },
      {

        element:<Cadastrar/>,
        path:"cadastrar"
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
