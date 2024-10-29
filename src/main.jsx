import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { rutas } from './routes/routerapp'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

let router = createBrowserRouter(rutas)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
