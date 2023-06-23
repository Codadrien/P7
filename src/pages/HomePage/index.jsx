import Header from '../../components/Header.jsx'
import Banner from '../../components/Banner.jsx'
import Card from '../../components/Card.jsx'
import Footer from '../../components/Footer.jsx'
import logo from '../../img/falaiseMer.png'
import '../../styles/HomePages.scss'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function HomePage() {
  const [allData, setAllData] = useState([])

  useEffect(() => {
    axios
      .get('/data.json')
      .then((response) => {
        setAllData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className="HomePage">
      <Header />
      <main>
        <Banner
          texte="Chez vous, partout et ailleurs"
          src={logo}
          alt="falaise mer"
        />
        <div className="block-cards">
          <Card allData={allData} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
