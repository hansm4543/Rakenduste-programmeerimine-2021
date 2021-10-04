import { useEffect, useState } from 'react';
import ItemList from '../components/ItemList';

import { Link } from 'react-router-dom';

function Home(){
    //state on hook  isloading on muutuja ja setisloading on funktsioon millega muutuja v22rust muudame
    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setIsLoadedItems] = useState([]);

    //useeffekt on selline hook, mis ytleb mis hetkedel ta kordub ja millal ta l6petab korduse
    useEffect(() =>{

        fetch('http://localhost:8080/items').then(res => {
            return res.json();
        }).then( data => {
            console.log(data);
            setIsLoading(false);

            setIsLoadedItems(data);
        });
    
    },[])


    if(isLoading === true){
        return(
        <div>
            Laeb...
        </div>);
    }

    return (
        <div>
        <Link to="add-item">
            <button>Lisa uus ese</button>
        </Link>

        <ItemList items={loadedItems}/>
        
        </div>
    )
}

export default Home;