import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === '' || senha === '') {
      setErro('Preencha todos os campos!');
      setSucesso('');
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuario = usuarios.find((user: { email: string; senha: string }) => user.email === email && user.senha === senha);

    if (usuario) {
      setErro('');
      setSucesso('Login realizado com sucesso!');
      setTimeout(() => {
        navigate('/'); // Redireciona para a página inicial
      }, 2000); // 2 segundos para mostrar a mensagem de sucesso
    } else {
      setErro('Email ou senha incorretos!');
      setSucesso('');
    }
  };

  return (
    <div className="login-container">
      <form id="formLogin" className="login-form">
        <h2>Login</h2>
        <div className="login-form-group">
          <label htmlFor="email" className="login-label">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insira seu email"
            autoComplete="email"
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="senha" className="login-label">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            className="login-input"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Insira sua senha"
            autoComplete="current-password"
          />
        </div>
        <button type="button" id="btnLogin" className="login-btn-submit" onClick={handleLogin}>
          Login
        </button>
        {erro && <span id="erroLogin" className="login-erro">{erro}</span>}
        {sucesso && <span id="sucessoLogin" className="login-sucesso">{sucesso}</span>}
      </form>
    </div>
  );
};

export default Login;
