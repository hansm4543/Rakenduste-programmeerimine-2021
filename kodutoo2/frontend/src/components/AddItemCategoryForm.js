import './AddItemForm.css';
import { useRef } from 'react';

function AddItemCategoryForm(props){
    const nameInputRef = useRef();
    const categoryInputRef = useRef();


    function formSubmitHandler(e){
        //tahab teha htpp requesti keelan selle 2ra
        e.preventDefault(); // lopetab tava tingimused
        console.log("Category vorm 6nnestus");
        /*
        console.log(nameInputRef.current.value);
        console.log(priceInputRef.current.value);
        console.log(categoryInputRef.current.value);
        */
        const nameValue = nameInputRef.current.value;
        const categoryValue = categoryInputRef.current.value;

        const item={
            name: nameValue,
            category: categoryValue
        }
        //console.log(item);

        props.onAddItem(item);

    }

    return(
        // Label on 22rest 22reni ja span on nii  pikk kui text on
        <form onSubmit={formSubmitHandler}>
            <label>Kategooria nimi</label> 
            <br/>
            <input type="text" placeholder="nimi" required ref={nameInputRef} />
            <br/>
            <label>Kategooria tyyp</label>
            <br/>
            <label>PREMIUM, DELUXE, BASIC</label>  
            <br/>
            <input type="text" placeholder="TYYP" required ref={categoryInputRef} />
            <br/>
            <button>sisesta</button>
        </form>
    )
}

export default AddItemCategoryForm;