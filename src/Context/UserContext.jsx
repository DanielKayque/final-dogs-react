import React, { Children, useContext } from 'react';
import { createContext } from 'react';
import { TOKEN_POST, USER_GET } from '../api';
import js from '@eslint/js';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST(username, password);
    const tokenResp = await fetch(url, options);
    const { token } = await tokenResp.json();
    window.localStorage.setItem('token', token);
    getUser(token);
  }

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setDados(json);
    setLogin(true);
  }

  // const response = await fetch(
  //   'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(),
  //   },
  // );
  // const json = await response.json();
  // console.log(json);
  // localStorage.setItem('token', json.token);
  // localStorage.setItem('usuario', json.user_nicename);

  return (
    <UserContext.Provider value={{ userLogin, dados, login }}>
      {children}
    </UserContext.Provider>
  );
};
