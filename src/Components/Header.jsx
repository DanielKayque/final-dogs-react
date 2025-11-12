import React from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as Dogs } from '../images/Assets/dogs.svg';
import Dogs from '../images/Assets/dogs.svg?react';

const Header = () => {
  return (
    <header className="shadow-md h-[60px] flex items-center">
      <nav className="container">
        <Link className="" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link to="/login">Login/Criar</Link>
      </nav>
    </header>
  );
};

export default Header;
