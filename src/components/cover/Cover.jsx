import React from 'react'
import covervideo from '../../media/covervideo.mp4'
import './Cover.css'

const Cover = () => {
  return (
    <div className='cover-container'>
      <video className='video' src={covervideo} autoPlay loop muted />
      <h1>Antonio Mardones San Martin</h1>
      <p>Developer Web & Engineer</p>
    </div>
  )
}

export default Cover
