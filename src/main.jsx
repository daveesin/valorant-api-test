import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Maps from './pages/Maps.jsx'
import Arsenal from './pages/Arsenal.jsx'
import Agents from './pages/Agents.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/maps",
    element: <Maps />,
  },
  {
    path: "/arsenal",
    element: <Arsenal />,
  },
  {
    path: "/agents",
    element: <Agents />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
