import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const renderLightNotFoundSection = (
        <div className="light-notfound-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
            className="notfound-img"
          />
          <h1 className="light-notfound-heading">Lost Your Way?</h1>
          <p className="light-notfound-subheading">
            We cannot seem to find the page you are looking for.
          </p>
        </div>
      )

      const renderDarkNotFoundSection = (
        <div className="dark-notfound-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
            className="notfound-img"
          />
          <h1 className="dark-notfound-heading">Lost Your Way?</h1>
          <p className="dark-notfound-subheading">
            We cannot seem to find the page you are looking for.
          </p>
        </div>
      )

      return (
        <div className="notfound-container">
          <Navbar />
          {isDarkTheme ? renderDarkNotFoundSection : renderLightNotFoundSection}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
