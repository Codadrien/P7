import '../styles/Tag.scss'

function Card({ data }) {
  return (
    <div className="tags">
      {data.tags.map((tag) => (
        <span className="tag">{tag}</span>
      ))}
    </div>
  )
}

export default Card
