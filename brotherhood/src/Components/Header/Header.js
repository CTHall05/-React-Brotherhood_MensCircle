import React from 'react';
import './Header.css';

export default function Header() {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className='header-container'>
      <h1>Brotherhood.</h1>
      <div className='header-nav-anchors'>
        <a onClick={(event) => scrollToSection(event, 'features')} href='#features'>
          Features
        </a>
        <a onClick={(event) => scrollToSection(event, 'facts')} href='#facts'>
          Facts
        </a>
        <a onClick={(event) => scrollToSection(event, 'about')} href='#about'>
          About
        </a>
        <a onClick={(event) => scrollToSection(event, 'contact')} href='#contact'>
          Contact
        </a>
      </div>
    </header>
  );
}
