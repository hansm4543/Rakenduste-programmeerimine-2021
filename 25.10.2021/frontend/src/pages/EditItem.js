import { useEffect, useState, useRef } from "react";
//import Item from "../components/Item";

function EditItem(){
    const [item, setItem] = useState(null);
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const categoryInputRef = useRef();

    useEffect(()=> {
        const itemId = window.location.href.split("/edit-item/")[1];
        //console.log(window.location.href.split("/item/")[1]);
        fetch("http://localhost:8080/view-item/" + itemId).then(response=> {
        return response.json();
        }).then(data => {
            console.log(data);
            setItem(data);
        })
    } ,[])
    
    if(item == null){
        return "Loading....";
    }


    function formSubmitHandler(e){
        //tahab teha htpp requesti keelan selle 2ra
        e.preventDefault(); // lopetab tava tingimused
        console.log("vorm 6nnestus");

        const nameValue = nameInputRef.current.value;
        const priceValue = priceInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;

        const itemSubmitted={
            id: item.id,
            name: nameValue,
            price: priceValue,
            category: categoryValue
        }
        //console.log(itemSubmitted);
        fetch('http://localhost:8080/edit-item', {
            method: 'POST',
            body: JSON.stringify(itemSubmitted),
            headers: {
                'Content-Type':'application/json'
            }
        });
        
    }

    return(
        // Label on 22rest 22reni ja span on nii  pikk kui text on
        <form onSubmit={formSubmitHandler}>
 
            <label>Eseme nimi</label> 
            <br/>
            <input type="text" placeholder="Nimi" defaultValue={item.name} required ref={nameInputRef} />
            <br/>
            <label>Eseme hind</label> 
            <br/>
            <input type="number" placeholder="Hind" defaultValue={item.price} required ref={priceInputRef} />
            <br/>
            <label>Eseme karegooria</label> 
            <br/>
            <input type="text" placeholder="Kategooria" defaultValue={item.category} required ref={categoryInputRef} />
            <br/>
            <button className="TooteSisestus">Muuda toodet</button>
        </form>
    )

}

export default EditItem;