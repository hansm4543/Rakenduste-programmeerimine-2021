import { useEffect, useState } from 'react';
import ItemListCategory from '../components/ItemListCategory';


import { Link } from 'react-router-dom';

function HomeCategory(){
    //state on hook  isloading on muutuja ja setisloading on funktsioon millega muutuja v22rust muudame
    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setIsLoadedItems] = useState([]);

    //useeffekt on selline hook, mis ytleb mis hetkedel ta kordub ja millal ta l6petab korduse
    useEffect(() =>{

        fetch('http://localhost:8080/categorys').then(res => {
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
            Laeb yhendust backendiga...
        </div>);
    }

    return (
        <div>
        <Link to="add-item-category">
            <button>Lisa uus Kategooria</button>
        </Link>

        <ItemListCategory items={loadedItems}/>
        
        </div>
    )
}

export default HomeCategory;