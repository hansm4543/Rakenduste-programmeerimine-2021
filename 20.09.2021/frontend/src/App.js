import './App.css';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AddItem from './pages/AddItem';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>

      <Route path='/' exact>
        <Home/>
      </Route>

      <Route path='/cart' exact>
        <Cart/>
      </Route>
      
      <Route path='/add-item' exact>
        <AddItem/>
      </Route>
    </div>
  );
}

export default App;
