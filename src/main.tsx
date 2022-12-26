import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from "./About"
import './index.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Nav from './components/Nav'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' >
          <Route index element={<App />} />
          <Route path='about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
