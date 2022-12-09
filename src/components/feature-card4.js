import React from 'react'

import PropTypes from 'prop-types'

import './feature-card4.css'

const FeatureCard4 = (props) => {
  return (
    <div className={`feature-card4-feature-card ${props.rootClassName} `}>
      <h2 className="feature-card4-text">{props.title}</h2>
      <span className="feature-card4-text1">{props.description}</span>
    </div>
  )
}

FeatureCard4.defaultProps = {
  rootClassName: '',
  description:
    'Our global reach enables yourbusiness to grow effortlessly withshort ramp-up time',
  title: 'Elastic Resourcing',
}

FeatureCard4.propTypes = {
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
}

export default FeatureCard4
