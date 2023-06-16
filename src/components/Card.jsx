import { Link } from 'react-router-dom'
import '../styles/Card.scss'
import datas from '../datas/data.json'

function Card() {
  return (
    <div className="block-cards">
      {datas.map((data) => (
        <Link className="card" key={data.id} to={`/Logement/${data.id}`}>
          <h2 className="title">{data.title}</h2>
          <img className="card-img" src={data.cover} alt={data.title} />
        </Link>
      ))}
    </div>
  )
}

export default Card
