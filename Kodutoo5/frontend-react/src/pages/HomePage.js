import { Link } from 'react-router-dom';
import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import './koduleht.css';

import {useContext} from 'react';
import {Context} from "../store";

function HomePage(){

    const [state, dispatch] = useContext(Context)
    console.log(state);
    //teen navbari funktsiiooni, et kui klikitakse logo peale siis logib v2lja

    return(
        <div>
            <h1 id="tervitusekekodulehel">Koduleht</h1>
            <img className="avalehelogoke" src="/Aurik.png" alt="Aurik"></img>
            <br></br>
            <Link to="/login">
                <Button type="default" id="avalehenupp">Logi sisse</Button>
            </Link>
        </div>
    )
}
export default HomePage;