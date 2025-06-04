import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback="Loading...">
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Toaster />
    </Suspense>
  </React.StrictMode>
);