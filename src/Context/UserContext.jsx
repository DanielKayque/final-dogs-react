import React, { Children, useContext } from 'react';
import { createContext } from 'react';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET, USER_POST } from '../api';
import js from '@eslint/js';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido');
          await getUser(token);
        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  async function userLogout() {
    setDados(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({
        username: username,
        password: password,
      });
      const tokenResp = await fetch(url, options);
      if (!tokenResp.ok) throw new Error(`Error: Usuário inválido`);
      const { token } = await tokenResp.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/');
    } catch (err) {
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setDados(json);
    setLogin(true);
  }

  async function registerUser(username, password, email) {
    const { url, options } = USER_POST(username, password, email);
    const response = await fetch(url, options);
    if (!response.ok)
      throw new Error(`Erro na requisição: Status ${response.status}`);
    console.log(response);
    const resp = await response.json();
  }

  return (
    <UserContext.Provider
      value={{
        userLogin,
        dados,
        login,
        userLogout,
        loading,
        error,
        registerUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
