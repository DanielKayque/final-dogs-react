import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as Dogs } from '../images/Assets/dogs.svg';
import Dogs from '../images/Assets/dogs.svg?react';
import Usuario from '../images/Assets/usuario.svg?react';
import { UserContext } from '../Context/UserContext';

const Header = () => {
  const { dados } = React.useContext(UserContext);
  console.log(dados)
  return (
    <header className="shadow-md h-[60px] flex items-center">
      <nav className="container flex items-center justify-between">
        <Link to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>

        {dados ? (
          <p>
            <Link className="flex gap-1" to="/conta">
              {dados.nome} <Usuario />
            </Link>
          </p>
        ) : (
          <Link className="flex gap-1" to="/login">
            Login / Criar <Usuario />
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
