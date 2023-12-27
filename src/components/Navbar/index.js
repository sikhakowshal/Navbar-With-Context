import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickToggleThemeBtn = () => {
        toggleTheme()
      }

      const navbarWebsiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navbarThemeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const renderLightTheme = (
        <nav className="navbar-container-light">
          <div className="nav-content-container">
            <img
              src={navbarWebsiteLogo}
              className="navbar-logo"
              alt="website logo"
            />
            <ul className="navbar-items-container">
              <Link to="/" className="navbar-light-item">
                <li>Home</li>
              </Link>
              <Link to="/about" className="navbar-light-item">
                <li>About</li>
              </Link>
            </ul>
            <button
              type="button"
              className="theme-btn"
              onClick={onClickToggleThemeBtn}
              data-testid="theme"
            >
              <img
                src={navbarThemeImg}
                className="navbar-theme-img"
                alt="theme"
              />
            </button>
          </div>
        </nav>
      )

      const renderDarkTheme = (
        <nav className="navbar-container-dark">
          <div className="nav-content-container">
            <img
              src={navbarWebsiteLogo}
              className="navbar-logo"
              alt="website logo"
            />
            <ul className="navbar-items-container">
              <Link to="/" className="navbar-dark-item">
                <li>Home</li>
              </Link>
              <Link to="/about" className="navbar-dark-item">
                <li>About</li>
              </Link>
            </ul>
            <button
              className="theme-btn"
              type="button"
              onClick={onClickToggleThemeBtn}
              data-testid="theme"
            >
              <img
                src={navbarThemeImg}
                className="navbar-theme-img"
                alt="theme"
              />
            </button>
          </div>
        </nav>
      )

      return isDarkTheme ? renderDarkTheme : renderLightTheme
    }}
  </ThemeContext.Consumer>
)

export default Navbar
