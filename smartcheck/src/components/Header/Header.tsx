import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Certifique-se de que este arquivo CSS está no caminho correto

// Importando a imagem
import logoImg from '../../img/smart.png';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <img className="titulo" src={logoImg} alt="Logo da empresa SmartConnect Car" />
        </Link>
        <nav>
          <ul className="navbar">
            <li><Link to="/">Inicial</Link></li>
            <li><Link to="/produto">Produto</Link></li>
            <li><Link to="/about">Quem somos</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/cadastro">Cadastro</Link></li>
            <li><a href="#footer-container">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
