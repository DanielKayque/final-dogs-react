import React from 'react';
import { Link } from 'react-router-dom';

const Conta = () => {
  return (
    <div>
      <h1>Minha conta</h1>
      <Link to='cadastrar'><button>Clique aqui para ir pra cas</button></Link>
    </div>
  );
};

export default Conta;
