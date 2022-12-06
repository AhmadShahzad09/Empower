import React from 'react'

import PropTypes from 'prop-types'

import './testimonial-card1.css'

const TestimonialCard1 = (props) => {
  return (
    <div
      className={`testimonial-card1-testimonial-card ${props.rootClassName} `}
    >
      <div className="testimonial-card1-testimonial"></div>
    </div>
  )
}

TestimonialCard1.defaultProps = {
  rootClassName: '',
}

TestimonialCard1.propTypes = {
  rootClassName: PropTypes.string,
}

export default TestimonialCard1
