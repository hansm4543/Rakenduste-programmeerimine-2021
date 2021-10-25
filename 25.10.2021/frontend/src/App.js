import './App.css';
import {Route} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AddItem from './pages/AddItem';
import HomeCategory from './pages/HomeCategory';
import AddItemCategory from './pages/AddItemCategory';
import Navbar from './components/Navbar';
import AdminHome from './pages/AdminHome';
import SingleItem from './pages/SingleItem';
import EditItem from './pages/EditItem';


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
      <br/>
      <br/>
      <br/>

      <Route path='/' exact>
        <HomeCategory/>
      </Route>

      <Route path='/add-item-Category' exact>
        <AddItemCategory/>
      </Route>
      <Route path='/admin' exact>
        <AdminHome/>
      </Route>
      <Route path='/item/:itemId' exact>
        <SingleItem/>
      </Route>
      <Route path='/edit-item/:itemId' exact>
        <EditItem/>
      </Route>

    </div>
  );
}

export default App;
