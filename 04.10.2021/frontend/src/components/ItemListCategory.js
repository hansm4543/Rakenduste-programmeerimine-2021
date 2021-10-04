import ItemCategory from "./ItemCategory";

function ItemListCategory(props){
    return(
        
        <div>
            {props.items.map(item => (
            <ItemCategory 
                key={item.id}
                name={item.name} 
                category={item.category}/>
                
            ))}
        </div>
    );
}

export default ItemListCategory; 