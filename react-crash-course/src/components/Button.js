import React from 'react';
import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return (
    <button
      className='btn'
      onClick={onClick}
      style={{ backgroundColor: color }}
    >{text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steel-blue',
  text: 'default',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button