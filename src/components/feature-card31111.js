import React from 'react'

import PropTypes from 'prop-types'

import './feature-card31111.css'

const FeatureCard31111 = (props) => {
  return (
    <div className="feature-card31111-feature-card">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="feature-card31111-image"
      />
      <h2 className="feature-card31111-text">{props.title}</h2>
    </div>
  )
}

FeatureCard31111.defaultProps = {
  title: 'Managed Services',
  image_src: '/playground_assets/1.4-200h.png',
  image_alt: 'image',
}

FeatureCard31111.propTypes = {
  title: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default FeatureCard31111
