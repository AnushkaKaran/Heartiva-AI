import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { AssessmentProvider } from './context/AssessmentContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AssessmentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AssessmentProvider>
  </React.StrictMode>,
)
