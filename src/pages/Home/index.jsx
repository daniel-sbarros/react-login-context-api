import React from 'react';
import { useNavigate } from "react-router-dom";
import useAuth from '../../hooks/user.Auth';
import './index.css'

export default function Home() {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return ( 
        <>
            <h1>Home</h1>
            <button className='btn btn-primary' onClick={() => [signout(), navigate("/")]}>
                Sair
            </button>
        </>
    )
}
