import { Link } from 'react-router-dom'
import '../styles/Card.scss'

function Card({ id, title, cover }) {
  return (
    <>
      <Link className="card" key={id} to={`/Logement/${id}`}>
        <h2 className="title">{title}</h2>
        <img className="card-img" src={cover} alt={title} />
      </Link>
    </>
  )
}

export default Card
