import { Link } from 'react-router-dom'
import '../styles/Var.scss'
import '../styles/Header.scss'

function Header() {
  return (
    <div className="Header">
      <nav>
        <Link to="/">
          <img src={require('../img/logo.png')} alt="Logo Kasa" />
        </Link>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/APropos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
