import React from 'react'

export default () => {
  const handleChange = () => {
    document.querySelector("nav ul").classList.toggle("closed")
    document.querySelector("nav").classList.toggle("open")
  }

  return (
    <> 
      <nav>
          <div className="header-wrap">
            <div className="header">CarDB</div>
            <div className="hamburger" onClick={handleChange}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
          </div>

          <ul className='closed'>
              <li><a href="#">Home</a></li>
              <li><a href="#">Login</a></li>
              <li><a href="#">Sign up</a></li>
          </ul>
      </nav>
      <br />
    </>
  )
}