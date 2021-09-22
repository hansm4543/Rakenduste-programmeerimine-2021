import './AddItemForm.css';
import { useRef } from 'react';

function AddItemForm(props){
    const nameInputRef = useRef();
    const priceInputRef = useRef();
    const categoryInputRef = useRef();


    function formSubmitHandler(e){
        //tahab teha htpp requesti keelan selle 2ra
        e.preventDefault(); // lopetab tava tingimused
        console.log("vorm 6nnestus");
        /*
        console.log(nameInputRef.current.value);
        console.log(priceInputRef.current.value);
        console.log(categoryInputRef.current.value);
        */
        const nameValue = nameInputRef.current.value;
        const priceValue = priceInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;

        const item={
            name: nameValue,
            price: priceValue,
            category: categoryValue
        }
        //console.log(item);

        props.onAddItem(item);

    }

    return(
        // Label on 22rest 22reni ja span on nii  pikk kui text on
        <form onSubmit={formSubmitHandler}>
            <label>Eseme nimi</label> 
            <br/>
            <input type="text" placeholder="nimi" required ref={nameInputRef} />
            <br/>
            <label>Eseme hind</label> 
            <br/>
            <input type="number" placeholder="hind" required ref={priceInputRef} />
            <br/>
            <label>Eseme karegooria</label> 
            <br/>
            <input type="text" placeholder="kategooria" required ref={categoryInputRef} />
            <br/>
            <button>sisesta</button>
        </form>
    )
}

export default AddItemForm;