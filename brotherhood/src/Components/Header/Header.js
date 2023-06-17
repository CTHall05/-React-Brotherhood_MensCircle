import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <header className='header-container'>
      <h1>Brotherhood.</h1>
      <div className='header-nav-anchors'>
        <a href='#facts'>Facts</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
      </div>
    </header>
  )
}
