import React from 'react'

import PropTypes from 'prop-types'

import './feature-card311.css'

const FeatureCard311 = (props) => {
  return (
    <div className="feature-card311-feature-card">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card311-image"
      />
      <h2 className="feature-card311-text">{props.title}</h2>
    </div>
  )
}

FeatureCard311.defaultProps = {
  image_alt: 'image',
  title: 'Managed Services',
  image_src: '/playground_assets/1.4-200h.png',
}

FeatureCard311.propTypes = {
  image_alt: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeatureCard311
