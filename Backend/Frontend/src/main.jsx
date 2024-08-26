import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthContext from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthContext>
  <div className='dark:text-white dark:bg-slate-900'>
  <App />
  </div>
  </AuthContext>
  </BrowserRouter>
   
  
)
