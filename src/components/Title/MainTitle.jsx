import React from 'react'
import "./MainTitle.css"

const MainTitle = ({title}) => {
  return (
    <div className='content-title'>
      <h2 className='main-title'>{title}</h2>
      <hr />
    </div>
  )
}

export default MainTitle
