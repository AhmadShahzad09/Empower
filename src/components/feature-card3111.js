import React from 'react'

import PropTypes from 'prop-types'

import './feature-card3111.css'

const FeatureCard3111 = (props) => {
  return (
    <div className="feature-card3111-feature-card">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card3111-image"
      />
      <h2 className="feature-card3111-text">{props.title}</h2>
    </div>
  )
}

FeatureCard3111.defaultProps = {
  title: 'Managed Services',
  image_alt: 'image',
  image_src: '/playground_assets/1.4-200h.png',
}

FeatureCard3111.propTypes = {
  title: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeatureCard3111
