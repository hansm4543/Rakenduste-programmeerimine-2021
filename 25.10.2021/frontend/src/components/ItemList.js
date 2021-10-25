import Item from "./Item";

// [{1}.{2},{3}].Map({1})=>isAddToCartButton
// [{1}.{2},{3}].Map({2})=>)
// [{1}.{2},{3}].Map({3})=>)


function ItemList(props){
    function deleteItem(itemId){
        //console.log(itemId);
        props.onDeleteItem(itemId);
    }

    return(
        
        <div>
            {props.items.map(item => (
            <Item 
                key={item.id}
                id={item.id}
                name={item.name} 
                price={item.price} 
                category={item.category}
                isAddToCartButton={props.isAddToCart}
                deleteItem={deleteItem}
                />
            ))}
        </div>
    );
}

export default ItemList; 