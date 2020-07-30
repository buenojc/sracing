import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Button from '../../components/Button';

function Menu() {
  return (
    <nav className='Menu'>
      <Link to='/'>
        <img className='Logo' src={Logo} alt='Logo do SRacing' />;
      </Link>

      <Button as={Link} to='/cadastro/video' className='ButtonLink'>
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
