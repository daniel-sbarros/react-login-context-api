import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/user.Auth';
import './index.css'

export default function Signup () 
{
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };

  return (
    <form className='login-form w-50' method='post'>
        <div className="form-group">
            <h1 className='text-center'>Cadastrar Novo Usuário</h1>
        </div>

        <div className="form-group">
            <input
            className="form-control"
            type="email"
            placeholder="DIGITE SEU EMAIL"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
        </div>

        <div className="form-group">
            <input
            className="form-control"
            type="email"
            placeholder="CONFIRME SEU EMAIL"
            value={emailConf}
            onChange={(e) => [setEmailConf(e.target.value), setError("")]}
            />
        </div>

        <div className="form-group">
            <input
            className="form-control"
            type="password"
            placeholder="DIGITE SUA SENHA"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
        </div>

        <div className="form-group">
        <small className="form-text text-danger">{error}</small>
            <button onClick={handleSignup} className="btn btn-primary w-100">
                Cadastrar
            </button>
            <div>
                Já tem uma conta? &nbsp;
                <strong>
                    <Link to="/">Entre</Link>
                </strong>
            </div>
        </div>
      
    </form>
  );
};