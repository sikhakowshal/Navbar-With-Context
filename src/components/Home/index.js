import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const renderLightHomeSection = (
        <div className="light-home-container">
          <img src={homeImage} className="home-img" alt="home" />
          <h1 className="home-light-text">Home</h1>
        </div>
      )

      const renderDarkHomeSection = (
        <div className="dark-home-container">
          <img src={homeImage} className="home-img" alt="home" />
          <h1 className="home-dark-text">Home</h1>
        </div>
      )

      return (
        <div className="home-container">
          <Navbar />
          {isDarkTheme ? renderDarkHomeSection : renderLightHomeSection}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
