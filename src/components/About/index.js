import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const renderLightAboutSection = (
        <div className="light-about-container">
          <img src={aboutImage} className="about-img" alt="about" />
          <h1 className="about-light-text">About</h1>
        </div>
      )

      const renderDarkAboutSection = (
        <div className="dark-about-container">
          <img src={aboutImage} className="about-img" alt="about" />
          <h1 className="about-dark-text">About</h1>
        </div>
      )

      return (
        <div className="about-container">
          <Navbar />
          {isDarkTheme ? renderDarkAboutSection : renderLightAboutSection}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
