import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Logement from './pages/Logement'
import APropos from './pages/APropos'
import Error404 from './pages/Error404'
import './styles/Global.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Logement" element={<Logement />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
