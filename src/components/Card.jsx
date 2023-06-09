import { Link } from 'react-router-dom'
import '../styles/Var.scss'
import '../styles/Card.scss'

function Card({ cardLink, texte, src, alt }) {
  const datas = require('../../datas/data.json')
  return (
    <div className="card">
      {datas.map(({ id, cover, title }) => (
        <Link to="/APropos">
          <h1>{texte}</h1>
          <img className="card-img" src={src} alt={alt} />
        </Link>
      ))}
    </div>
  )
}

export default Card
