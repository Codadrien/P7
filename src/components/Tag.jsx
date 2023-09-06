import '../styles/Tag.scss'

function Tag({ tag, index }) {
  return (
    <span className="tag" key={index}>
      {tag}
    </span>
  )
}

export default Tag
