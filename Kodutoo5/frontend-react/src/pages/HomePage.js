import { Link } from 'react-router-dom';
import React from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import './koduleht.css';


function HomePage(){


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