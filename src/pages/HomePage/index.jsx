import Header from '../../components/Header.jsx'
import Banner from '../../components/Banner.jsx'
// import Card from '../../components/Card.jsx'
import Footer from '../../components/Footer.jsx'
import logo from '../../img/falaiseMer.png'
import '../../styles/HomePages.scss'

function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <main>
        <Banner
          texte="Chez vous, partout et ailleurs"
          src={logo}
          alt="falaise mer"
        />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
