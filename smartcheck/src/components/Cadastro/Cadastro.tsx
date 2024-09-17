import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [confirmarSenha, setConfirmarSenha] = useState<string>('');
  const [erro, setErro] = useState<string>('');
  const [sucesso, setSucesso] = useState<string>('');
  const navigate = useNavigate();

  const validarEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validarSenha = (senha: string): boolean => senha.length >= 6;

  const handleCadastro = () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      setErro('Todos os campos são obrigatórios!');
      setSucesso('');
      return;
    }

    if (!validarEmail(email)) {
      setErro('Formato de email inválido!');
      setSucesso('');
      return;
    }

    if (!validarSenha(senha)) {
      setErro('A senha deve ter no mínimo 6 caracteres.');
      setSucesso('');
      return;
    }

    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem!');
      setSucesso('');
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    const usuarioExistente = usuarios.find((user: { email: string }) => user.email === email);

    if (usuarioExistente) {
      setErro('Email já cadastrado!');
      setSucesso('');
      return;
    }

    const novoUsuario = { nome, email, senha };
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    setErro('');
    setSucesso('Cadastro realizado com sucesso! Redirecionando para login...');

    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="cadastro-container">
      <form className="cadastro-form">
        <h2>Cadastro</h2>
        <div className="cadastro-form-group">
          <label htmlFor="nome" className="cadastro-label">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            className="cadastro-input"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Insira seu nome"
            autoComplete="name"
          />
        </div>
        <div className="cadastro-form-group">
          <label htmlFor="email" className="cadastro-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="cadastro-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Insira seu email"
            autoComplete="email"
          />
        </div>
        <div className="cadastro-form-group">
          <label htmlFor="senha" className="cadastro-label">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            className="cadastro-input"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Insira sua senha"
            autoComplete="new-password"
          />
        </div>
        <div className="cadastro-form-group">
          <label htmlFor="confirmarSenha" className="cadastro-label">Confirmar Senha:</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            className="cadastro-input"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            placeholder="Confirme sua senha"
            autoComplete="new-password"
          />
        </div>
        <button
          type="button"
          className="cadastro-btn-submit"
          onClick={handleCadastro}
        >
          Cadastrar
        </button>
        {erro && <span className="erro">{erro}</span>}
        {sucesso && <span className="sucesso">{sucesso}</span>}
      </form>
    </div>
  );
};

export default Cadastro;
