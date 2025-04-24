import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routers/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <ThemeProvider> */}
      <RouterProvider router={router} />
    {/* </ThemeProvider> */}
  </StrictMode>
)
