import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// The entry point wraps your <App /> in a Router so navigation works in the
// browser. Your App should NOT add its own Router (the tests provide their
// own). You do not need to change this file.
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
