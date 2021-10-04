function ItemCategory(props){
    return (
        <div>
            <div className="itemName">{props.name}</div>
            <div className="itemCategory">{props.category}</div>
        </div>
    )
}

export default ItemCategory;