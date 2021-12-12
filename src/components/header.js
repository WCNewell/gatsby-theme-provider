import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import SunIcon from '../assets/sun.inline.svg'
import MoonIcon from '../assets/moon.inline.svg'

const Header = ({ siteTitle }) => {
  const theme = React.useContext(ThemeContext)

  const toggleTheme = () => {
    theme === nightSkin ? setTheme('night') : setTheme('day')
  }
  
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div>
          <SunIcon  className="theme-icon"
                    onClick={() => {
                      toggleTheme()
                    }}
          />
        </div>
        <div>
          <MoonIcon className="theme-icon"
                    onClick={() => {
                      toggleTheme()
                    }}
          />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
