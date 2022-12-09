import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links2.css'

const NavigationLinks2 = (props) => {
  return (
    <nav className={`navigation-links2-nav ${props.rootClassName} `}>
      <span className="navigation-links2-text">{props.text}</span>
      <span className="navigation-links2-text1">{props.text1}</span>
      <span className="navigation-links2-text2">{props.text2}</span>
    </nav>
  )
}

NavigationLinks2.defaultProps = {
  text2: 'Careers',
  text: 'About Us',
  text1: 'Contact',
  rootClassName: '',
}

NavigationLinks2.propTypes = {
  text2: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks2
