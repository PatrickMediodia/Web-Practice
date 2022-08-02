import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button';
import { useLocation } from 'react-router-dom'

//rathethan passing props, you can destructure and get title
const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className='header'> 
      <h1>{title}</h1>
      { location.pathname === '/' && 
        <Button 
        onClick={onAdd()} 
        color={ showAdd ? 'red' : 'green' }
        text={ showAdd ? 'Close' : 'Add' }
      />
      }
    </header>
  )
}

//set default value of passed props
Header.defaultProps = {
  title: 'Task Tracker',
}

//set prop type
Header.propTypes = {
  title: PropTypes.string.isRequired,
}

//  apply CSS style
// <h1 style={headingStyle}>{title}</h1> 
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

// in line styling
// <h1 style={{color: 'red', backgroundColor: 'yellow'}}>{title}</h1> 

export default Header