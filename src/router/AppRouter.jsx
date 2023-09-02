import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Logement from '../pages/Logement'
import APropos from '../pages/APropos'
import Error404 from '../pages/Error404'
import '../styles/Global.scss'

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/P7" element={<HomePage />} />
        <Route path="/Logement/:id" element={<Logement />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
