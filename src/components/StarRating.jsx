import '../styles/StarRating.scss'

const StarRating = ({ rating }) => {
  const maxRating = 5
  const starArray = []

  // Générer les étoiles pleines
  for (let i = 0; i < rating; i++) {
    starArray.push(
      <span className="color-star" key={i}>
        &#9733;
      </span>
    )
  }

  // Générer les étoiles vides
  for (let i = rating; i < maxRating; i++) {
    starArray.push(
      <span className="color" key={i}>
        &#9733;
      </span>
    )
  }

  return <div>{starArray}</div>
}

export default StarRating
