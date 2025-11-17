import React, { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Estatisticas from './Estatisticas';
import PostPhoto from './PostPhoto';
import AssetConta from '../images/Assets/feed.svg?react';
import AssetEstat from '../images/Assets/estatisticas.svg?react';
import AssetAdicionar from '../images/Assets/adicionar.svg?react';
import AssetSair from '../images/Assets/sair.svg?react';
import styles from './Headernav.module.css';
import { UserContext } from '../Context/UserContext';

const Conta = () => {
  const { userLogout } = React.useContext(UserContext);
  const { pathname } = useLocation();
  const [titulo, setTitulo] = useState('');

  useEffect(() => {
    switch (pathname) {
      case '/conta':
        setTitulo('Minha conta');
        break;
      case '/conta/estatisticas':
        setTitulo('Estatísticas');
        break;
      case '/conta/postar':
        setTitulo('Postar foto');
        break;
    }
  }, [pathname]);

  return (
    <section className="mx-auto max-w-[1200px] h-screen">
      <header className='flex items-center justify-between shadow-[0_6px_6px_-6px_rgba(0,0,0,0.3)]'>
        <h1 className="after:content-[''] after:w-[30px] after:h-[30px] after:bg-[#FABD01] after:absolute after:left-0 after:bottom-0 relative after:z-[-1] after:rounded-lg text-6xl text-[#333]">
          {titulo}
        </h1>
        <nav
          className={` ${styles.nav} flex h-[120px] justify-center gap-10 items-center`}
        >
          <NavLink
            to="/conta"
            end
            className={({ isActive }) =>
              isActive ? 'border-[3px] border-[#FABD01]' : 'border-transparent'
            }
            title="Minha conta"
          >
            <AssetConta />
          </NavLink>
          <NavLink
            to="/conta/estatisticas"
            className={({ isActive }) =>
              isActive ? 'border-[3px] border-[#FABD01]' : 'border-transparent'
            }
            title="Estatísticas"
          >
            <AssetEstat />
          </NavLink>
          <NavLink
            to="/conta/postar"
            className={({ isActive }) =>
              isActive ? 'border-[3px] border-[#FABD01]' : 'border-transparent'
            }
            title="Postar foto"
          >
            <AssetAdicionar />
          </NavLink>
          <button title="Deslogar" onClick={userLogout}>
            <AssetSair />
          </button>
        </nav>
      </header>
      <Routes>
        <Route path="estatisticas" element={<Estatisticas />} />
        <Route path="postar" element={<PostPhoto />} />
      </Routes>
    </section>
  );
};

export default Conta;
