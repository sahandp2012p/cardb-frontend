import React from 'react'

export default () => {
  return (
    <nav>
        <div className="header">CarDB</div>
        <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>

        <ul className='closed'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Sign up</a></li>
        </ul>
    </nav>
  )
}