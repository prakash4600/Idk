import React from 'react'
import Home_content from './Home_content/Content.js'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import animate from '../Cursor/cursor_util'

function Home() {
  return (
    <div >
        <div class="main">
        <Home_content />
        </div>
    </div>
  )
}

export default Home