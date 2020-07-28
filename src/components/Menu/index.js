import React from 'react';
import './Menu.css';
import Logo from '../../assets/img/Logo.png';
import Button from '../../components/Button';

function Menu() {
  return (
    <nav className='Menu'>
      <a href='/'>
        <img className='Logo' src={Logo} alt='Logo do SRacing' />;
      </a>

      <Button as='a' href='/' className='ButtonLink'>
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
