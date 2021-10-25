import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar (){
    return (
        <div className="navbar">
            <Link to ="/">
                <img className="logo" src="/lehelogo.png" alt="Veebilehe logo"></img>
            </Link>

            <Link to="/admin">
                <button>Admini vaatesse</button>
            </Link>

            <Link to="/cart">
                <img className="cart" src="/cart.svg" alt="Ostukorvi logo"></img>
            </Link>

        </div>
    );

}

export default Navbar;