import './Navbar.css';
import { Link } from 'react-router-dom';
import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

import {useContext} from 'react';
import {Context} from "../store";
import { logoutUser} from "../store/actions";


function Navbar (){
    const [state, dispatch] = useContext(Context)
    //console.log(state);


    //funktsiioon, et kui klikitakse logo peale siis logib v2lja
    function myFunction(nr){
        if(nr === 1){
            console.log("Log Out");
            dispatch(logoutUser());
        }

    }
    

    return (
        <div className="Navbar">
            <div className="NavbarL">
            <Link to ="/" onClick={() => myFunction(1)}>
                <img className="logo" src="/lehelogo.png" alt="Veebilehe logo"></img>
            </Link>
            </div>
            <div className="NavbarR">

            <Link to="/addPost">
                <Button type="primary">Lisa Postitus</Button>
            </Link>
            <Link to="/posts">
                <Button type="primary">Postitustesse</Button>
            </Link>
            </div>
        </div>
    );

}

export default Navbar;
