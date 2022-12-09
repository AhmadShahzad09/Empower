import React from 'react'

import PropTypes from 'prop-types'

import './feature-card31.css'

const FeatureCard31 = (props) => {
  return (
    <div className={`feature-card31-feature-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card31-image"
      />
      <h2 className="feature-card31-text">{props.title}</h2>
    </div>
  )
}

FeatureCard31.defaultProps = {
  image_alt: 'image',
  title: 'Global Talent',
  image_src: '/playground_assets/1.5-200w.png',
  rootClassName: '',
}

FeatureCard31.propTypes = {
  image_alt: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard31
