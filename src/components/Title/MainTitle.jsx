import React from 'react'
import "./MainTitle.css"

const MainTitle = ({title}) => {
  return (
    <div className='content-title'>
      <h1 className='main-title'>{title}</h1>
      <hr />
    </div>
  )
}

export default MainTitle
