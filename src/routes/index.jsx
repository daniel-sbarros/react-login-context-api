import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useAuth from '../hooks/user.Auth';
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const Private = ({ Item }) => {
    const { signed } = useAuth();
    return signed > 0 ? <Item /> : <Login />;
}

export default function RoutesApp() {

    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path='/home' element={<Private Item={Home} />} />
                    <Route path='/' element={<Login />} />
                    <Route exact path='/signup' element={<Signup />} />
                    <Route path='*' element={<Login />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}