import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from '../../hooks/user.Auth';
import './index.css'

export default function Login (){
    const { signin } = useAuth();
    const navigate = useNavigate();
  
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
  
    const handleLogin = () => {
      if (!email | !senha) {
        setError("Preencha todos os campos");
        return;
      }
  
      const res = signin(email, senha);
  
      if (res) {
        setError(res);
        return;
      }
  
      navigate("/home");
    };

    return (
        <form className='login-form w-50' method='post'>
            <div className="form-group">
                <h1 className='text-center'>Acessar o Sistema</h1>
            </div>

            <div className="form-group">
                <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    placeholder="DIGITE SEU EMAIL" 
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
            </div>

            <div className="form-group">
                <input 
                    type="password" 
                    className="form-control" 
                    name="password" 
                    placeholder="DIGITE SUA SENHA" 
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
            </div>

            <div className="form-group">
                <small className="form-text text-danger">{error}</small>
                <button onClick={handleLogin} className="btn btn-primary w-100">Entrar</button>
                <div>
                    Não tem uma conta? &nbsp;
                    <strong>
                        <Link to="/signup">Registre-se</Link>
                    </strong>
                </div>
            </div>
        </form>
    )
}