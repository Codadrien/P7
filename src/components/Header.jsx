import { Link } from 'react-router-dom'
import '../styles/Header.scss'

function Header() {
  return (
    <div className="Header">
      <nav>
        <Link to="/P7">
          <img src={require('../img/logo.png')} alt="Logo Kasa" />
        </Link>
        <ul>
          <li>
            <Link to="/P7">Accueil</Link>
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
