import './Navbar.css';
import { Link } from 'react-router-dom';
import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';


function Navbar (){
    return (
        <div className="Navbar">
            <div className="NavbarL">
            <Link to ="/">
                <img className="logo" src="/lehelogo.png" alt="Veebilehe logo"></img>
            </Link>
            </div>
            <div className="NavbarR">
            <Link to="/logIn">
                <Button type="primary">Logi Sisse</Button>
            </Link>
            <Link to="/register">
                <Button type="primary">Registreerimine</Button>
            </Link>
            <Link to="/addPost">
                <Button type="primary">Lisa Postitus</Button>
            </Link>
            <Link to="/posts">
                <Button type="primary">Postitustesse</Button>
            </Link>
            <Link to="/oldposts">
                <Button type="primary">Vana Posts</Button>
            </Link>

            </div>
        </div>
    );

}

export default Navbar;