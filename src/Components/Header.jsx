import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { ReactComponent as Dogs } from '../images/Assets/dogs.svg';
import Dogs from '../images/Assets/dogs.svg?react';
import Usuario from '../images/Assets/usuario.svg?react';
import { UserContext } from '../Context/UserContext';

const Header = () => {
  const { dados, userLogout } = React.useContext(UserContext);

  // const navigate = useNavigate();

  return (
    <header className="shadow-md h-[60px] flex items-center">
      <nav className="container flex items-center justify-between">
        <Link to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>

        {dados ? (
          <p className='flex'>
            <Link className="flex gap-1" to="/conta">
              {dados.nome} <Usuario />
            </Link>
            <button onClick={userLogout}>Deslogar</button>
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
