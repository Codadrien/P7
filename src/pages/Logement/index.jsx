import Header from '../../components/Header.jsx'
import Accordion from '../../components/Accordion.jsx'
import Slider from '../../components/Slider.jsx'
import Tag from '../../components/Tag.jsx'
import StarRating from '../../components/StarRating.jsx'
import Footer from '../../components/Footer.jsx'
import { useParams } from 'react-router-dom'
import datas from '../../datas/data.json'
import '../../styles/Logement.scss'

function HomePage() {
  let { id } = useParams()
  console.log(id)

  let data = datas.find((data) => data.id === id)
  console.log(data)

  return (
    <div>
      <Header />
      <main>
        <Slider />
        <div className="top-part">
          <div className="title-part">
            <h1 className="title">{data.title}</h1>
            <span className="location">{data.location}</span>
            <Tag data={data} />
          </div>
          <div className="profile">
            <div className="profile-part">
              <span className="profile-name">{data.host.name}</span>
              <img className="profile-pic" src={data.host.picture} alt="host" />
            </div>
            <StarRating rating={data.rating} />
          </div>
        </div>
        <Accordion title="Equipement" content={data.description} />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
